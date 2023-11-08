	const trackId = new URLSearchParams(window.location.search).get("tracks");
    const rootUrl = window.location.origin + "/dobooweb";
    const realId = trackId/25678;
     
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
	document.querySelector("div.productlist").classList.remove("shimmer");
    for (let i = 0; i < length; i++) {
      track = document.createElement("div");
      track.setAttribute("class", "tracks");
	  
	  let tracdId = (loadData[i]["id"] * 25678);
      trackContainer = document.createElement("a");
      trackContainer.setAttribute("href", "../../pages/track listening page/track listening page.html?tracks=" +tracdId);
      trackContainer.setAttribute("style", "text-decoration:none;");
      track.append(trackContainer);

      product_image = document.createElement("img");
      product_image.setAttribute("src", loadData[i]["imageUrl"]);
      trackContainer.append(product_image);

      track_name = document.createElement("p");
      track_name.innerText = loadData[i]["TrackName"];
      track_name.setAttribute("style","display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;overflow: hidden;")
      trackContainer.append(track_name);

      artistname = document.createElement("p");
      artistname.innerText = loadData[i]["artistName"];
      artistname.setAttribute("style","display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;overflow: hidden;")
      track.append(artistname);

      document.querySelector("div.productlist").append(track);
    }
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

async function fetchData() {
  const trackIds = '32qnBgfzURbwNayQIEB5W5%2C5gBa7yfdEUKrpJbhAygKRs%2C567e29TDzLwZwfDuEpGTwo%2C42VsgItocQwOQC3XWZ8JNA%2C0ClPIeT6MSgfSgQ9ZrJbAq%2C1cPDOeVdALLjj4erFPiuqW%2C0aFAGKktg3GEbdg0f0Ix7d%2C2TZ9kaTiLewawHZK7yylSC%2C3FAJ6O0NOHQV8Mc5Ri6ENp%2C2LBqCSwhJGcFQeTHMVGwy3';
  const accessToken = localStorage.getItem("userToken");

  try {
    const response = await fetch(`https://api.spotify.com/v1/tracks?ids=${trackIds}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    
     const parentContainer = document.getElementById("stream");
     
    const trendingContainer = document.getElementById("trending");
    
    const latestContainer = document.getElementById("latest");

     parentContainer.classList.remove("shimmer");
    // Loop through the first 5 tracks in the response
    for (let i = 0; i < 5 && i < data.tracks.length; i++) {
      const track = data.tracks[i];
      const trackCard = createTrackCard(track);
      parentContainer.appendChild(trackCard);
    }
    

    // Loop through the first two tracks in the response for Trending Tracks
    for (let i = 5; i < 7; i++) {
      const track = data.tracks[i];
      const card = createSideTrackCard(track);
      trendingContainer.appendChild(card);
    }
  //const trendingMore = createMoreIcon("trending");
    //trendingContainer.append(trendingMore)
	    

    // Loop through the next two tracks in the response for Latest Tracks
    for (let i = 7; i < 9; i++) {
      const track = data.tracks[i];
      const card = createSideTrackCard(track);
      latestContainer.appendChild(card);
    }

    // Loop through the tracks and create a card for each one
    //const latestMore = createMoreIcon("latest tracks page");
    //latestContainer.append(latestMore);
    
    
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
}

function createTrackCard(track) {
  const trackCard = document.createElement("div");
  trackCard.classList.add("tracks");

  const trackLink = document.createElement("a");
  trackLink.href = `../../pages/track listening page/track listening page.html?stream=${track.id}`;
  trackLink.style.textDecoration = "none";

  const trackImage = document.createElement("img");
  trackImage.src = track.album.images[1].url; // Use the appropriate image URL from the Spotify API

  const trackTitle = document.createElement("p");
  trackTitle.textContent = track.name;

  const artistName = document.createElement("p");
  artistName.textContent = track.artists[0].name;

  trackLink.appendChild(trackImage);
  trackLink.appendChild(trackTitle);
  trackCard.appendChild(trackLink);
  trackCard.appendChild(artistName);

  return trackCard;
}

function createSideTrackCard(track) {
  // Create the main card container div
		const cardContainer = document.createElement("div");
		cardContainer.classList.add("card1");
		
		// Create the inner div for the image
		const imageDiv = document.createElement("div");
		
		// Create the image element
		const imageElement = document.createElement("img");
		imageElement.src = track.album.images[2].url;
		imageElement.alt = "track poster";
		
		// Create the anchor element for the image link
		const imageLink = document.createElement("a");
		imageLink.href = `../../pages/track listening page/track listening page.html?stream=${track.id}`;
		imageLink.appendChild(imageElement);
		
		// Append the anchor element to the image div
		imageDiv.appendChild(imageLink);
		
		// Create the inner div for text
		const textDiv = document.createElement("div");
		textDiv.classList.add("text");
		
		// Create the anchor element for the track name
		const trackNameLink = document.createElement("a");
		trackNameLink.href = `../../pages/track listening page/track listening page.html?stream=${track.id}`;
		trackNameLink.style.textDecoration = "none";
		trackNameLink.style.color = "white";
		
		// Create the heading element for the track name
		const trackNameHeading = document.createElement("h3");
		trackNameHeading.textContent = track.name;
		trackNameHeading.style.color = "#F4E2DE";
		
		// Create the paragraph element for BPM
		const bpmParagraph = document.createElement("p");
		bpmParagraph.textContent = "90 Bpm F#";
		
		// Append the heading and paragraph to the anchor element for track name
		trackNameLink.appendChild(trackNameHeading);
		trackNameLink.appendChild(bpmParagraph);
		
		// Append the anchor element for track name to the text div
		textDiv.appendChild(trackNameLink);
		
		// Append the image div and text div to the main card container
		cardContainer.appendChild(imageDiv);
		cardContainer.appendChild(textDiv);
		
		// Append the card container to a parent container (replace "parentContainer" with the appropriate parent element)
		// parentContainer.appendChild(cardContainer);


  return cardContainer;
}

function createMoreIcon(link){
	  
    const anchorElement = document.createElement("a");
	anchorElement.href = `../trending page/${link}.html`;

	const iElement = document.createElement("i");
	iElement.classList.add("fa-sharp", "fa-solid", "fa-ellipsis");
	iElement.style.color = "white";
	iElement.style.fontSize = "30px";
	iElement.style.position = "relative";
	iElement.style.left = "144px";
	
	// Append the <i> element to the anchor element
	anchorElement.appendChild(iElement);
}



fetchData();








