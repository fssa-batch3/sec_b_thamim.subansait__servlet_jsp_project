<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Welcome to Doboo</title>
        
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        >
        <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">    
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"> 
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet">
    </head>
    <style>
    * {
    padding: 0px;
    margin: 0px;
    font-family:'Poppins', sans-serif;
  
  }
  ::-webkit-scrollbar{
         width: 0px; 
  }

.header{
    background-color: black;
    color: white;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}
.header h2{
    font-size: 30px;
    margin-left: 80px;
    font-weight: 600;
}
.link-button{
     padding: 20px;
}
.link-button button{
      padding: 10px;
      border-radius: 10px;
      font-size:16px;
      font-weight: 600;
      color: white;
      background-color: rgb(30, 30, 30);
      cursor: pointer;
} 
.content{
    text-align: center;
}
.content h1{
    font-size: 90px;
    font-weight: 900;
    animation: mytext 10s alternate-reverse;
}
@keyframes mytext{
    0%{
        color: #ff9d00;
    }
    10%{
        color: rgb(117, 117, 117);

    }
    30%{
       color: rgb(1, 145, 97);
    }
    50%{
      color: rgb(129, 81, 22);
    }
    70%{
      color: #333;
    }
    100%{
        color:crimson ;
    }

}
.para p{
    font-size: 21px;
    font-weight: 900;
    text-align: start;
    margin-top: 20px;
}
.video{
    background-image: url(https://s11.gifyu.com/images/SgYlA.gif);
    width: 100%;
    height: 70vh;
    margin-top: 30px;
}




.last h1 {
    text-align: center;
    font-size: 90px;
    font-weight: 900;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: 150px;
    
  }
  .last{
      background-color: #000000;     
      height: 50vh;
      
}
footer{
  background-color: #000000;
  color: white;
  
}
.connect{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
 
}
.connect i:hover{
         color: rgb(80, 80, 80);
         transform: scale(1.1);
         transition: 0.5s;
}
footer i{
  font-size: 30px;
  display: flex;
  flex-direction: row;
  
}
.footer{
  display:flex;
  flex-direction:column;
  text-align: center;
  background-color: black;
  color:white;
}
.link{
  display: flex;
  flex-direction: column;
  text-align: start;
  
}
.link a{
   padding: 8px;
   color: white;
}

.footer a:hover{
  color: #ff9d00;
}
.footer{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.link2 p{
  padding: 8px;
}
.link2 p:hover{
     transform: scale(1.1);
     cursor: pointer;

}
.link1 p{
  padding: 2px;
}
    
    </style>
    <body>
        <jsp:include page="header.jsp"></jsp:include>
        <div class="content">
            <h1>ABOUT DOBOO</h1>
            <div class="para">
                <p>In 2022, Many music producers are still struggling to make money and they ready to sell their tracks for money. So Doboo help the people to make money with thier music in the easiest way as possible. We mainly concreated the buyers and listener to dive into the music world or art of music. They can actually buy any tracks which are ready to sell. Doboo also gives the user a free version so that their no need to sign up or pay for anything, just listen to your favourte songs, This is beginning stage DOBOO so In future It will add many more features. It gives the value to artist community. </p>  
            </div>
            <div class="video">

            </div>

        </div>
        <div class="last">
            <h1>Start Today and Enjoy your life</h1>
        </div>

        <footer>
            <div class="footer">
                <div>
                    <h2>DOBOO</h2>
                </div>
                <div class="link">
                    <h3>USEFUL LINKS</h3>
        
                    <a href="./pages/seller profile and upload a track/log in.html" style="text-decoration: none;">
                        <p>Seller Login</p>
                    </a>
                    <a href="./pages/signup page/Sign up.html" style="text-decoration: none;">
                        <p>signup</p>
                    </a>
                    <a href="./pages/login page/log in.html" style="text-decoration: none;">
                        <p>Login</p>
                    </a>
                    <a href="./pages/homepage/Homepage.html" style="text-decoration: none;">
                        <p>Guest</p>
                    </a>
                    <a href="./pages/homepage/about_us.html" style="text-decoration: none;">
                        <p>About Doboo</p>
                    </a>
        
                </div>
                <div class="link2">
    
                    <p>Legal</p>
                    <p>Privacy</p>
                    <p>Terms and conditions</p>
                    <p>Cookies</p>
                    <p>Our Billing Policy</p>

                </div>
                <div class="link1">
                    <h3>LOCATION</h3>
                    <p>928 8th Ave,</p>
                    <p>New York, NY 10019, 
                        <P>United States</p>
                        <p>The Palm Jumeirah </p>
                        <p>Dubai</p> 
                        <p>United Arab Emirates</p>
      </div>
    </div>
                        <div class="connect">
                            <div>
                                Copyrights@DOBOO, all rights served to Doboo.com</div>
                            <div>
                                follow us on Social media:
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-github"></i>
                                <i class="fa-brands fa-twitch"></i>
                            </div>
                        </div>   
</footer>
    </body>

    </html>