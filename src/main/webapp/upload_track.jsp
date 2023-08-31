<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <title>File Upload</title>
</head>
<body>
    <h2>Upload Audio and Image Files</h2>
    <form action="FileUploadServlet" method="post" enctype="multipart/form-data">
        <label for="audioFile">Select Audio File:</label>
        <input type="file" name="audioFile" id="audioFile"><br><br>
        
        <label for="imageFile">Select Image File:</label>
        <input type="file" name="imageFile" id="imageFile"><br><br>
        
        <input type="submit" value="Upload">
    </form>
</body>
</html>
    