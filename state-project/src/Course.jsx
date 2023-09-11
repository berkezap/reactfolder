import Angular from "./assets/angular.jpg";
import Bootstrap from "./assets/bootstrap5.png";
import Ccsharp from "./assets/ccsharp.png";
import Kompleweb from "./assets/kompleweb.jpg";
import React from "react";
import "./App.css";
import "./Course.css";

const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  Kompleweb,
};

export default function Course({ courseName }) {
  console.log(courseMap[courseName]);
  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}
