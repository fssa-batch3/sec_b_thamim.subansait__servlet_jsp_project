<%@page import="in.fssa.doboo.model.TrackEntity"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page isELIgnored = "false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Track Details</title>
<style>
  .body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    min-height: 100vh;
  }

  .container {
    width: 600px;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 300px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .details {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }

  .info {
    font-size: 1.25rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.25rem;
    color: #777;
    margin-bottom: 1.5rem;
  }

  .button-container {
    display: flex;
    gap: 1rem;
  }

  .back-button, .add-to-cart-button {
    border: none;
    background-color: #007c5a;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    font-size: 1.25rem;
  }

  .back-button:hover, .add-to-cart-button:hover {
    background-color: #00563f;
  }
</style>
</head>
<body>
<jsp:include page="header.jsp"></jsp:include>
<div class="body">
<div class="container">
	<% TrackEntity track = (TrackEntity)request.getAttribute("track");%>
  <div class="image">
    <img alt="trackPoster" src="${requestScope.track.getImageUrl()}">
  </div>
  <div class="details">
    <div class="title">${requestScope.track.getTrackName() }</div>
    <div class="info"><strong>Scale:</strong> ${ requestScope.track.getScale() }</div>
    <div class="info"><strong>Genre:</strong> ${ requestScope.track.getGenre() }</div>
    <div class="info"><strong>DAW:</strong>${requestScope.track.getDaw()}</div>
    <div class="info"><strong>BPM:</strong> ${requestScope.track.getBpm()}</div>
    <div class="info"><strong>Price:$</strong> ${requestScope.track.getPrice()}</div>
    <div class="description">
      <%= track.getTrackDetail() %>
    </div>
    <div class="button-container">
      <a href="/dobooweb/tracks"><button class="back-button" type="button">Back to List</button></a>
      <button class="add-to-cart-button" type="button">Add to Cart</button>
    </div>
  </div>
</div>
</div>
<jsp:include page="music_player.jsp"></jsp:include>
</body>
</html>




    