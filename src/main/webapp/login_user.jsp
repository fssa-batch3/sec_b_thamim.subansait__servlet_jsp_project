<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<style>
/* Reset some default styles */
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
}

/* Style the container */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Style the login box */
.login-box {
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 350px;
    padding: 20px;
    text-align: center;
}

h2 {
    color: #333;
}

/* Style form elements */
.form-group {
    margin-bottom: 20px;
}

input[type="email"],
input[type="password"] {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #555;
}

/* Style the bottom text */
.bottom-text {
    margin-top: 10px;
}

.bottom-text a {
    text-decoration: none;
    color: #333;
}

.bottom-text a:hover {
    text-decoration: underline;
}

</style>
<body>
    <div class="login-container">
        <div class="login-box">
            <h2>Login</h2>
            <form action=log>
                <div class="form-group">
                    <input type="email"  name="email" placeholder="email" required>
                </div>
                <div class="form-group">
                    <input type="password"  name="password" placeholder="Password" required>
                </div>
                <button type="submit">Login</button>
            </form>
            <div class="bottom-text">
                <p>Don't have an account? <a href="/dobooweb/user/create">Sign up</a></p>
            </div>
        </div>
    </div>
</body>
</html>

    