<%@page import="java.awt.geom.Path2D"%>
<%@page import="javax.swing.plaf.metal.MetalBorders.Flush3DBorder"%>
<%@page import="in.fssa.doboo.model.TrackEntity"%>
<%@page import="java.util.Set"%>
<%@page import="in.fssa.doboo.service.TrackService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page isELIgnored = "false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <link rel="stylesheet" href="landing-styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <style>
        /* Reset some default styles */
        body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            background-color: white;
        }

        /* Style the header */
        .header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }

        .header h1 {
            margin: 0;
        }

        .header a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            float: right;
        }

        /* Style the content */
        .content {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
        }

        .content h2 {
            color: #333;
        }

        .content p {
            color: #666;
            font-size: 16px;
        }
/* Add this CSS to style your track cards */
.track-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.track-card {
    width: calc(33.33% - 20px);
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}

.track-card h3 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
}

.track-card p {
    font-size: 16px;
    color: #666;
    margin: 0;
    line-height: 1.5;
}

.track-card a {
    display: inline-block;
    margin-top: 10px;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.track-card a:hover {
    background-color: #555;
}

.upload-message {
    margin-top: 20px;
    text-align: center;
}

.upload-message i {
    font-size: 24px; /* Adjust the icon size as needed */
    color: #333; /* Icon color */
    margin-right: 10px; /* Add spacing between icon and text */
}

.upload-message a {
    color: #007bff; /* Link color */
    text-decoration: none;
    font-weight: bold;
}

.upload-message a:hover {
    text-decoration: underline;
}
.search-bar {
            text-align: center;
            margin: 20px 0;
        }

        .search-bar input[type="text"] {
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ccc;
            border-radius: 5px;
            width: 300px;
            margin-right: 10px;
        }

        .search-bar button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .search-bar button:hover {
            background-color: #555;
        }



    </style>
</head>
<body>
<jsp:include page="header.jsp"></jsp:include>
    <div class="header">
    <a href="/dobooweb/tracks" style="position: relative; bottom: 10px; ">View All Tracks</a>
        <h1>Welcome to Your Dashboard</h1>
        <a href="profile" style="position: relative; bottom: 30px; ">Profile</a>
    </div>
      <form action="/dobooweb/search" method="GET">
    <div class="search-bar">
        <input type="text" name="query" id="track-search" placeholder="Search for tracks...">
        <button type="submit" id="search-button">Search</button>
    </div>
</form>
      
    <div class="content">
    <h2>Your Uploaded Tracks</h2>
    <div class="track-cards">
        <!-- Card for Track 1 -->
       <% Set<TrackEntity> tracks = (Set<TrackEntity>) request.getAttribute("tracks");
        	if(tracks == null){	
        		%>
        		<h4>No Track Found For the artist Please upload below</h4>
        		<%} else{ %>
<%
  for (TrackEntity track : tracks) {
%>
        <div class="track-card">
            <h3><%=track.getTrackName() %></h3>
            <p><strong>BPM:</strong> <%= track.getBpm()%></p>
            <p><strong>Genre:</strong> <%=track.getGenre() %></p>
            <p><strong>Scale:</strong> <%=track.getScale() %> </p>
            <p><strong>DAW:</strong> <%=track.getDaw() %></p>
            <a href="/dobooweb/user/track?trackid=<%=track.getId() %>">Edit</a>
            <a href="/dobooweb/track/delete?trackid=<%=track.getId() %>">Delete</a>
            <a href="">Change Media</a>
            
        </div>
      <%
  }
        		}
%>
    </div>
</div>
<!-- Add the message and link to upload new tracks -->
<div class="upload-message">
    <p><i class="fas fa-music"></i> Click <a href="/dobooweb/user/upload">here</a> to upload your new tracks.</p>
</div>

    
</body>
</html>
