<%@page import="in.fssa.doboo.model.UserEntity"%>
<%@page import="in.fssa.doboo.service.UserService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Edit Profile</title>
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
</style>
</head>
<body>
<jsp:include page="header.jsp"></jsp:include>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="profile-card text-center">
      <%UserEntity user = (UserEntity)request.getAttribute("user"); %>
        <form action="update?userid=<%=user.getId()%>" method = "post">
       
          <img src="https://picsum.photos/200/300" alt="Profile Image" class="profile-image">
          <div class="form-group">
            <input type="text" class="form-control" name="name" value="<%=user.getName()%>">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" readonly="readonly" value="<%=user.getEmail()%>">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" value="<%=user.getPassword()%>">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="artistName" value="<%=user.getArtistName()%>">
          </div>
          
          <div class="form-group">
            <input type="text" class="form-control" name="dob" readonly="readonly" value="<%=user.getDob()%>">
          </div>
          
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</div>

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</body>
</html>
    