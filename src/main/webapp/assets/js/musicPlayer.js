	/**
 * 
 */
const musicContainer = document.querySelector('.music-player');
    const artistName= document.querySelector('.artist');
    const playBtn = document.querySelector('.play-pause.fas'); 
    const nextBtn = document.querySelector('.next.fas');
    const pevBtn = document.querySelector('.pev.fas');
    const audio = document.querySelector('#audio');audio.pause()
    const progress = document.querySelector('.progress');
    const progressContainer = document.querySelector('.progress-container');
    const progressbar = document.querySelector('.progress-bar');
    const title = document.querySelector('.title1');
    const songImage = document.querySelector('#cover');
    const likeBtn = document.querySelector('#likeMusic'); 
    const sound = document.querySelector('#voume');
    	const isTrack = new URLSearchParams(window.location.search).get("tracks");
    console.log(sound)
    
    // song names
    
    // to fetch all the tracks 
    
    
    
    // const rootUrl = window.location.origin + "/dobooweb";
	const trackDetails = [];

// Function to fetch and store track details
async function fetchAndStoreTrackDetails() {
  try {
    const response = await fetch(rootUrl + '/tracks');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const loadData = data["data"];
    
    // Assuming the response is an array of track objects with properties like 'title' and 'artist'
    trackDetails.push(...loadData);

    // You can access track details anytime by using the 'trackDetails' array
    console.log(trackDetails);

    // Now that data is loaded, find the track
    const buyingTracks = new URLSearchParams(window.location.search).get("tracks");
    const streamingTracks = new URLSearchParams(window.location.search).get("stream");
    let songIndex;

    if (buyingTracks) {
      songIndex = buyingTracks / 25678;
    } 
    else if(streamingTracks){
    songIndex = streamingTracks;
    }
    else {
      songIndex = trackDetails[0].id;
    }

    console.log("songId");
    console.log(songIndex);

 
    // Find the track by calling findTrackById
    let realTrack;
    function loadsong(realtrack) {
      title.innerText = realtrack.TrackName;
      artistName.innerHTML=realtrack.artistName;
      audio.src = `https://docs.google.com/uc?export=open&id=${realtrack.audioUrl}`;
      songImage.src = realtrack.imageUrl;
    }
    if(buyingTracks){
    realTrack = findTrackIndexById(songIndex);
    loadsong(trackDetails[realTrack]);
    }
    else{
		realTrack = findTrackIndexById(songIndex);
		loadsong(trackDetails[0]);
	}
   
    // now we need to load the song 

    
    
    
     // pevSong event  

    function prevSong(){
      
     realTrack--;
     
      if (realTrack < 0){
        realTrack = trackDetails.length-1
      }     
      loadsong(trackDetails[realTrack]);

    }
    // next song function when we click it. it will move to the next song
     
    function nextSong(){
		 realTrack++;

      if (realTrack > trackDetails.length-1){
        realTrack = 0
      }     
     loadsong(trackDetails[realTrack]);

    }
    
     pevBtn.addEventListener("click", prevSong);
     nextBtn.addEventListener("click",nextSong);
     
     // Function to create and append images to the "similar" div
		function createAndAppendImages() {
		    // Get the div element with the class "similar"
		    var divElement = document.querySelector('.similar');
		
		    if (divElement) {
		        // Create an array of image URLs
		        var imageUrls = [
					
		            trackDetails[1].imageUrl,
		            trackDetails[2].imageUrl,
		            trackDetails[3].imageUrl,
		           	trackDetails[4].imageUrl
		        ];
		
		        // Loop through the image URLs and create img elements
		        imageUrls.forEach(function(url) {
		            var imgElement = document.createElement('img');
		            imgElement.setAttribute('loading', 'lazy');
		            imgElement.setAttribute('src', url);
		            imgElement.setAttribute('alt', '');
		
		            // Append the img element to the "similar" div
		            divElement.appendChild(imgElement);
		        });
		    } else {
		        console.log('Div element with class "similar" not found.');
		    }
		}

		// Call the function to create and append images
		if (buyingTracks || streamingTracks) {
			createAndAppendImages();
		}
		
		
		// we need the like to be created 
		
		function likesong(){
      
		let userEmailDuplicate = JSON.parse(localStorage.getItem("userEmail"));
        likeBtn.classList.toggle("fa-solid")
        likeBtn.classList.toggle("animated");
        likeBtn.classList.toggle("active");
        likeBtn.classList.toggle("true");
        const likedTracks = JSON.parse(localStorage.getItem("Liked")) || [];
        const trackid = trackDetails[realTrack].id;
        const exist =
          likedTracks.length && likedTracks.some((data) => data.trackid == trackid && data.userEmail == userEmailDuplicate);
        // let trueorfalse=this.dataset.getAttribute("like").toggle("true")
		const trackInfo = trackDetails[realTrack];
		
        if (this.classList.contains("true") && !exist) {
          this.setAttribute("like", "true");
          likedTracks.push({
			  "Trackname":trackInfo.TrackName,
			  "artistname":trackInfo.artistName,
			  "imageUrl":trackInfo.imageUrl,
			  "trackid":trackInfo.id,
			  "userEmail":userEmailDuplicate
		  });
        
          localStorage.setItem("Liked", JSON.stringify(likedTracks));
          // JSON.stringify({"track-id":loadtrack["productId"],"Trackname":loadtrack["trackname"],})
        } 
        else {
          this.setAttribute("like", "false");
          const LikedList = likedTracks.filter((data) => data.trackid != trackid || data.userEmail !== userEmail);
          localStorage.setItem("Liked", JSON.stringify(LikedList));
        }
    
    }
    
     likeBtn.addEventListener('click',likesong);
     
     
     function findMusicPlayerLike() {
        const likedTracks = JSON.parse(localStorage.getItem("Liked"));
        const userEmail = JSON.parse(localStorage.getItem("userEmail"));
        const trackid = trackDetails[realTrack].id;
        const exist = 
          likedTracks.length && likedTracks.some((data) => data.trackid == trackid && data.userEmail == userEmail);
        // const alreadyUser = exist.some((email) => email.userEmail == userEmail);
        if (exist) {
          likeBtn.classList.toggle("fa-solid");
          likeBtn.classList.toggle("animated");
          likeBtn.classList.toggle("active");
          likeBtn.classList.toggle("true");
        }
      }
      
      if(localStorage.getItem("Liked") && isTrack){
		  
      findMusicPlayerLike();
    }
    
  } catch (error) {
    console.error('Error fetching track details:', error);
  }
}

// Call the function to fetch and store track details
fetchAndStoreTrackDetails();

// Function to locate the specific song
function findTrackIndexById(songId) {
  const index = trackDetails.findIndex(track => track.id == songId);
  return index !== -1 ? index : null;
}

    // need to add progress event
          
    function updateProgress(e) {
      const { duration, currentTime} = e.srcElement
      const progressPercent = (currentTime / duration) * 100
      progress.style.width = `${progressPercent}%`
      
      }
      
    
    // load on the progress bar 

    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }

    

    // starting time function 

    function starttime(){
      // const audio= document.querySelector("audio")
      const duration=audio.duration
      const currentTime= audio.currentTime
      const progress= currentTime/duration * 100

      const totalTime = `${Math.floor(duration / 60)}:${(`0${Math.floor(duration % 60)}`).slice(-2)}`;
      const current_play_time= `${Math.floor(currentTime / 60)}:${(`0${Math.floor(currentTime%60)}`).slice(-2)}`;

      document.querySelector('.start').innerHTML = current_play_time
      document.querySelector('.end').innerHTML =  totalTime
     
    }

    setInterval(starttime,500)
    
   
    // function togglePlayPauseButton(event) and all events  {


      playBtn.addEventListener("click", (event) => {

      const el = event.target;
      // checking if the song is playing or not 

      el.classList.toggle("playing")
       if(document.querySelector(".imageContainer")){
		  const imagePlayPause = document.querySelector(".imageContainer")
		   imagePlayPause.classList.toggle('paused'); 
	 }

      if (!el.classList.contains("playing")) {
        el.classList.add("fa-play")
        el.classList.remove("fa-pause")
        audio.pause()
      } else {
        el.classList.add("fa-pause")
        el.classList.remove("fa-play")
        audio.play()
      }

    })
    
  
    

    // volume control function on music player.
    
    
    // sound.setAttribute("data-test","mute");
  
     audio.addEventListener('timeupdate', updateProgress);
     progressbar.addEventListener('click', setProgress);
   
    
     

     const volumeBar = document.querySelector('.volume-bar-1');
	 const volumeBarFill = document.querySelector('.volumeProgress');
	 const mute=document.querySelector("#voume")

	let isDragging = false;


function setVolumeFromMousePosition(event) {
  const volumeBarWidth = volumeBar.offsetWidth;
  const mouseX = event.clientX - volumeBar.getBoundingClientRect().left;
  const volumePercentage = (mouseX / volumeBarWidth); 
  audio.volume = volumePercentage;
  // console.log(volumePercentage)
  volumeBarFill.style.width = `${100 * mouseX / volumeBarWidth}%`;

  const volumeTurn = volumePercentage * 10
  // console.log(volumeTurn)

 return volumeTurn
}



volumeBar.addEventListener('mousedown', (event) => {
  isDragging = true;
  setVolumeFromMousePosition(event);
});

volumeBar.addEventListener('mousemove', (event) => {
  if (isDragging) {
    setVolumeFromMousePosition(event);
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});


mute.addEventListener("click", () => {
  mute.classList.toggle("mute")

  if(mute.classList.contains("mute")){
    mute.classList.add("fas", "fa-volume-mute");
    document.querySelector(".volumeProgress").style.width="0%";
    audio.volume = 0;
  }
  else{
    mute.classList.remove("fas", "fa-volume-mute");
    mute.classList.add("fas", "fa-volume-down")
    document.querySelector(".volumeProgress").style.width="100%";
    audio.volume = 1;
  }
})


    const lyricsSection = document.querySelector('.secondright');

document.getElementById("showLyrics").addEventListener("click", ()=>{ 
   lyricsSection.classList.toggle('hidden');   
});
    