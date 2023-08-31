<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Track Details</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .container {
    width: 500px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 250px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .details {
    padding: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .info {
    font-size: 1rem;
    color: #777;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
  }

  .back-button {
    border: none;
    background-color: #007c5a;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    font-size: 1rem;
  }

  .back-button:hover {
    background-color: #00563f;
  }
</style>
</head>
<body>
<div class="container">
  <div class="image">
    <img alt="trackPoster" src="https://picsum.photos/500/250">
  </div>
  <div class="details">
    <div class="title">Track Title</div>
    <div class="info"><strong>Scale:</strong> Major</div>
    <div class="info"><strong>Genre:</strong> Electronic</div>
    <div class="info"><strong>DAW:</strong> Ableton Live</div>
    <div class="info"><strong>BPM:</strong> 128</div>
    <div class="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget urna vel libero malesuada fringilla.
    </div>
    <button class="back-button" type="button">Back to List</button>
  </div>
</div>
</body>
</html>
    