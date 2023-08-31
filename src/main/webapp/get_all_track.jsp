<%@page import="java.util.Set"%>
<%@page import="in.fssa.doboo.model.TrackEntity"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Track Cards</title>
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
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .card {
    width: 250px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .image {
    width: 100%;
    height: 150px;
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
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .info {
    font-size: 0.875rem;
    color: #777;
    margin-bottom: 0.25rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .view-button {
    border: none;
    background-color: #00ac7c;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    font-size: 0.875rem;
  }

  .view-button:hover {
    background-color: #007c5a;
  }
</style>
</head>
<body>
<div class="container">
<% Set<TrackEntity> tracks = (Set<TrackEntity>) request.getAttribute("tracks"); %>
<%
  for (TrackEntity track : tracks) {
%>
<div class="card">
  <div class="image">
    <img alt="trackPoster" src="https://picsum.photos/250/150">
  </div>
  <div class="details">
    <div class="title"><%= track.getTrackName() %></div>
    <div class="info"><%= track.getTrackDetail() %></div>
    <div class="info"><strong>Scale:</strong> <%= track.getScale() %></div>
    <div class="info"><strong>Genre:</strong> <%= track.getGenre() %></div>
    <div class="info"><strong>DAW:</strong> <%= track.getDaw() %></div>
    <div class="info"><strong>BPM:</strong> <%= track.getBpm() %></div>
    <div class="button-container">
      <a href="track/detail?trackid=<%=track.getId()%>>"><button class="view-button" type="button">View</button></a>
    </div>
  </div>
</div>
<%
  }
%>
</div>
</body>
</html>

	