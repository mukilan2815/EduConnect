// src/Components/CourseCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({ course, booked, days }) => {
  return (
    <div className="p-4 rounded-xl bg-yellow-100">
      <img
        src={`https://via.placeholder.com/150?text=Course+Image`}
        alt="Course"
        className="mb-2 rounded-lg"
      />
      <h3 className="font-bold mb-2">{course}</h3>
      <div className="flex justify-between text-sm">
        <span>Booked: {booked}</span>
        <span>Days: {days}</span>
      </div>
    </div>
  );
};

export default CourseCard;
