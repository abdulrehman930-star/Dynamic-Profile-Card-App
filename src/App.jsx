import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

import avatar1 from "./assets/images/avatar1.jpg";
import avatar2 from "./assets/images/avatar3.jpg";
import avatar3 from "./assets/images/avatar2.jpg";
import avatar4 from "./assets/images/avatar5.jpg";
import avatar5 from "./assets/images/avatar4.jpg";
import avatar6 from "./assets/images/avatar6.jpg";
import avatar7 from "./assets/images/avatar7.png";
import avatar8 from "./assets/images/avatar8.jpg";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const [profiles, setProfiles] = useState([
    { id: 1, name: "Abdul Rehman", bio: "Frontend Developer", avatar: avatar1, isFollowed: false },
    { id: 2, name: "Fatima", bio: "UI/UX Designer", avatar: avatar2, isFollowed: true },
    { id: 3, name: "Toqeer Bhai", bio: "Senior Developer", avatar: avatar3, isFollowed: false },
    { id: 4, name: "Usman", bio: "Backend Developer", avatar: avatar4, isFollowed: true },
    { id: 5, name: "Ayesha", bio: "Graphic Designer", avatar: avatar5, isFollowed: false },
    { id: 6, name: "Hassan", bio: "React Developer", avatar: avatar6, isFollowed: true },
    { id: 7, name: "Ibrar", bio: "Backend Developer", avatar: avatar7, isFollowed: false },
    { id: 8, name: "Alisha", bio: "Art Director", avatar: avatar8, isFollowed: true },
  ]);

  useEffect(() => {
    console.log("Profiles updated:", profiles.map(p => ({ name: p.name, isFollowed: p.isFollowed })));
  }, [profiles]);

  const toggleFollow = (id) => {
    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id === id ? { ...profile, isFollowed: !profile.isFollowed } : profile
      )
    );
  };

  const toggleTheme = () => setDarkMode(!darkMode);
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "40px",
        transition: "all 0.3s ease",
      }}
    >

      <button
        onClick={toggleTheme}
        style={{
          background: darkMode ? "#fff" : "#000",
          color: darkMode ? "#000" : "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "15px 15px",
          borderRadius: "50px",
          border: "none",
          marginLeft: "20px",
          marginBottom: "30px",
          outline: "none",
          width:"50%"
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((user) => (
            <ProfileCard
              key={user.id}
              name={user.name}
              bio={user.bio}
              avatar={user.avatar}
              isFollowed={user.isFollowed}
              onFollowToggle={() => toggleFollow(user.id)}
              darkMode={darkMode}
            />
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default App;
