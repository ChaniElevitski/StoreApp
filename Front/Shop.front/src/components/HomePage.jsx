import React from 'react';
import '../styling/HomePage.css'; // Import CSS for styling

const HomePage = () => {
  return (
    <div className="homepage"  >
      <video autoPlay loop muted className="video-bg">
        <source src="/assets/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1 className="animated-text">Taste Your Dreams</h1>
      </div>
    </div>
  );
};

export default HomePage;





  //<div class="head">
       // <div class="marki">

         //   <marquee dir="rtl" style="font-size:12pt" behavior="alternate" direction="left">
             //   <h1 style="text-align:center"> מארזים שווים ומפנקים&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; בכל הארץ עד 2 - 4 ימי עסקים</h1>

           // </marquee>


         //  <Link to="/About">אודות</Link>
         // <Link to="/OurPastry">המאפים שלנו</Link>
        //   <Link to="/ShoppingCart">עגלת הקניות</Link>          
       //    <Link to="/Contact">צור קשר</Link> 
         
       //</div>
       //