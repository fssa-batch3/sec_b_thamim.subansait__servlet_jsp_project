 const rootUrl = window.location.origin + "/dobooweb";


// for to filter track for each seller
const userRole2 = localStorage.getItem("userRoleC");
if(userRole2 == "seller"){
	
async function fetchTracks() {
  try {
    const response = await fetch(rootUrl+'/user/dashboard'); // endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 200) {
      const filteredData = data.data;
      const recent3 = document.querySelector('.recent3');

      filteredData.forEach((trackData) => {
        const track = document.createElement('div');
        track.setAttribute('class', 'spread1');

        const imageContainer = document.createElement('div');
        imageContainer.setAttribute('class', 'card');
        track.append(imageContainer);

        const TrackImage = document.createElement('img');
        TrackImage.setAttribute('loading', 'lazy');
        TrackImage.setAttribute('class', 'trackPoster');
        TrackImage.setAttribute('src', trackData.imageUrl);
        TrackImage.setAttribute('alt', 'trackPoster');
        imageContainer.append(TrackImage);

        const textContainer = document.createElement('div');
        textContainer.setAttribute('class', 'text1');
        track.append(textContainer);

        const trackName = document.createElement('h3');
        trackName.innerText = trackData.TrackName;
        textContainer.append(trackName);
	
        const edit = document.createElement('button');
        edit.setAttribute('type', 'button');
        edit.setAttribute('class', 'btn_edit');
        track.append(edit); 
        
        let trackId = (trackData.id * 25678); // this is for to convert the track id into bit more complex so user can't edit
        
        const linkToEdit = document.createElement("a");
        linkToEdit.href="../pages/seller profile and upload a track/upload a track .html?edit="+trackId;
		linkToEdit.innerText = ['Edit'];
		  linkToEdit.setAttribute("style","text-decoration: none;color: black;")  
		edit.append(linkToEdit);
		
        recent3.append(track);
      });

      console.log('Tracks fetched and displayed successfully.');
    } else {
      console.error('Failed to fetch tracks:', data.message);
    }
  } catch (error) {
    console.error('An error occurred while fetching tracks:', error);
  }
}
fetchTracks();


// this edit function in the your track section in seller side


const editButton = document.querySelectorAll("button.btn_edit");

editButton.forEach((findId) => {
  findId.addEventListener("click", function () {
    const dataId = (this.dataset.id)*25678;
    window.location.href = "../pages/seller profile and upload a track/upload a track .html?edit="+dataId;
    console.log(dataId);
  });
})


}


// end of edit function
