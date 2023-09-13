<%@page import="in.fssa.doboo.model.UserEntity"%>
<%@page import="in.fssa.doboo.model.User"%>
<%@page import="in.fssa.doboo.service.UserService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Profile Landing Page</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<style>
  body {
    background-color: #f8f9fa;
  }
  .profile-card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 50px;
  }
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }
  /* Style for the Edit button */
.edit-button {
  /* Button background color */
  background-color: #007bff;
  /* Text color */
  color: #fff;
  /* Padding around the text */
  padding: 10px 20px;
  /* Border style */
  border: none;
  /* Border radius to make the button slightly rounded */
  border-radius: 5px;
  /* Cursor style on hover */
  cursor: pointer;
  /* Add a hover effect to the button */
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hover effect for the Edit button */
.edit-button:hover {
  /* Change background color on hover */
  background-color: #0056b3;
}
  
</style>
</head>
<body>
 <jsp:include page="header.jsp"></jsp:include>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="profile-card text-center">
        <img src="https://picsum.photos/200/300" alt="Profile Image" class="profile-image">
        <%UserEntity user = (UserEntity)request.getAttribute("user"); %>
        <h2><%=user.getName() %></h2>
        <hr>
        <p>Email:<%=user.getEmail()%> </p>
        <p>artist Name:<%=user.getArtistName()%> </p>
        <p>dob: <%=user.getDob()%></p>
        <hr>
        <a href="edit"><button class="edit-button">Edit</button></a>
        <a href="delete"><button class="edit-button">Delete</button></a>
      </div>
      
    </div>
  </div>
  
</div>

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</body>
</html>
    