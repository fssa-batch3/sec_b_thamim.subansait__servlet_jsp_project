<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
      <%@ page isELIgnored = "false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Music Player</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
</head>
<body>
<style>
*{
font-family: 'Poppins', sans-serif;

}
::-webkit-scrollbar{
  display: none;
}

body {
  margin: 0;
  padding: 0;
  font-size: 14px;

}
.secondright {
  color: white;
    /* position: sticky; */
    position: fixed;
    right: 10px;
    margin: auto;
    top: 58%;
    /* bottom: 100px; */
    margin-right: 20px;
    /* margin-bottom: 65px; */
    z-index: 1;
    /* right: 35px; */
    height: 250px;
    overflow-y: scroll;
    /* margin-top: 13px; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 20px;
    background-color: #1c1c1c;
    text-align: start;
    width: max-content;
    padding: 30px;
    /* padding-left: 80px; */
    /* padding-right: 80px; */
}

.hidden {
  display: none;
}

.animation {
  animation-name: move;
  animation-duration: .4s;
  animation-fill-mode: both;
  animation-delay: 1s;
}

.a1 {
  animation-delay: 20ms;
}

/* .ad{
  background-color:#2d5;
  width: 100%;
  height: 100px;
} */

@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }

  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@keyframes left {
  0% {
    opacity: 0;
    width: 0;
  }

  100% {
    opacity: 1;
    padding: 20px 40px;
    width: 440px;
  }
}

.secondright h2 {
  font-weight: 600;
    font-size: x-large;
    color: #bbbbbb;
}

#border {
  width: 200px;
    height: 100px;
    margin-top: 5px;
}

#border p {
      font-size: 18px;
    width: 150px;
    font-weight: 900;
}

#border p:hover {
  color: rgb(207, 207, 207);
}
.music-player {
  --primary-color: #ddd;
  --secondary-color: white;
  --green-color: #2d5;
  --padding: 1em;
  background-color: rgb(36, 36, 36);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 7rem;
  padding: var(--padding);
  color: var(--primary-color);
  margin-top: 65px;
  position: sticky;
  bottom: 0px;

}

i {
  color: var(--secondary-color);
}

i:hover {
  color: var(--primary-color);
}

.song-bar {
  position: absolute;
  left: var(--padding);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  width: 25%;
}

.song-infos {
  display: flex;
  align-items: center;
  gap: 1em;
}

.image-container {
  --size: 4.5em;
  flex-shrink: 0;
  width: var(--size);
  height: var(--size);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.song-description p {
  margin: 0.2em;
}

.title1,
.artist {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

.title1:hover,
.artist:hover {
  text-decoration: underline;
}

.artist {
  color: var(--secondary-color);
}

.icons {
  display: flex;
  gap: 1em;
}

.progress-controller {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  color: var(--secondary-color);
}

.control-buttons {
  display: flex;
  align-items: center;
  gap: 2em;
}

.play-pause {
  display: inline-block;
  padding: 1em;
  background-color: var(--primary-color);
  color: #111;
  border-radius: 50%;
}


.play-pause:hover {
  transform: scale(1.1);
  color: #111;
}

.progress-container {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.progress-bar,.volume-bar-1{
  height: 4px;
  border-radius: 10px;
  width: 30%;
  background-color: #ccc4;
}

.progress {
  position: relative;
  height: 100%;
  width: 0%;
  border-radius: 10px;
  background-color: var(--secondary-color);
}

.progress-bar:hover .progress,.volume-bar-1:hover .volumeProgress{
  background-color: var(--green-color);
}

.progress-bar:hover .progress::after {
  content:"";
  position: absolute;
  --size: 1em;
  width: var(--size);
  height: var(--size);
  right: 0;
  border-radius: 50%;
  background-color: var(--primary-color);
  transform: translate(50%, calc(2px - 50%));
}

.volume-bar-1:hover .volumeProgress::after {
  content:"";
  position: absolute;
  --size: 1em;
  width: var(--size);
  height: var(--size);
  right: 0;
  border-radius: 50%;
  background-color: var(--primary-color);
  transform: translate(50%, calc(2px - 50%));
}

.other-features {
  position: absolute;
  right: var(--padding);
  display: flex;
  flex-direction: row;
  gap: 1em;
}

.volume-bar {
  display: flex;
  align-items: center;
  gap: .7em;
}

.volumeProgress{
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: var(--secondary-color)
}

.volume-bar .volume-bar-1 {
  width: 6em;

}

.volume-bar .volume-bar-1:hover .volumeProgress::after {
  --size: .8em;
  background-color: var(--green-color)
}

.welcome-message {
  font-size: 20px;
  font-weight: bold;
  color: green;
}
</style>
<div class="secondright hidden animation a1">
            <h2>Lyrics</h2>
            <div id="border">
                <p>Young blood thinks there's always tomorrow
                    
                    I miss your touch on nights when I'm hollow
                    
                    I know you crossed a bridge that I can't follow
                    
                    Since the love that you left is all that I get, I want you to know that
                    If I can't be close to you, I'll settle for the ghost of you
                    I miss you more than life (more than life)
                    And if you can't be next to me, your memory is ecstasy
                    I miss you more than life, I miss you more than life
                </p>
            </div>
        </div>

        <div class="music-player">
            <div class="song-bar">
                <div class="song-infos">
                    <div class="image-container">
                        <img loading="lazy" src="${requestScope.track.getImageUrl()}" alt="" id="cover">
                    </div>
                    <div class="song-description">
                        <p class="title1">
                            ${requestScope.track.getTrackName()}
                        </p>
                        <p class="artist">${requestScope.user}</p>
                    </div>
                </div>
                <div class="icons">
                    <i class="far fa-heart fa-1x" id="like"></i>
                    <i class="fas fa-compress"></i>
                </div>
            </div>
            <audio src="https://docs.google.com/uc?export=open&id=${requestScope.track.getAudioUrl()}" id="audio"></audio>
            <div class="progress-controller">
                <div class="control-buttons">
                    <i id="hide" class="fas fa-random"></i>
                    <i class="pev fas fa-step-backward"></i>
                    <i class="play-pause fas fa-play"></i>
                    <i class="next fas fa-step-forward"></i>
                    <i id="hide" class="fas fa-undo-alt"></i>
                </div>
                <div class="progress-container">
                    <span class="start">0:00</span>
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                    <span class="end">0:00</span>
                </div>
            </div>
            <div class="other-features">
                <i class="fas fa-list-ul" id="showLyrics"></i>
                <i class="fas fa-desktop"></i>
                <div class="volume-bar">
                    <i class="fas fa-volume-up" id="voume"></i>
                    <div class="volume-bar-1">
                        <div class="volumeProgress"></div>
                    </div>
                </div>
            </div>
        </div>
        
     <script src="/dobooweb/musicPlayer.js"></script>
</body>
</html>