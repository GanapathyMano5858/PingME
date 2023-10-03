import React from "react";
import "../../assets/css/Home.css";
import video from "../../assets/video/home_page.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Holiday</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here....." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="destinationInput">
            <label htmlFor="date">Search your date:</label>
            <div className="input flex">
              <input type="date" placeholder="Enter name here....." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">₹5000</h3>
            </div>
            <div className="input flex">
              <input type="range" min="1000" max="500000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <BsInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
