

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
    const likeBtn = document.querySelector('#like'); 
    const sound = document.querySelector('#voume');
    console.log(sound)

 
  
    // song names

    const songNames = ['remix kingdom', 'pop', 'pop2']

    //numbers the song 

    let songIndex = 2


    // now we need to define the function 

    function loadsong(song) {
      title.innerText = song
      audio.src = `../../assets/audio/${song}.mp3`
      songImage.src = `../../assets/img/${song}.jpg`

    }

    // now we need to load the song 

    loadsong(songNames[songIndex])

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

      const totalTime = `${Math.floor( duration/ 60)}:${(`${Math.floor(duration)}`).slice(1)}`
      const current_play_time= `${Math.floor(currentTime / 60)}:${(`0${Math.floor(currentTime%60)}`).slice(-2)}`;

      document.querySelector('.start').innerHTML = current_play_time
      document.querySelector('.end').innerHTML =  totalTime
     
    }

    setInterval(starttime,500)
    
    // pevSong event  

    function prevSong(){
      
      songIndex--
      if (songIndex < 0){
        songIndex = songNames.length-1
      }     
      loadsong(songNames[songIndex])
      
      
    }
    // next song function when we click it. it will move to the next song
     
    function nextSong(){
      songIndex++
      if (songIndex > songNames.length-1){
        songIndex = 0
      }     
      loadsong(songNames[songIndex])


    }

    // function togglePlayPauseButton(event) and all events  {


      playBtn.addEventListener("click", (event) => {
      
      const el = event.target;
      // checking if the song is playing or not 

      
      el.classList.toggle("playing")

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

    // we need the like to be created 
    
    function likesong(){
      
      likeBtn.classList.toggle("fa-solid")
    
    }
    // volume control function on music player.
    
    
    // sound.setAttribute("data-test","mute");
    
    




     
    

    
     audio.addEventListener('timeupdate', updateProgress);
     progressbar.addEventListener('click', setProgress);
     pevBtn.addEventListener("click", prevSong);
     nextBtn.addEventListener("click",nextSong);
     likeBtn.addEventListener('click',likesong);
     

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
    audio.volume = 0;
  }
  else{
    mute.classList.remove("fas", "fa-volume-mute");
    mute.classList.add("fas", "fa-volume-down")
    audio.volume = 1;
  }
})
     
let track;
let trackContainer;
let track_name;
let artistname;
let product_image;

const uri = 'http://localhost:8080/dobooweb/tracks';

let loadData;

fetch(uri, {
  method: 'GET',
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming the response is in JSON format
  })
  .then(data => {
    loadData = data["data"]; // Assign the JSON data to the loadData variable
    // Handle the JSON data here
    console.log(loadData);
    console.log(data);

    let length;
    if (loadData.length >= 5) {
      length = 5;
    } else {
      length = loadData.length;
    }

    for (let i = 0; i < length; i++) {
      track = document.createElement("div");
      track.setAttribute("class", "tracks");

      trackContainer = document.createElement("a");
      trackContainer.setAttribute("href", "../../pages/track listening page/track listening page.html?tracks=" + loadData[i]["id"]);
      trackContainer.setAttribute("style", "text-decoration:none;");
      track.append(trackContainer);

      product_image = document.createElement("img");
      product_image.setAttribute("src", loadData[i]["imageUrl"]);
      trackContainer.append(product_image);

      track_name = document.createElement("p");
      track_name.innerText = loadData[i]["TrackName"];
      trackContainer.append(track_name);

      artistname = document.createElement("p");
      artistname.innerText = "kishore";
      track.append(artistname);

      document.querySelector("div.productlist").append(track);
    }
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

      


    const lyricsSection = document.querySelector('.secondright');

document.getElementById("showLyrics").addEventListener("click", ()=>{ 
   lyricsSection.classList.toggle('hidden');   
});
    

// if (JSON.parse(localStorage.getItem("userRoleC")) === "seller") {
//   alert("Welcome Artist "+ `${JSON.parse(localStorage.getItem("userEmail"))}`)
// }


       



// import { add } from "../js/tracklistening.js";
// console.log(add(4))







