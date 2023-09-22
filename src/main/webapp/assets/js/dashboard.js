const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

const root = window.location.origin + "/dobooweb";
async function fetchArtistData() {
  try {
    const response = await fetch(root+"/artist/update");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Populate the form fields with the retrieved data
    document.getElementById("artistName").value = data.data.artistName;
    document.getElementById("typeofartist").value = data.data.type;
    document.getElementById("bio").value = data.data.bio;
    document.getElementById("instaLink").value = data.data.insta;
    document.getElementById("faceBook").value = data.data.facebook;
    document.getElementById("Linkedin").value = data.data.linkedln;
    document.getElementById("spotify").value = data.data.spotify;

    // You can add more fields as needed
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error as needed
  }
}
fetchArtistData();

          // Get the textarea element
                let textarea = document.getElementById('bio');

                // Add a validation function to check for spaces and numbers
                textarea.addEventListener('input', function() {
                // Get the value of the textarea
                var text = this.value;

                // Check if the string contains only spaces or numbers
                if (/^\s+$/.test(text) || /^[0-9]+$/.test(text)) {
                    // If the string contains only spaces or numbers, show an error message
                    this.setCustomValidity('Please enter text that is not just spaces or numbers.');
                } else {
                    // If the string is valid, clear the error message
                    this.setCustomValidity('');
                }
                });

                async function sellerDetails() {
					
                    const artistName = document.getElementById("artistName").value;
                    const bio = document.getElementById("bio").value;
                    const typeOfArtist = document.getElementById("typeofartist").value;
                    const instaLink = document.getElementById("instaLink").value;
                    const faceBook = document.getElementById("faceBook").value;
                    const linkedin = document.getElementById("Linkedin").value;
                    const spotify = document.getElementById("spotify").value;

                    const  formData = new FormData();
                    formData.append("artistName", artistName);
                    formData.append("bio", bio);
                    formData.append("type", typeOfArtist);
                    formData.append("facebook", faceBook);
                    formData.append("instagram", instaLink);
                    formData.append("linkedln", linkedin);
                    formData.append("spotify", spotify);

                    try {
                        const response = await fetch(root+'/artist/update', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded", // Set the content type
                              },
                              body: new URLSearchParams(formData).toString(),
                        });

                        if (response.ok) {
                            const result = await response.json();
                            console.log(result);
                            if (result.status === 200) {
                                // Success, redirect to the buyer homepage
                                alert("updated successfull");
                            } else {
								
                                // Handle error if needed
                                
                                console.error("Failed to become an artist:", result.message);
                                 
                            }
                        } else {
                            // Handle HTTP error
                             const errorResponse = await response.text();
                            console.error("HTTP Error:", response.statusText);
                            alert(errorResponse);
                            location.reload();
                        }
                    } catch (error) {
                        // Handle network or other errors
                        console.error("Error:", error);
                        Notify.error(error.message);
                    }
                }
                
                document.querySelector("#submitForm").addEventListener("submit",()=>{
					alert("sure want to update")
					sellerDetails
					});
					
					// to get that seller tracks id 
					let SellersTrackIds = [];
					  async function fetchTracks() {
						  try {
						    const response = await fetch(root+'/user/dashboard'); // endpoint
						    if (!response.ok) {
						      throw new Error(`HTTP error! Status: ${response.status}`);
						    }
					
						    const data = await response.json();
					
						    if (data.status === 200) {
								const Loadata =data.data;
						      SellersTrackIds.push(...Loadata);
						      analytics(SellersTrackIds);
						      console.log('seller track to check in add to cart option.');
						    } else {
						      console.error('Failed to fetch tracks:', data.message);
						    }
						  } catch (error) {
						    console.error('An error occurred while fetching tracks:', error);
						  }
						}
						fetchTracks();
					console.log(SellersTrackIds)
					// to place the count of like and saved track and streams 
					
					function analytics(sellerTrack){
						// Initialize variables to store counts for each array
						let likedCount = 0;
						let savedCount = 0;
						let recentlyPlayedCount = 0;
						
						// Retrieve the arrays from localStorage
						const liked = JSON.parse(localStorage.getItem("Liked"));
						
						const saved = JSON.parse(localStorage.getItem("saved"));
						
						const recentlyPlayed = JSON.parse(localStorage.getItem("recentlyPlayed"));
						console.log(recentlyPlayed);
						console.log(saved);
						console.log(liked);
						
						function countLikesForTrackId(trackId) {
						  let count = 0;
						  for (const item of liked) {
						    if (item.trackid === trackId) {
						      count++;
						    }
						  }
						  return count;
						}
						
						function countRecentlyPlayedForTrackId(trackid) {
						  let count = 0;
						  for (const item of recentlyPlayed) {
							  const realId = item.trackId / 25678;
						    if (realId === trackid) {
						      count++;
						    }
						  }
						  return count;
						}
						
						function countSavedForTrackId(trackId) {
						  let count = 0;
						  for (const item of saved) {
						    if (item.trackid === trackId) {
						      count++;
						    }
						  }
						  return count;
						}
						
						for (const track of sellerTrack) {
						  likedCount += countLikesForTrackId(track.id);
						  recentlyPlayedCount += countRecentlyPlayedForTrackId(track.id);
						  savedCount += countSavedForTrackId(track.id)
						}
						
						console.log(`Total likes for the user's tracks: ${likedCount}`);
						console.log(`Total recently played for the user's tracks: ${recentlyPlayedCount}`);
						console.log(`Total saved for the user's tracks: ${savedCount}`);
						// place the value to the div  
						document.querySelector("#streamCount").innerText = recentlyPlayedCount;
						document.querySelector("#likeCount").innerText = likedCount;
						document.querySelector("#saveCount").innerText = savedCount;
					};
					
					
