import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({
  createModalOn,
  clothingItems,
  weatherTemp,
  onSelectedCard,
}) => {
  const user = {
    username: "User Name",
    avatar: "../../images/avatar.svg",
  };

  return (
    <div className="profile">
      <SideBar user={user} />
      <ClothesSection
        createModalOn={createModalOn}
        clothingItems={clothingItems}
        weatherTemp={weatherTemp}
        onSelectedCard={onSelectedCard}
      />
    </div>
  );
};

export default Profile;
