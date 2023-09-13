const trackproduct = [
  {
    Image: {
      source: "../../assets/img/cover4.png",
    },
    trackname: "beat001",
    artistname: "justin",
  },
  {
    Image: {
      source: "../../assets/img/cover1.png",
    },
    trackname: "beat002",
    artistname: "thamim",
  },
  {
    Image: {
      source: "../../assets/img/cover2.png",
    },
    trackname: "hard 001",
    artistname: "tommy",
  },
  {
    Image: {
      source: "../../assets/img/cover3.png",
    },
    trackname: "fresh beat",
    artistname: "vignesh",
  },
  {
    Image: {
      source: "../../assets/img/cover5.png",
    },
    trackname: "beatsworld",
    artistname: "ajun",
  },
  {
    Image: {
      source: "../../assets/img/cover6.png",
    },
    trackname: "soultype",
    artistname: "j cole",
  },
  {
    Image: {
      source: "../../assets/img/cover7.png",
    },
    trackname: "Blue eyes",
    artistname: "ji ji",
  },
  {
    Image: {
      source: "../../assets/img/cover10.png",
    },
    trackname: "post type",
    artistname: "modi ji",
  },
  {
    Image: {
      source: "../../assets/img/cover5.png",
    },
    trackname: "sixnine",
    artistname: "anil",
  },
  {
    Image: {
      source: "../../assets/img/cover7.png",
    },
    trackname: "good",
    artistname: "turtle",
  },
  {
    Image: {
      source: "../../assets/img/cover4.png",
    },
    trackname: "ariana",
    artistname: "beyonce",
  },
  {
    Image: {
      source: "../../assets/img/cover1.png",
    },
    trackname: "T-gan",
    artistname: "painkiller",
  },
];

let track;
let imageContainer;
let TrackImage;
let textContainer;
let trackName;
let edit;

const loadData = JSON.parse(localStorage.getItem("trackName"));

// for to filter track for each seller

const Email = JSON.parse(localStorage.getItem("userEmail"));
const filteredData = loadData.filter((item) => item.UserEmail === Email);



for (let i = 0; i < filteredData.length; i++) {
  track = document.createElement("div");
  track.setAttribute("class", "spread1");

  imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "card");
  track.append(imageContainer);

  TrackImage = document.createElement("img");
  TrackImage.setAttribute("loading", "lazy");
  TrackImage.setAttribute("class", "trackPoster");
  TrackImage.setAttribute("src", trackproduct[i].Image.source);
  TrackImage.setAttribute("alt", "trackPoster");
  imageContainer.append(TrackImage);

  textContainer = document.createElement("div");
  textContainer.setAttribute("class", "text1");
  track.append(textContainer);

  trackName = document.createElement("h3");
  trackName.innerText = filteredData[i].trackname;
  textContainer.append(trackName);

  edit = document.createElement("button");
  edit.setAttribute("type", "button");
  edit.setAttribute("class", "btn_edit");
  edit.setAttribute("data-id", filteredData[i].songId);
  edit.setAttribute(
    "style",
    "background-color: rgb(159, 0, 0); width: 20%; border-radius: 5px; font-family:'Poppins', sans-serif; font-weight: bold; font-size:18px; color:black;"
  );
  edit.innerText = ["edit"];
  track.append(edit);

  document.querySelector(".recent3").append(track);
  console.log(track);
}

// function findTrack(){
//     document.querySelector(".btn1").addEventListener("click",()=>{

//     })
// }

const editButton = document.querySelectorAll("button.btn_edit");

editButton.forEach((findId) => {
  findId.addEventListener("click", function () {
    const dataId = this.dataset.id;
    localStorage.setItem("songId", JSON.stringify(dataId));
    window.location.href =
      "../pages/seller profile and upload a track/upload a track .html";
    console.log(dataId);
  });
});
