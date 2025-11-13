import React, { useState } from "react";

function ProfileCard({ name, bio, avatar, isFollowed, onFollowToggle, darkMode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:  "#fff",
        color:  "#000",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: hovered
          ? "0 8px 20px rgba(0,0,0,0.3)"
          : "0 2px 8px rgba(243, 17, 17, 0.5)",
        textAlign: "center",
        width: "250px",
        transition: "all 0.3s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        cursor: "pointer",
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          border: hovered ? "4px solid #2196f3" : "4px solid red",
          transition: "all 0.3s ease",
          marginBottom: "10px",
        }}
      />
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          margin: "10px 0 5px 0",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontSize: "0.95rem",
          margin: "0 0 15px 0",
          color: darkMode ? "#ccc" : "#555",
        }}
      >
        {bio}
      </p>
      <button
        onClick={onFollowToggle}
        style={{
          background: isFollowed ? "black" : "#2196f3",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
