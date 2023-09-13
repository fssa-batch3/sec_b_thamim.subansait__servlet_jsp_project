<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Upload Track</title>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
	<style>
/* External CSS styles */
body {
	font-family: Arial, sans-serif;
	background-color: #f5f5f5;
	margin: 0;
	padding: 0;
}

.container {
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
	text-align: center;
	margin-bottom: 20px;
}

.form-group {
	margin-bottom: 20px;
}

label {
	font-weight: bold;
	display: block;
	margin-bottom: 5px;
}

input[type="text"], textarea, input[type="number"], input[type="file"] {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

textarea {
	height: 150px;
}

button[type="button"], button[type="submit"] {
	background-color: #007bff;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	display: block;
	margin: 0 auto;
}

button[type="button"]:hover, button[type="submit"]:hover {
	background-color: #0056b3;
}

.upload-button {
	background-color: #28a745;
}

.upload-button:hover {
	background-color: #1f903e;
}
/* Small text styles for instructions */
small {
	display: block;
	margin-top: 10px;
	font-size: 14px;
	color: #777;
	line-height: 1.2;
}
</style>
	<header>
		<jsp:include page="header.jsp"></jsp:include>
	</header>
	<div class="container">
		<h1>
			Upload Your Track <i class="fas fa-music"></i>
		</h1>
		<form action="upload" method="post" id="uploadForm">
			<div class="form-group">
				<label for="trackName">Track Name <i
					class="fas fa-file-audio"></i></label> <input type="text" id="trackName"
					name="trackName" required autofocus="autofocus">
			</div>

			<div class="form-group">
				<label for="trackDetail">Track Detail <i
					class="fas fa-info-circle"></i></label>
				<textarea id="trackDetail" name="trackDetail"></textarea>
			</div>

			<div class="form-group">
				<label for="trackBpm">Track BPM <i class="fas fa-music"></i></label>
				<input type="number" id="trackBpm" name="trackBpm" >
			</div>

			<div class="form-group">
				<label for="trackGenre">Track Genre <i class="fas fa-music"></i></label>
				<select id="trackGenre" class="input" name="trackGenre" >
					<option>HIP HOP</option>
					<option>TRAP</option>
					<option>LO-FI</option>
					<option>RAP</option>
					<option>Rnb</option>
					<option>Electronic</option>
					<option>Pop</option>
					<option>Reggae</option>
					<option>Drill</option>
					<option>Afro beat</option>
					<option>Club</option>
					<option>House</option>
					<option>Hyperpop</option>
					<option>Boom Bap</option>
					<option>Country</option>
					<option>Drum and bass</option>
					<option>Classical</option>
					<option>Folk</option>
					<option>Blue</option>
				</select>
			</div>

			<div class="form-group">
				<label for="trackDaw">DAW (Digital Audio Workstation) <i
					class="fas fa-laptop"></i></label> <input type="text" id="trackDaw"
					name="trackDaw" >
			</div>

			<div class="form-group">
				<label for="trackScale">Track Scale <i class="fas fa-music"></i></label>
				<select id="trackScale" class="input" name="trackScale" >
					<option>C major</option>
					<option>C minor</option>
					<option>C# major</option>
					<option>C# minor</option>
					<option>D major</option>
					<option>D minor</option>
					<option>D# major</option>
					<option>D# minor</option>
					<option>E major</option>
					<option>E minor</option>
					<option>F major</option>
					<option>F minor</option>
					<option>F# major</option>
					<option>F# minor</option>
					<option>G major</option>
					<option>G minor</option>
					<option>G# major</option>
					<option>G# minor</option>
					<option>A major</option>
					<option>A minor</option>
					<option>A# major</option>
					<option>A# minor</option>
					<option>B major</option>
					<option>B minor</option>
				</select>

			</div>

			<div class="form-group">
				<label for="trackBpm">price</label> <input type="number"
					id="trackBpm" name="trackPrice" required> <small><strong>price
						are only in dollars</strong></small>
			</div>
			<div class="form-group">
				<label for="audioFile">Select image File:</label> <input type="file"
					name="imageFile" id="imageFile"><br> <br> <small><strong>Do
						not upload image that exceeds limit of 5 Mb.</strong></small> <small><strong>Please
						wait don't click upload Image again.</strong></small>
						<small><strong>Supported format are jpg,jpeg,png only</strong></small>
			</div>
			<input type="hidden" id="imageUrl" name="imageUrl" required>
			<div class="form-group" style="position: relative; top: 30px;">

				<label for="trackName">Audio Link<i
					class="fas fa-file-audio"></i></label> <input type="text" id="trackName"
					name="audioUrl" required> <small><strong>First,
						Upload your track in Google Drive and locate your file and click
						on the three dots to bring up a dropdown. Then choose Share.</strong></small> <small><strong>Next,
						under General access, set to "Anyone with the link" and "Viewer."
						And click Copy Link to get the link.</strong></small> <small><strong>you
						will see something like this
						"https://drive.google.com/file/d/13s1pwgpWZAbpwYgaFa_MgdxiKGOILCtX/view?usp=sharing".
						In that please copy only the value after /d for example should
						copy the value this "13s1pwgpWZAbpwYgaFa_MgdxiKGOILCtX" only.
						Please paste that above</strong></small>

			</div>


			<button type="button" class="btn" id="uploadImageButton"
				style="position: relative; bottom: 200px;">Upload Image</button>
			<button type="submit" id="submitButton" disabled>
				Upload <i class="fas fa-upload"></i>
			</button>
		</form>
	</div>

	<script>
	const uploadImageButton = document.getElementById("uploadImageButton");
        const submitButton = document.getElementById("submitButton");
        const imageFileInput = document.getElementById("imageFile");
        const imageUrlInput = document.getElementById("imageUrl");

        uploadImageButton.addEventListener("click", () => {
            const imageUrl = imageUrlInput.value;
            if (imageUrl) {
                uploadImage(imageUrl);
            } else {
                alert("Please enter an image URL.");
            }
        });

        function uploadImage(imageUrl) {
            const apiUrl = `https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5&source=${encodeURIComponent(imageUrl)}&format=json`;

            fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Handle the API response here
                console.log('API Response:', data);
            })
            .catch((error) => {
                // Handle any errors here
                console.error('API Error:', error);
            });
        }
    </script>
</body>
</html>


