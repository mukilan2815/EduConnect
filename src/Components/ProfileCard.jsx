// src/Components/ProfileCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import md5 from "md5"; // Import md5 here

const ProfileCard = () => {
  const email = "example@example.com";
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(email)}?d=retro`;

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <div className="flex items-center mb-4">
        <img src={gravatarUrl} alt="Profile" className="rounded-full mr-4" />
        <div>
          <h4 className="font-bold">Subash Chandra</h4>
          <p className="text-sm text-gray-600">Head of Design</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold">24</div>
          <div className="text-sm text-gray-600">Courses Completed</div>
        </div>
        <div>
          <div className="text-2xl font-bold">22</div>
          <div className="text-sm text-gray-600">Certificates Earned</div>
        </div>
        <div>
          <div className="text-2xl font-bold">93</div>
          <div className="text-sm text-gray-600">Courses In Progress</div>
        </div>
        <div>
          <div className="text-2xl font-bold">37</div>
          <div className="text-sm text-gray-600">Courses Discussions</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
