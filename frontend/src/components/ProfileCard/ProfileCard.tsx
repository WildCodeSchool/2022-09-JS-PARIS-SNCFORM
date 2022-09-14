import React from "react";

export const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <img
        src="src/assets/images/profile-card__background-img.jpg"
        alt="background-img"
        className="profile-card__background-img"
      />
    </div>
  );
};
// <img src="" alt="" className="profile-card__user-img" />
// <div className="profile-card__user-id">
//   <p className="profile-card__user-id--name> John Smith </p>
//  <p className="profile-card__user-id--job> Agent commercial </p>
//   <p className="profile-card__user-id--bio> </p>
//   </div>;
