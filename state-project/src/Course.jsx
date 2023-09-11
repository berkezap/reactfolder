import Angular from "./assets/angular.jpg";
import Bootstrap from "./assets/bootstrap5.png";
import Ccsharp from "./assets/ccsharp.png";
import Kompleweb from "./assets/kompleweb.jpg";
import React from "react";

export default function Course({ courseName }) {
  console.log(Angular);
  console.log(courseName);
  return (
    <div>
      <img src={Angular} alt="" />
    </div>
  );
}
