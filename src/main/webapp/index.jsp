<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Doboo Store</title>
</head>
<style>
/* Reset some default styles for consistency */
body, h1, h2, h3, p {
    margin: 0;
    padding: 0;
}

/* Apply a background color and set text color */
body {
    background-color: #f2f2f2;
    color: #333;
    font-family: Arial, sans-serif;
}

/* Style the header */
header {
    background-color: #333;
    color: #fff;
    padding: 20px;
}

header h1 {
    font-size: 36px;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav a {
    color: #fff;
    text-decoration: none;
}

/* Style the hero section */
.hero {
    text-align: center;
    padding: 100px 0;
}

.hero h2 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 40px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

/* Style the featured music section */
.featured-music {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 40px;
    background-color: #fff;
}

.music-card {
    text-align: center;
    margin: 20px;
}

.music-card img {
   width:200px;
   height: 190px;
}

.music-card h3 {
    font-size: 24px;
    margin: 10px 0;
}

.music-card p {
    font-size: 18px;
    color: #666;
}

/* Style the footer */
footer {
    text-align: center;
    padding: 20px 0;
    background-color: #333;
    color: #fff;
}




</style>
<body>
    <header>
        <h1>Welcome to the Doboo</h1>
        <nav>
            <ul>
                <li><a href="user/login">Login</a></li>
                <li><a href="user/create">Sign Up</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="hero">
            <h2>Discover Your Favorite Music</h2>
            <p>Explore a vast collection of songs, albums, and artists.</p>
            <a href="#" class="btn">Get Started</a>
        </section>
        
        <section class="featured-music">
            <h2>Featured Music</h2>
            <div class="music-card">
                <img src="https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c" alt="Album 1">
                <h3>Bad guy</h3>
                <p>billie Eilish</p>
                <a href="#" class="btn">Listen Now</a>
            </div>
            <div class="music-card">
                <img src="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" alt="Album 2">
                <h3>reminder</h3>
                <p>The weeknd</p>
                <a href="#" class="btn">Listen Now</a>
            </div>
            <!-- Add more music cards here -->
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Music Store. All rights reserved.</p>
    </footer>
</body>
</html>
