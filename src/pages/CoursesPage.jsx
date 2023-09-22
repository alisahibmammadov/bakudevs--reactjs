import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HomeCoursesPage from "../components/HomePage/HomeCoursesPage";
import PagesBg from "../components/PagesBg";

function CoursesPage() {
  const [course, setCourse] = useState(false);
  return (
    <Container fluid style={{ padding: "100px 0 0" }}>
      <PagesBg pages="courses" />
      <HomeCoursesPage course={course} />
    </Container>
  );
}

export default CoursesPage;
