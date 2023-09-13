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

        // const songNames = ['remix kingdom', 'pop', 'pop2']

        //numbers the song 

        // let songIndex = 2


        // now we need to define the function 

        /*function loadsong(song) {
          title.innerText = song
          audio.src = `https://docs.google.com/uc?export=open&id=13s1pwgpWZAbpwYgaFa_MgdxiKGOILCtX`
         //  songImage.src = "https://picsum.photos/200/300"

        }*/

        // now we need to load the song 

        // loadsong(songNames[songIndex])

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

        function starttime() {
            // const audio= document.querySelector("audio")
            const duration = audio.duration;
            const currentTime = audio.currentTime;

            // Calculate progress (if needed)
            const progress = currentTime / duration * 100;

            // Calculate total time in "mm:ss" format
            const totalTime = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;

            // Calculate current playback time in "mm:ss" format
            const current_play_time = `${Math.floor(currentTime / 60)}:${(`0${Math.floor(currentTime % 60)}`).slice(-2)}`;

            // Update HTML elements with class names .start and .end
            document.querySelector('.start').innerHTML = current_play_time;
            document.querySelector('.end').innerHTML = totalTime;
        }

        setInterval(starttime,500)
        
        // pevSong event  

        /*function prevSong(){
          
          songIndex--
          if (songIndex < 0){
            songIndex = songNames.length-1
          }     
          loadsong(songNames[songIndex])
          
          
        }
        */
        // next song function when we click it. it will move to the next song
         /*
        function nextSong(){
          songIndex++
          if (songIndex > songNames.length-1){
            songIndex = 0
          }     
          loadsong(songNames[songIndex])


        }
        */
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
          
        audio.addEventListener('timeupdate', updateProgress);
        progressbar.addEventListener('click', setProgress);
        //pevBtn.addEventListener("click", prevSong);
        //nextBtn.addEventListener("click",nextSong);
       // likeBtn.addEventListener('click',likesong);
        

        const volumeBar = document.querySelector('.volume-bar-1');
   const volumeBarFill = document.querySelector('.volumeProgress');
   const mute=document.querySelector("#voume")

   let isDragging = false;


   function setVolumeFromMousePosition(event) {
     const volumeBarWidth = volumeBar.offsetWidth;
     const mouseX = event.clientX - volumeBar.getBoundingClientRect().left;
     const volumePercentage = (mouseX / volumeBarWidth); 
     audio.volume = volumePercentage;
     
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
   
   const lyricsSection = document.querySelector('.secondright');

document.getElementById("showLyrics").addEventListener("click", ()=>{ 
   lyricsSection.classList.toggle('hidden');   
});
        