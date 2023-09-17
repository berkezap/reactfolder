import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [can, setCan] = useState(0);
  const [tugba, setTugba] = useState(0);
  useEffect(() => {
    console.log("ilk kez render edildiğinde calısır daha da calısmaz");
  }, []);
  useEffect(() => {
    console.log("her zaman calısır");
  });
  useEffect(() => {
    console.log(
      "ilk kez renderda calısır ve can değerinde değişiklik olduğunda calısır"
    );
  }, [can]);
  useEffect(() => {
    console.log(
      "ilk kez renderda calısır ve tugba değerinde değişiklik olduğunda calısır"
    );
  }, [tugba]);
  useEffect(() => {
    console.log(
      "ilk kez renderda calısır ve can veya tugba değerinde değişiklik olduğunda calısır"
    );
  }, [can, tugba]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setCan(can + 1)}> Can ++</button>
        <div> Can : {can}</div>
      </div>
      <div>
        <button onClick={() => setTugba(tugba + 1)}> Tugba ++</button>
        <div>Tugba : {tugba}</div>
      </div>
    </div>
  );
}

export default App;
