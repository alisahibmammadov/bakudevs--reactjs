import React from "react";
import HomePageHead from "../components/HomePage/HomePageHead";
import HomeCoursesPage from "../components/HomePage/HomeCoursesPage";
import HomeAdvertisingPage from "../components/HomePage/HomeAdvertisingPage";

function HomePage() {
  return (
    <div  >
      <HomePageHead />
      <HomeCoursesPage />
      <HomeAdvertisingPage/>
    </div>
  );
}

export default HomePage;
