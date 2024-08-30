import React from "react";
import Sidebar from "../Components/Sidebar";
import CourseList from "../Components/CourseList";
import ProfileCard from "../Components/ProfileCard";
import NewsSection from "../Components/NewsSection";
import LearnMoreSection from "../Components/LearnMoreSection";
import "@fontsource/roboto"; // Importing Google Font

const Home = () => {
  const popularCourses = [
    {
      name: "Design Thinking: The Beginner's Guide",
      color: "bg-yellow-100",
      bookedPercentage: "23%",
    },
    {
      name: "Become a UX Designer from Scratch",
      color: "bg-orange-100",
      bookedPercentage: "85%",
    },
    {
      name: "Psychology and Web Design: Ultimate Guide",
      color: "bg-pink-100",
      bookedPercentage: "66%",
    },
  ];

  const myCourses = [
    "Adobe Photoshop CC 2019 - Free Essentials Training Course",
    "The Beginner's Guide to Color Theory for Digital Artists",
    "Design-Led Strategy: Design thinking for business strategy and startup",
    "Introduction to iOS App Development with Swift 5",
    "Web Design for Everybody: Basics of Web Development & Coding Specialization",
    "Work Smarter Harder: Time Management for Personal & Professional Productivity",
    "Design strategy: design thinking for business strategy and entrepreneurship",
  ];

  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-7xl mx-auto">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-1/5 pr-6">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="w-3/5 px-6">
            <h2 className="text-xl font-bold mb-4">Popular courses</h2>
            <CourseList courses={popularCourses} />

            <h2 className="text-xl font-bold mb-4 mt-8">My courses</h2>
            <div className="space-y-4">
              {myCourses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
                >
                  <div className="flex items-center">
                    <img
                      src={`https://via.placeholder.com/50?text=Course+${
                        index + 1
                      }`}
                      alt="Course"
                      className="rounded-full mr-2"
                    />
                    <span className="text-sm font-semibold">{course}</span>
                  </div>
                  <button className="bg-yellow-100 border-2 hover:border-yellow-200 border-yellow-200 px-3 py-1 rounded-lg text-sm">
                    View Course
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/5 pl-6">
            <NewsSection />
            <div className="mt-6">
              <ProfileCard />
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Learn more</h2>
              <LearnMoreSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
