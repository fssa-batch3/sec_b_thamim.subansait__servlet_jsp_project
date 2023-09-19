	const trackId = new URLSearchParams(window.location.search).get("tracks");
    const rootUrl = window.location.origin + "/dobooweb";
    const realId = trackId/25678;
    const trackDetailsGlobal = [];
    
    /*
    // this is for the loader in the page 
      document.addEventListener("DOMContentLoaded", function () {
    // Simulate data loading with setTimeout (you should replace this with your data loading logic)
    setTimeout(function () {
        // Remove the loader when the data is loaded
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");

        if (loader && content) {
            loader.style.display = "none";
            content.style.display = "block"; // Display the content
        }
    }, 2000); // Simulate a 2-second data loading time (adjust as needed)
});
*/

      
    // this is for the static feature using localstorage so It basically works around with user Email 
    //so I setItem when the user logged in so now I'm getting it to use it in recently played songs and liked tracks 
    
    let userEmail = JSON.parse(localStorage.getItem("userEmail"));

// to load the track detail using track id
async function fetchTrackDetails() {
  if (trackId) {
    try {
      // Send a GET request to the servlet endpoint
      const response = await fetch(rootUrl+`/track/detail?trackid=${realId}`);

      if (response.ok) {
        // Parse the JSON response
        const data = await response.json();

        // Check if the response contains valid data
        if (data && data.status === 200 && data.track) {
			console.log(data);
          const NewTrack = data.track;
          console.log(NewTrack);
          
                    // Populate HTML elements with track details
                    trackDetailsGlobal.push({
						 trackid: realId,
						Trackname:NewTrack.TrackName,
						imageUrl: NewTrack.imageUrl,
            			artistname: data.artistName,
            			userEmail: userEmail,
						
                    });
                    
			      // create the HTML image element
		      const imagCon=document.createElement("a");
		      imagCon.className="imageContainer"
		
		      const img = document.createElement('img');
		      img.src = NewTrack.imageUrl;
		      img.id ="logo1"
		      img.classList.add("play-pause.fas")
		      
		      const artistNameDiv = document.createElement('div');
		      artistNameDiv.classList.add("artistNameContainer");
		      artistNameDiv.setAttribute("style","display: flex;flex-direction: row;justify-content: center;gap: 15px;")
 
		      const artistPlaceholder = document.createElement('small');
		      const boldartistPlaceholder =  document.createElement('strong');
		     boldartistPlaceholder.innerText = "Artist Name : "
		     artistPlaceholder.append(boldartistPlaceholder);
		     artistPlaceholder.setAttribute("style","color:white;font-size: 17px;");
		     
		      const artistname = document.createElement('small');
		     localStorage.setItem("artistName",JSON.stringify(data.artistName));
		     artistname.innerText = data.artistName
		    artistname.setAttribute("style","color:white;font-size: 17px;");
		      // add the HTML image element to the document body
		      imagCon.append(img);
		      artistNameDiv.append(artistPlaceholder);
		      artistNameDiv.append(artistname);

		      // document.querySelector(".card").prepend(icon)
		      document.querySelector(".card").append(imagCon);
		    
		      
		      document.querySelector(".leftside").append(artistNameDiv);
		      
		      function createAndAppendElement(label, value) {
				  const paragraph = document.createElement("p");
				  const strong = document.createElement("strong");
				  strong.textContent = `${label} :`;
				  paragraph.appendChild(strong);
				  paragraph.appendChild(document.createTextNode(` ${value}`));
				  document.querySelector(".properdetail").append(paragraph);
				}
				
				createAndAppendElement("Track Name", NewTrack.TrackName);
				createAndAppendElement("BPM", NewTrack.bpm);
				createAndAppendElement("Used DAW", NewTrack.daw);
				createAndAppendElement("Genre", NewTrack.genre);
				createAndAppendElement("Scale", NewTrack.scale);
				createAndAppendElement("Track Details", NewTrack.TrackDetail);
				createAndAppendElement("Price", `$${NewTrack.price}`);
						      
      detail = document.querySelector("div.detail");

      const lyric = document.createElement("p");
      lyric.innerHTML = "Young blood thinks there's always tomorrow ♪ I miss your touch on nights when I'm hollow ♪ I know you crossed a bridge that I can't follow ♪";
      document.querySelector(".lyric").append(lyric);
        
	      
	   // this is for the play pause in the image of the track
	    const audioPlay = document.querySelector('#audio');audio.pause()
		const playBtn = document.querySelector('.play-pause.fas'); 

      document.querySelector('.imageContainer').addEventListener('click', function() {
        
        this.classList.toggle('paused');
         /* toggle the 'paused' class on click */
        
			playBtn.classList.toggle("playing")

		      if (!playBtn.classList.contains("playing")) {
		        playBtn.classList.add("fa-play")
		        playBtn.classList.remove("fa-pause")
		        audioPlay.pause()
		      } else {
		        playBtn.classList.add("fa-pause")
		        playBtn.classList.remove("fa-play")
		        audioPlay.play()
		      }

		});
		// end of the play pause function 
		
		const imageContainer1 = document.querySelector(".imageContainer");
      
      // this is for when the user clicks the play icon we nee to add that track to the recently played tracks

      imageContainer1.addEventListener("click", function() {
        // get the song info that needs to be stored
        const UpdateDate = new Date();
        const formattedDate = `${UpdateDate.getDate()}/${UpdateDate.getMonth() + 1}/${UpdateDate.getFullYear()}`;
        const time =`${UpdateDate.toLocaleTimeString()}`;
		
        if(imageContainer1.classList.contains("paused")){
			
			
        const song = {
          "trackname": NewTrack.TrackName,
          "artistname": data.artistName,
          "trackImage":NewTrack.imageUrl,
          "trackId":trackId,
          "date": formattedDate,
          "time": time,
          "userEmail": userEmail
          
        };
      
        
        // check if array already exists in local storage
        let songArray = JSON.parse(localStorage.getItem("recentlyPlayed")) || [];
        
        
        // add new song to the array

        const alreadyAdded = songArray.some(
          (data) => data.trackId == trackId && data.date == formattedDate && data.userEmail == userEmail
        );
          

          const index = songArray.findIndex(
            (data) => data.trackId == trackId && data.date == formattedDate && data.userEmail == userEmail
          );

          

        if(!alreadyAdded){
        songArray.push(song);
        
        // store updated array in local storage
        localStorage.setItem("recentlyPlayed", JSON.stringify(songArray));
      }
      else {
        songArray[index]["time"] = new Date().toLocaleTimeString();
        console.log(songArray[index]["time"] = new Date().toLocaleTimeString());
        localStorage.setItem("recentlyPlayed", JSON.stringify(songArray));

      }
      }
      });
            
        } else {
          console.error("Invalid data received from the server.");
        }
      } else {
        console.error("Failed to fetch data from the server.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
if(trackId){
window.addEventListener("load", fetchTrackDetails);
}

	            
//

      /*function lyrics() {
        if (loadtrack.lyrics.length != 0) {
          return loadtrack.lyrics;
        }else{
          return "No Lyrics available"}
      }

      lyric.innerHTML = lyrics();
      */

      const button = document.querySelector("#like");
      const likepop = document.querySelector(".like");
      const dislikepop = document.querySelector(".dislike");

      console.log(userEmail)

      button.addEventListener("click", function () {  
		  
       if (button.classList.contains("fa-solid")) {
		    button.classList.remove("fa-solid");
		  } else {
		    button.classList.add("fa-solid");
		  }
        this.classList.toggle("animated");
        this.classList.toggle("active");
        this.classList.toggle("true");
        const likedTracks = JSON.parse(localStorage.getItem("Liked")) || [];
        const trackid = realId;
        const exist =
          likedTracks.length && likedTracks.some((data) => data.trackid == trackid && data.userEmail == userEmail);
        // let trueorfalse=this.dataset.getAttribute("like").toggle("true")

        if (this.classList.contains("true") && !exist) {
          this.setAttribute("like", "true");
          likedTracks.push(trackDetailsGlobal[0]);
        
          localStorage.setItem("Liked", JSON.stringify(likedTracks));
          // JSON.stringify({"track-id":loadtrack["productId"],"Trackname":loadtrack["trackname"],})
        } else {
          this.setAttribute("like", "false");
          const LikedList = likedTracks.filter((data) => data.trackid != trackid || data.userEmail !== userEmail);
          localStorage.setItem("Liked", JSON.stringify(LikedList));
        }
      });



      function findLike() {
        const likedTracks = JSON.parse(localStorage.getItem("Liked"));
        const userEmail = JSON.parse(localStorage.getItem("userEmail"));
        const trackid = realId;
        const exist = 
          likedTracks.length && likedTracks.some((data) => data.trackid == trackid && data.userEmail == userEmail);
        // const alreadyUser = exist.some((email) => email.userEmail == userEmail);
        if (exist) {
          button.classList.toggle("fa-solid");
          button.classList.toggle("animated");
          button.classList.toggle("active");
          button.classList.toggle("true");
        }
      }
      
      if(localStorage.getItem("Liked")){
      findLike();
    }

      function timeout() {
        likepop.style.display = "none";
      }
      function timeout2() {
        dislikepop.style.display = "none";
      }

      function likeAlert() {
        if (this.classList.contains("active")) {
          likepop.style.display = "block";
          dislikepop.style.display = "none";
          likepop.style.transition = "ease-in-out 10s";
          setTimeout(timeout, 5000);
        } else {
          dislikepop.style.display = "block";
          likepop.style.display = "none";
          dislikepop.style.transition = "ease-in-out 10s";
          setTimeout(timeout2, 5000);
        }
      }

      button.addEventListener("click", likeAlert);

      const saveBtn = document.getElementById("save");

      saveBtn.addEventListener("click", function (e) {
        this.classList.toggle("fa-solid");
        this.classList.toggle("true");
        const savedTracks = JSON.parse(localStorage.getItem("saved")) || [];
        const trackid = realId;
        const exist =
          savedTracks.length && savedTracks.some((data) => data.trackid == trackid && data.userEmail == userEmail);
        // let trueorfalse=this.dataset.getAttribute("like").toggle("true")

        if (this.classList.contains("true") && !exist) {
          this.setAttribute("saved", "true");
          savedTracks.push(trackDetailsGlobal[0]);
          localStorage.setItem("saved", JSON.stringify(savedTracks));
          // JSON.stringify({"track-id":loadtrack["productId"],"Trackname":loadtrack["trackname"],})
        } else {
          this.setAttribute("saved", "false");
          const savedList = savedTracks.filter((data) => data.trackid != trackid && data.userEmail == userEmail);

          localStorage.setItem("saved", JSON.stringify(savedList));
        }
      });

      function findLike1() {
        const savedTracks = JSON.parse(localStorage.getItem("saved"));
        const userEmail = JSON.parse(localStorage.getItem("userEmail"));
        const trackid = realId;;
        const exist =
          savedTracks.length && savedTracks.some((data) => data.trackid == trackid && data.userEmail == userEmail);
          // const alreadyUser = exist.some((email) => email.userEmail == userEmail) 
        if (exist) {
          saveBtn.classList.toggle("fa-solid");
          saveBtn.classList.toggle("true");
        }
      }

      if(localStorage.getItem("saved")){
      findLike1();
    }
      
	// function for to add the track to the cart page 
	
      const cart_button = document.querySelector(".cart");

      cart_button.addEventListener("click", function () {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const trackId = realId;
        const exist = cart.some((data) => data.trackid == trackId && data.userEmail == userEmail);

        if (!exist) {
          cart.push({
            trackid: realId,
            userEmail,
          });
          localStorage.setItem("cart", JSON.stringify(cart));
          Notify.success("product successfully added to your cart");
          // JSON.stringify({"track-id":loadtrack["productId"],"Trackname":loadtrack["trackname"],})
        } else {
          alert("Already in the cart")

          localStorage.setItem("cart", JSON.stringify(cart));
        }
         
        location.reload();
      });
      
      
    

       
// export function add(n){
//     return n*2;
//   }