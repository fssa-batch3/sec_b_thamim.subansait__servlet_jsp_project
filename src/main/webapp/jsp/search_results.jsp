<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.Set" %>
<%@ page import="in.fssa.doboo.model.TrackEntity" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include your CSS and other head elements here -->
</head>
<style>
/* Reset some default styles */
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
}

/* Style the header if needed */
/* Add your header styles here */

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

.content h3 {
    color: #333;
    
}

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

/* Style for the "Matched Tracks" section */
.matched-tracks {
    background-color: #f2f2f2;
     /* Light gray background */
     margin-top: 30px;
}

.matched-tracks .track-card {
    border: 2px solid #e0e0e0; /* Light gray border */
}

.matched-tracks h3 {
    color: #333;
}

/* Style for the "Artist Tracks" section */
.artist-tracks {
    background-color: #fff; /* White background */
}

.artist-tracks .track-card {
    border: 2px solid #ddd; /* Light gray border */
}

.artist-tracks h3 {
    color: #555; /* Slightly darker heading color */
}


/* Style the footer or other content as needed */
/* Add your footer styles here */

</style>
<body>
	<jsp:include page="header.jsp"></jsp:include>
    <div class="content">
        <h2>Search Results</h2>
        
        <h3>Matched Tracks</h3>
        <div class="track-cards matched-tracks">
            <% Set<TrackEntity> matchedTracks = (Set<TrackEntity>) request.getAttribute("matchedTracks"); %>
            <%
            if (matchedTracks != null && !matchedTracks.isEmpty()) {
                for (TrackEntity track : matchedTracks) {
            %>
                <div class="track-card">
                    <h3><%=track.getTrackName() %></h3>
                    <!-- Display other track information here for matched tracks -->
                    <p><strong>BPM:</strong> <%=track.getBpm() %></p>
                    <p><strong>Genre:</strong> <%=track.getGenre() %></p>
                    <p><strong>Scale:</strong> <%=track.getScale() %> </p>
                    <p><strong>DAW:</strong> <%=track.getDaw() %></p>
                    <a href="/dobooweb/track/detail?trackid=<%=track.getId() %>">View</a>
                </div>
                
            <%
                }
            }else {
            %>
             <p>No matched tracks found.</p>
            <%
                }
            %>
        </div>
        
        <h3>Artist Tracks</h3>
        <div class="track-cards artist-tracks">
            <% Set<TrackEntity> artistTracks = (Set<TrackEntity>) request.getAttribute("artistTracks"); %>
            <%
            if (artistTracks != null && !artistTracks.isEmpty()) {
                for (TrackEntity track : artistTracks) {
            %>
                <div class="track-card">
                    <h3><%=track.getTrackName() %></h3>
                    <!-- Display other track information here for artist tracks -->
                    <p><strong>BPM:</strong> <%=track.getBpm() %></p>
                    <p><strong>Genre:</strong> <%=track.getGenre() %></p>
                    <p><strong>Scale:</strong> <%=track.getScale() %> </p>
                    <p><strong>DAW:</strong> <%=track.getDaw() %></p>
                    <a href="/dobooweb/track/detail?trackid=<%=track.getId() %>">View</a>
                </div>
            <%
                }
            } else {
            %>
             <p>No artist tracks found.</p>
            <%
                }
            %>
        </div>
    </div>

    <%-- Include the footer or other content as needed --%>
</body>
</html>

