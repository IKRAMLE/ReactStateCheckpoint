import React, { useState, useEffect } from "react";
import image from "/me.png";
import "./App.css"; 


function App() {
  // State to store the person’s profile
  const [person, setPerson] = useState({
    fullName: "IKRAM LECHQER",
    bio: "A passionate software engineer",
    imgSrc: image,
    profession: "Software Developer",
  });

  // State to toggle the profile visibility
  const [shows, setShows] = useState(false);

  // State to track time since the component was mounted
  const [timeSinceMount, setTimeSinceMount] = useState(0);

  // Effect to update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceMount((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Runs only once when the component mounts

  return (
    <div className="container">
      {/* Toggle button */}
      <button onClick={() => setShows(!shows)}>
        {shows ? "Hide Profile" : "Show Profile"}
      </button>

      {/* Show the profile only if `shows` is true */}
      {shows && (
        <div className="profile">
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt="Profile" className="profile-img" />
          <h3>{person.profession}</h3>
        </div>
      )}

      {/* Timer display */}
      <p>Time since mounted: {timeSinceMount} seconds</p>
    </div>
  );
}

export default App;
