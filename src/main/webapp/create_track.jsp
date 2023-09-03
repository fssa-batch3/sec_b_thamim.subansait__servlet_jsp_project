<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Track</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
<style>
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

input[type="text"],
textarea,
input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

textarea {
    height: 150px;
}

button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}

</style>
    <header>
        <jsp:include page="header.jsp"></jsp:include>
    </header>
    <div class="container">
        <h1>Upload Your Track <i class="fas fa-music"></i></h1>
        <form action="upload" method="post">
            <div class="form-group">
                <label for="trackName">Track Name <i class="fas fa-file-audio"></i></label>
                <input type="text" id="trackName" name="trackName" required>
            </div>

            <div class="form-group">
                <label for="trackDetail">Track Detail <i class="fas fa-info-circle"></i></label>
                <textarea id="trackDetail" name="trackDetail" required></textarea>
            </div>

            <div class="form-group">
                <label for="trackBpm">Track BPM <i class="fas fa-music"></i></label>
                <input type="number" id="trackBpm" name="trackBpm" required>
            </div>

            <div class="form-group">
                <label for="trackGenre">Track Genre <i class="fas fa-music"></i></label>
                <input type="text" id="trackGenre" name="trackGenre" required>
            </div>

            <div class="form-group">
                <label for="trackDaw">DAW (Digital Audio Workstation) <i class="fas fa-laptop"></i></label>
                <input type="text" id="trackDaw" name="trackDaw" required>
            </div>

            <div class="form-group">
                <label for="trackScale">Track Scale <i class="fas fa-music"></i></label>
                <input type="text" id="trackScale" name="trackScale" required>
            </div>
            
             <div class="form-group">
                <label for="trackBpm">price</label>
                <input type="number" id="trackBpm" name="trackPrice" required>
            </div>

            <button type="submit">Upload <i class="fas fa-upload"></i></button>
        </form>
    </div>
</body>
</html>


    