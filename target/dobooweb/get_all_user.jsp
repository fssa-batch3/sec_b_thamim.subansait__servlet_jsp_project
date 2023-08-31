<%@page import="in.fssa.doboo.model.UserEntity"%>
<%@page import="java.util.Set"%>
<%@page import="in.fssa.doboo.service.UserService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<style>
table {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

td, th {
	border: 1px solid #DDDDDD;
	text-align: left;
	padding: 8px;
}

tr:nth-child(even) {
	background-color: #DDDDDD;
}

.btn {
	width: 100px;
	height: 50px;
	font-size: 18px;
	background: #fff;
	border: none;
	border-radius: 50px;
	color: #000;
	outline: none;
	cursor: pointer;
	transition: all 0.4s;
}

.btn:hover {
	box-shadow: inset 0 0 0 4px #ef476f, inset 0 0 0 8px #ffd166, inset 0 0
		0 12px #06d6a0, inset 0 0 0 16px #118ab2;
	background: #073b4c;
	color: #fff;
}
</style>
<body>



	<%
	UserService userService = new UserService();
	%>
	<%
	Set<UserEntity> users = userService.getAllUsers();
	%>

	<table style="width: 100%">

		<tr>
			<th>Name</th>
			<th>email</th>
			<th>password</th>
			<th>artist name</th>
			<th>date of birth</th>
			<th>View</th>
			<th>Update</th>
			<th>Delete</th>
		</tr>

		<%
		for (UserEntity user : users) {
		%>
		<tr>

			<td><%=user.getName()%></td>
			<td><%=user.getEmail()%></td>
			<td><%=user.getPassword()%></td>
			<td><%=user.getArtistName()%></td>
			<td><%=user.getDob()%></td>
			<td><a href="user/profile?userid=<%=user.getId()%>"><button type="button" class="btn">View</button></a></td>
			<td><a href="user/edit?userid=<%=user.getId()%>"><button type="button" class="btn">Update</button></a></td>
			<td><a href="user/delete?userid=<%=user.getId()%>"><button type="button" class="btn">Delete</button></a></td>
		</tr>
		<%
		}
		%>

	</table>
</body>
</html>