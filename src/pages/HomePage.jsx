import React from "react";
import HomePageHead from "../components/HomePage/HomePageHead";
import HomeCoursesPage from "../components/HomePage/HomeCoursesPage";

function HomePage() {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <HomePageHead />
      <HomeCoursesPage />
    </div>
  );
}

export default HomePage;
