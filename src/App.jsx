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

  // State to track time since the profile is shown
  const [timeSinceMount, setTimeSinceMount] = useState(0);

  // Function to start and reset the timer
  const handleTimer = () => {
    setTimeSinceMount(0); // Reset timer when profile is shown
    return setInterval(() => {
      setTimeSinceMount((prevTime) => prevTime + 1);
    }, 1000);
  };

  // Effect to update the timer only when the profile is shown
  useEffect(() => {
    let interval;
    if (shows) {
      interval = handleTimer();
    }
    return () => clearInterval(interval); // Cleanup on unmount or when hidden
  }, [shows]);

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
      {shows && <p>Time since profile shown: {timeSinceMount} seconds</p>}
    </div>
  );
}

export default App;