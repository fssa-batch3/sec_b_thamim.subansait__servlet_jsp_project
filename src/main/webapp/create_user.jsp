<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="create" method = "post">
    <label for="fname">Name</label>
    <input type="text"  name="name" required="required">
    
	<label for="email">Email</label>
    <input type="text"  name="email" required="required" >
    
    <label for="password">Password</label>
    <input type="text"  name="password" required="required">
    
    <select name = "role">
    <option>seller</option>
    <option>buyer</option>
    </select>
    
      <label for="artistName">Artist Name</label>
    <input type="text"  name="artist_name" required="required">
    
     <label for="dateOfBirth">Date of birth</label>
    <input type="date"  name="dob" required="required">
   
    <button type="submit">Let's go</button>
  </form>
</body>
</html>