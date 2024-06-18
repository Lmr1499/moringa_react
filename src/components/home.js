import React from "react";
import profilePhoto from "../profile-photo.jpg"; // Ensure you have this image in the src directory

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="photo">
          <img src={profilePhoto} alt="Your Profile" />
        </div>
        <div className="intro">
          <h1>Hello I'm</h1>
          <h2>shaka senaji</h2>
          <p>
            BORN: <span>Your 2090</span>
          </p>
          <p>
            AGE: <span>275</span>
          </p>
          <p>
            IG: <span>@yayacreates</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
