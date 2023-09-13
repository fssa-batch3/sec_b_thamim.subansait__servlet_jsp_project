const trackId = new URLSearchParams(window.location.search).get("tracks");
      const track_details = JSON.parse(localStorage.getItem("trackName"));
      
      const userEmail = JSON.parse(localStorage.getItem("userEmail")); 
      
      function findTrack(track) {
        return track.songId === trackId;
      }

      const loadtrack = track_details.find(findTrack);
    
      // create the HTML image element
      const imagCon=document.createElement("a");
      imagCon.className="imageContainer"

      const img = document.createElement('img');
      img.src = `https://picsum.photos/340/300`;
      img.id ="logo1"
      img.classList.add("play-pause.fas")
     
      // add the HTML image element to the document body
      imagCon.append(img);
      // document.querySelector(".card").prepend(icon)
      document.querySelector(".card").append(imagCon);

      
      
      document.querySelector('.imageContainer').addEventListener('click', function() {
        
        this.classList.toggle('paused'); /* toggle the 'paused' class on click */

});

      

      const imageContainer = document.querySelector('.imageContainer');

      track_title = document.createElement("p");
      track_title.innerText = `Track Name :` + ` ${loadtrack.trackname}`;
      document.querySelector(".properdetail").append(track_title);

      track_bpm = document.createElement("p");
      track_bpm.innerText = `BPM :` + ` ${loadtrack.bpm}`;
      document.querySelector(".properdetail").append(track_bpm);

      track_Daw = document.createElement("p");
      track_Daw.innerText = `Used DAW :` + ` ${loadtrack.daw}`;
      document.querySelector(".properdetail").append(track_Daw);

      artist_name = document.createElement("p");
      artist_name.innerText = loadtrack.artistName;
      document.querySelector(".properdetail").append(artist_name);

      track_Genre = document.createElement("p");
      track_Genre.innerText = `Genre : ` + ` ${loadtrack.genre}`;
      document.querySelector(".properdetail").append(track_Genre);

      track_Key = document.createElement("p");
      track_Key.innerText = `Key : ` + ` ${loadtrack.key}`;
      document.querySelector(".properdetail").append(track_Key);

      track_Camelot = document.createElement("p");
      track_Camelot.innerText = "Camelot : " + " " + "1A to 13E";
      document.querySelector(".properdetail").append(track_Camelot);

      track_Detail = document.createElement("p");
      track_Detail.innerText = `Track Details : ${loadtrack.detail}`;
      document.querySelector(".properdetail").append(track_Detail);

      track_Price = document.createElement("p");
      track_Price.setAttribute("style", "font-size: x-large;font-weight: 600;");
      track_Price.innerText = `Price : ` + `$${loadtrack.price}`;
      document.querySelector(".properdetail").append(track_Price);

      // cart_button=document.createElement("a");
      // cart_button.setAttribute("href","../cart/cart.html")
      // cart_button.setAttribute("style","text-decoration: none");
      // document.querySelector(".tocart")

      // button_button=document.createElement("button");
      // button_button.setAttribute("type","button");

      // document.querySelector("div.card").append(track_img);
      // document.querySelector("div.card").append(track_title);
      // document.querySelector("div.card").append(artist_name);

      detail = document.querySelector("div.detail");

      //   const likeBtn = document.querySelector('#like');

      //   function likesong(){
      //   likeBtn.classList.toggle("fa-solid")
      // }
      // likeBtn.addEventListener('click',likesong);

      const lyric = document.createElement("p");
      document.querySelector(".lyric").append(lyric)




      const imageContainer1 = document.querySelector(".imageContainer");
      

      imageContainer1.addEventListener("click", function() {
        // get the song info that needs to be stored
        const UpdateDate = new Date();
        const formattedDate = `${UpdateDate.getDate()}/${UpdateDate.getMonth() + 1}/${UpdateDate.getFullYear()}`;
        const time =`${UpdateDate.toLocaleTimeString()}`

        if(imageContainer1.classList.contains("paused")){
        const song = {
          "trackname": loadtrack.trackname,
          "artistname": loadtrack.artistName,
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


      function lyrics() {
        if (loadtrack.lyrics.length != 0) {
          return loadtrack.lyrics;
        }else{
          return "No Lyrics available"}
      }

      lyric.innerHTML = lyrics();
      

      const button = document.querySelector("#like");
      const likepop = document.querySelector(".like");
      const dislikepop = document.querySelector(".dislike");

      console.log(userEmail)

      button.addEventListener("click", function (e) {
        this.classList.toggle("fa-solid");
        this.classList.toggle("animated");
        this.classList.toggle("active");
        this.classList.toggle("true");
        const likedTracks = JSON.parse(localStorage.getItem("Liked")) || [];
        const trackid = loadtrack.songId;
        const exist =
          likedTracks.length && likedTracks.some((data) => data.trackid == trackid && data.userEmail == userEmail);
        // let trueorfalse=this.dataset.getAttribute("like").toggle("true")

        if (this.classList.contains("true") && !exist) {
          this.setAttribute("like", "true");
          likedTracks.push({
            trackid: loadtrack.songId,
            Trackname: loadtrack.trackname,
            artistname: loadtrack.artistName,
            userEmail: userEmail,
          });
        
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
        const trackid = loadtrack.songId;
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
        const trackid = loadtrack.songId;
        const exist =
          savedTracks.length && savedTracks.some((data) => data.trackid == trackid && data.userEmail == userEmail);
        // let trueorfalse=this.dataset.getAttribute("like").toggle("true")

        if (this.classList.contains("true") && !exist) {
          this.setAttribute("saved", "true");
          savedTracks.push({
            trackid: loadtrack.songId,
            Trackname: loadtrack.trackname,
            artistname: loadtrack.artistName,
            userEmail,
          });
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
        const trackid = loadtrack.songId;
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
      

      const cart_button = document.querySelector(".cart");

      cart_button.addEventListener("click", function (e) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const trackid = loadtrack.songId;
        const exist = cart.some((data) => data.trackid == trackid && data.userEmail == userEmail);

        if (!exist) {
          cart.push({
            trackid: loadtrack.songId,
            Trackname: loadtrack.trackname,
            artistname: loadtrack[""],
            detail: loadtrack.detail,
            price: loadtrack.price,
            userEmail,
          });
          localStorage.setItem("cart", JSON.stringify(cart));
          // JSON.stringify({"track-id":loadtrack["productId"],"Trackname":loadtrack["trackname"],})
        } else {
          alert("Already In cart")

          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });

       
// export function add(n){
//     return n*2;
//   }