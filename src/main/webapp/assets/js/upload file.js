
    /*const userEmail=JSON.parse(localStorage.getItem("userEmail"));
    let user_list=JSON.parse(localStorage.getItem("user_list"));
    function findArtist(e){
        return e.user_email==userEmail;

    }

    let artist_data = user_list.find(findArtist);

    console.log(userEmail)
    */

    //document.getElementById("list1").removeAttribute("style","display:none")
    //document.getElementById("list1").setAttribute("style","background-color:rgb(236, 48, 48)")



        const ListButton = document.getElementById("list");
        const imageFileInput = document.getElementById("fileInputField");
        const imageUrlInput = document.getElementById("imageUrl");
        
        // this function is for to upload the image using rapid api 
 
        function uploadImage(imageFile) {
			 const uploadButton = document.getElementById('fileInputField');
   				 uploadButton.disabled = true;
            const url = 'https://image-cdn.p.rapidapi.com/upload?async=true&allow-webp=true&compression=auto';
            const data = new FormData();
            data.append('image', imageFile);
            const options = {
                method: 'POST',
                headers: {
                    'X-RapidAPI-Key': 'c97a457a0dmshdac209436f99abdp146235jsnb0f5a1d098b1',
                    'X-RapidAPI-Host': 'image-cdn.p.rapidapi.com'
                },
                body: data
            };
            fetch(url, options)
                .then(response => response.text())
                .then(result => {
                	const data = JSON.parse(result);
                    const url_value = data['url'];
                    imageUrlInput.value = url_value;
                    console.log(imageUrlInput);
                    console.log(url_value);
                    console.log(data);
                    uploadButton.disabled = false;
                    ListButton.disabled = false;
                    alert("image successfully uploaded");
                    })
                        
				.catch((error) => {
                // Handle any errors here
                console.error('API Error:', error);        
                 alert(error);
            });
            
            }
            
        
        // end of upload image function.
        const rootUrl = window.location.origin + "/dobooweb";

		async function upload() {
		  let name = document.getElementById("trackname").value;
		  let bpm = document.getElementById("bpm").value;
		  let key = document.getElementById("key").value;
		  let genre = document.querySelector("#genre").value;
		  let daw = document.getElementById("daw").value;
		  let image = imageUrlInput.value;
		  let detail = document.getElementById("text1").value;
		  let price = document.getElementById("Price").value;
		  let audio = document.querySelector(".audioSource").value;
		
		  const formData = new FormData();
		  formData.append("trackName", name);
		  formData.append("trackBpm", bpm);
		  formData.append("trackScale", key);
		  formData.append("trackGenre", genre);
		  formData.append("trackDaw", daw);
		  formData.append("imageUrl", image);
		  formData.append("trackDetail", detail);
		  formData.append("trackPrice", price);
		  formData.append("audioUrl", audio);

  	try {
    const response = await fetch(rootUrl+"/user/upload", {
      method: "POST",
       headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set the content type
         },
      body:new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      if (result.status === 200) {
      // Success, redirect to the buyer homepage
      location.href = "../homepage/buyer homepage.html";
      alert("track successfully uploaded");
      } else {
       // Handle error if needed
       
        console.error("Failed to upload track:", result.message);
        alert(result.message);           
       }

    } else {
      // Handle error response here
      const result = await response.text();
      console.error("Upload failed"+result);
      alert(result);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

document.getElementById("list").addEventListener("click", upload); // to call the function when user clicks list button




//       const fileInput = document.getElementById('fileInputField');

// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0];
  
//   const objectURL = URL.createObjectURL(file);
//   localStorage.setItem('image', objectURL);
// });

    //   Profile image Upload API

    

// // Assuming you have a file input field with the id "file-upload"

// import axios from "axios";

// const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dxxo3kzz2/image/upload';
// const CLOUDINARY_UPLOAD_PRESET  = 'thamimtommy';

// const uploadImage = (file) => {
//   const formData = new FormData();
//   formData.append('file', file);
//   formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

//   return axios.post(CLOUDINARY_URL, formData, {
//     headers: {'Content-Type': 'multipart/form-data'}
//   })
//   .then(response => {
//     console.log('Image uploaded:', response.data.secure_url);
//     return response.data.secure_url;
//   })
//   .catch(error => {
//     console.error('Error during image upload:', error);
//     return null;
//   });
// }

// function handleImageUpload(event) {
//     const file = event.target.files[0];
//     if (file) {
//       uploadImage(file)
//         .then(uploadedImageUrl => {
//           // Do something with the uploaded image URL
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
//   }

// // get the audio file input element
// const audioFileInput = document.querySelector('.audioSource');

// // add an event listener to the input element
// audioFileInput.addEventListener('change', function(e) {
//   // get the file object
//   const file = e.target.files[0];
  
//   // create a new FileReader object
//   const reader = new FileReader();

//   // add an event listener to the FileReader object
//   reader.addEventListener('load', function() {
//     // create a new AudioContext
//     const audioContext = new AudioContext();

//     // decode the audio data
//     audioContext.decodeAudioData(reader.result, function(decodedData) {
//       // create an OfflineAudioContext with the same sample rate as the decoded data
//       const offlineContext = new OfflineAudioContext(decodedData.numberOfChannels, decodedData.length, decodedData.sampleRate);

//       // create a buffer source node and connect it to the offline context
//       const source = offlineContext.createBufferSource();
//       source.buffer = decodedData;
//       source.connect(offlineContext.destination);

//       // start the buffer source node and render the audio to the offline context
//       source.start();
//       offlineContext.startRendering().then(function(renderedBuffer) {
//         // create a new Blob with the rendered audio data
//         const blob = new Blob([renderedBuffer.getChannelData(0)], { type: 'audio/wav' });

//         // create a new FileReader object
//         const blobReader = new FileReader();

//         // add an event listener to the blob FileReader object
//         blobReader.addEventListener('load', function() {
//           // get the compressed audio data URL
//           const compressedDataUrl = blobReader.result;

//           // save the compressed audio data URL in local storage
//           localStorage.setItem('compressedDataUrl', compressedDataUrl);
//         });

//         // read the blob as a data URL
//         blobReader.readAsDataURL(blob);
//       });
//     });
//   });

//   // read the file as an array buffer
//   reader.readAsArrayBuffer(file);
// });


      
     const trackId = new URLSearchParams(window.location.search).get("edit");
     const realId = trackId/25678;
     // start of getting track detail for update function
     
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
          const NewTrack = data.track;
          console.log(NewTrack);
			document.getElementById('list').style.display = "none";
			
          // Populate HTML elements with track details
         
          document.getElementById("trackname").value = NewTrack.TrackName;
          document.getElementById("bpm").value = NewTrack.bpm;
          document.getElementById("key").value = NewTrack.scale;
          document.querySelector("#genre").value = NewTrack.genre;
          document.getElementById("text1").value = NewTrack.TrackDetail;
          document.getElementById("Price").value = NewTrack.price;
          document.getElementById("daw").value = NewTrack.daw;
          document.getElementById("imageUrl").value = NewTrack.imageUrl;
          document.querySelector(".audioSource").value = NewTrack.audioUrl;
          document.getElementById('list2').style.display = "inline";
          document.getElementById("list1").removeAttribute("style","display:none");
          document.getElementById("list1").setAttribute("style","background-color:rgb(236, 48, 48)");
        
          
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
// end of get track for update function



// update function for the user to update their track details 
  
if (trackId) {
  async function update(e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Getting the updated data from the input fields
    const updatename = document.getElementById("trackname").value;
    const updatebpm = document.getElementById("bpm").value;
    const updatekey = document.getElementById("key").value;
    const updategenre = document.querySelector("#genre").value;
    const updatedetail = document.getElementById("text1").value;
    const updateprice = document.getElementById("Price").value;
    const updatedaw = document.getElementById("daw").value;
    const updateImage =  document.getElementById("imageUrl").value;
    const updateAudio = document.querySelector(".audioSource").value;
    

    // Create an object with the updated data
    const formdata = new FormData();
     formdata.append('trackName', updatename);
     formdata.append('trackBpm',updatebpm);
     formdata.append('trackScale',updatekey);
     formdata.append('trackGenre',updategenre);
     formdata.append('trackDetail',updatedetail);
     formdata.append('trackPrice',updateprice);
     formdata.append('trackDaw',updatedaw);
     formdata.append('trackImage',updateImage);
     formdata.append('trackAudio',updateAudio);
     formdata.append('trackid',realId);

    // Send the updated data to the server using fetch
    try {
      const response = await fetch(rootUrl+'/user/track', {
        method: 'POST',
         headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    // Convert the FormData to a query string
    body: new URLSearchParams(formdata).toString(),
      });

      if (response.ok) {
        // Handle success (e.g., redirect to a new page)
        
        alert("successfully updated the track details");
        location.href = "../profile.html";
      } else {
            const errorResponse = await response.text();
            alert("Update failed: "+errorResponse);
            location.reload();
        }
    } catch (error) {
      console.error('An error occurred:', error);
      alert(error.message);
      location.reload();
    }
  }
  document.getElementById("list2").addEventListener("click", update);
}

// end of update function
        
        
        
// start of delete track function

   let del_product = document.querySelector("#list1");
        
       async function delData() {
            if(trackId){
            if (confirm("Are you sure?")) {
             
                try {
                let response = await fetch(rootUrl+`/track/delete?trackid=${realId}`);

                if (response.ok) {
					alert("successfully delete the track");
                    location.href = "../profile.html";
                } else {
						const errorResponse = await response.text();
			            alert("Update failed: "+errorResponse);
			            location.reload(); 
                }
            } catch (error) {
                console.error('Error:', error);
                 alert(error);
            }
        }
                
            }
        };
        
      
        del_product.addEventListener("click", delData);
      
