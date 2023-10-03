import React from "react";
import "../../assets/css/Home.css";
import video from "../../assets/video/home_page.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>
    </section>
  );
};

export default Home;
