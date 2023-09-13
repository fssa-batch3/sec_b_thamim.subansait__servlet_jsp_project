<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
 <%@ page isELIgnored = "false" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Error Page</title>
    <style>
        /* Add your CSS styles here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
        }
        .error-container {
            max-width: 600px;
            margin: 100px auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        h1 {
            color: #e74c3c;
        }
        p {
            color: #333;
        }
    </style>
</head>
<body>
<jsp:include page="header.jsp"></jsp:include>
    <div class="error-container">
        <h1>Error</h1>
        <p>${requestScope.errorMessage}</p>
    </div>
</body>
</html>
