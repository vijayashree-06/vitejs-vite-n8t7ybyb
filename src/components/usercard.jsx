// write the component code here
/* cart/usercard.jsx */
import React from "react";
import "./usercard.css"; // Importing CSS file for styling

const Usercard = () => {
  // Static user details
  const userImage = "https://via.placeholder.com/150";
  const userName = "John Doe";
  const userEmail = "johndoe@example.com";
  const userPhone = "(123) 456-7890";
  const userAddress = "123 Main St, City, Country";

  return (
    <div className="user-card">
      <img src={userImage} alt={userName} className="user-image" />
      <h2 className="user-name">{userName}</h2>
      <p className="user-email">{userEmail}</p>
      <p className="user-phone">{userPhone}</p>
      <p className="user-address">{userAddress}</p>
    </div>
  );
};

export default Usercard;
