<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<style>
/* Apply some basic styling to the form */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Style the labels and input fields */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="date"],
select {
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Style the select dropdown */
select {
	width:98%; 
  appearance: none;
  padding: 10px;
  background-color: #f8f8f8;
}

/* Style the submit button */
button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Change button color on hover */
button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Center the form vertically and horizontally on the page */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
}

/* Add media queries for responsiveness */
@media (max-width: 600px) {
  form {
    width: 80%;
  }
}

</style>
<body>

<form action="create" method = "post">
	<h2>Sign up</h2>
    <label for="fname">Name</label>
    <input type="text"  name="name" required="required">
    <small>Don't use space in between your name and don't use any special characters</small>
    <br>
	<label for="email">Email</label>
    <input type="text"  name="email" required="required" >
    <small>must include @gmail or any host gmail</small>
    <br>
    <label for="password">Password</label>
    <input type="text"  name="password" required="required">
    <small>must contain one UpperCase and number, minimum 9 characters</small>
    <br>
    <select name = "role">
    <option>seller</option>
    <option>buyer</option>
    </select>
    
      <label for="artistName">Artist Name</label>
    <input type="text"  name="artist_name" required="required">
    
     <label for="dateOfBirth">Date of birth</label>
     <small>age must be greater than 16</small>
    <input type="date"  name="dob" required="required">
     
   
    <button type="submit">Let's go</button>
  </form>
</body>
</html>