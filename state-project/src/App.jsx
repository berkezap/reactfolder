import Course from "./Course";
import { useState } from "react";
import "./App.css";

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "Kompleweb"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Kurs Ekle
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}
export default App;
