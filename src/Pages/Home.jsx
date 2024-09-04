import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import ProfileCard from "../Components/ProfileCard";
import NewsSection from "../Components/NewsSection";
import LearnMoreSection from "../Components/LearnMoreSection";
import "@fontsource/roboto";

const Home = () => {
  const popularCourses = [
    {
      name: "Design Thinking: The Beginner's Guide",
      color: "bg-yellow-100",
      numberOfVideos: 3,
      videos: [
        "Video 1: Introduction",
        "Video 2: Design Process",
        "Video 3: Real-life Applications",
      ],
    },
    {
      name: "Become a UX Designer from Scratch",
      color: "bg-orange-100",
      numberOfVideos: 3,
      videos: [
        "Video 1: Getting Started",
        "Video 2: Wireframing Basics",
        "Video 3: UX Tools Overview",
      ],
    },
    {
      name: "Psychology and Web Design: Ultimate Guide",
      color: "bg-pink-100",
      numberOfVideos: 3,
      videos: [
        "Video 1: The Psychology of Design",
        "Video 2: User Behavior",
        "Video 3: Advanced Web Design",
      ],
    },
  ];

  const [expandedCourseIndex, setExpandedCourseIndex] = useState(null);

  const handleCourseClick = (index) => {
    setExpandedCourseIndex(index === expandedCourseIndex ? null : index);
  };

  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-7xl mx-auto">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-1/5 pr-6">
            <Sidebar />
          </div>

          <div className="w-3/5 px-6">
            <h2 className="text-xl font-bold mb-4">Courses</h2>
            <div className="space-y-4">
              {popularCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
                >
                  <div
                    onClick={() => handleCourseClick(index)}
                    className={`flex items-center justify-between ${course.color} p-4 rounded-lg cursor-pointer`}
                  >
                    <div className="flex items-center">
                      <img
                        src={`https://via.placeholder.com/50?text=Course+${
                          index + 1
                        }`}
                        alt="Course"
                        className="rounded-full mr-2"
                      />
                      <span className="text-lg font-semibold">
                        {course.name}
                      </span>
                    </div>
                    <span className="text-sm">
                      {course.numberOfVideos} Videos
                    </span>
                  </div>

                  {expandedCourseIndex === index && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-bold mb-2">Videos</h3>
                      <div className="space-y-2">
                        {course.videos.map((video, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-white p-3 rounded-lg shadow"
                          >
                            <span className="text-sm font-semibold">
                              {video}
                            </span>
                            <button className="bg-yellow-100 border-2 hover:border-yellow-200 border-yellow-200 px-3 py-1 rounded-lg text-sm">
                              View Video
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

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
