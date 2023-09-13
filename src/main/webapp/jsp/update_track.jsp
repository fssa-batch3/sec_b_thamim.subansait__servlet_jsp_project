<%@page import="in.fssa.doboo.model.TrackEntity"%>
<%@page import="java.util.Set"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Track</title>
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

        label {
            font-weight: bold;
        }

        input[type="text"],
        textarea,
        select {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        textarea {
            height: 150px;
        }

        select {
            height: 40px;
        }

        button[type="submit"] {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
<jsp:include page="header.jsp"></jsp:include>
    <div class="container">
        <h1>Edit Track</h1>
        <% TrackEntity track = (TrackEntity) request.getAttribute("tracks"); %>
        <form action="/dobooweb/user/track?trackid=<%=track.getId()%>" method="post">
            <label for="trackName">Track Name:</label>
            <input type="text" id="trackName" name="trackName" value="<%=track.getTrackName() %>"required autofocus="autofocus">

            <label for="trackDetail">Track Detail:</label>
            <textarea id="trackDetail" name="trackDetail" ><%=track.getTrackDetail() %></textarea>

            <label for="trackBpm">Track BPM:</label>
            <input type="number" id="trackBpm" name="trackBpm" value="<%=track.getBpm() %>" >

            <label for="trackGenre">Track Genre:</label>
            <% String status = track.getGenre();%>
<select id="trackGenre" class="input" name="trackGenre" >
    <% String[] genres = {"HIP HOP", "TRAP", "LO-FI", "RAP", "Rnb", "Electronic", "Pop", "Reggae", "Drill", "Afro beat", "Club", "House", "Hyperpop", "Boom Bap", "Country", "Drum and bass", "Classical", "Folk", "Blue","hyper pop","pop"}; %>
    <% for (String genre : genres) { %>
        <option value="<%= genre %>" <% if (status != null && status.equals(genre)) { %>selected<% } %>>
            <%= genre %>
        </option>
    <% } %>
</select>
            
			

            <label for="trackDaw">DAW (Digital Audio Workstation):</label>
            <input type="text" id="trackDaw" name="trackDaw" value="<%=track.getDaw() %>" >

            <label for="trackScale">Track Scale:</label>
            <% String scale = track.getScale(); %>
<select id="trackScale" class="input" name="trackScale" >
    <% String[] scales = {"C major", "C minor", "C# major", "C# minor", "D major", "D minor", "D# major", "D# minor", "E major", "E minor", "F major", "F minor", "F# major", "F# minor", "G major", "G minor", "G# major", "G# minor", "A major", "A minor", "A# major", "A# minor", "B major", "B minor" }; %>
    <% for (String scaleOption : scales) { %>
        <option value="<%= scaleOption %>" <% if (scale != null && scale.equals(scaleOption)) { %>selected<% } %>>
            <%= scaleOption %>
        </option>
    <% } %>
</select>
            
            
            <label for="trackScale">Track Price:</label>
            <input type="number" id="trackScale" name="trackPrice" value="<%=track.getPrice() %>" required>

            <button type="submit">Save Changes</button>
        </form>
    </div>
</body>
</html>
    