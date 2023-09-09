import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(1);

  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      <div>Kurs Sayısı : {value}</div>
    </div>
  );
}

/*   const students = 43000;
  const nameSurname = "Berke Ozsap";
  const dogruMu = true;
  const url = "https://picsum.photos/250/250" */

/*  return (


    // <div>
    //   <h1>İsim Soyisim : {nameSurname} </h1>
    //   <p>Öğrenci Sayisi: {students}</p>

    //   {/* ? den sonra gelen true olduğunda, : dan sonra gelen false olduğunda çalışır */
//   {dogruMu ? <p>Öğrenci Sayisi </p> :  <h1>İsim Soyisim :</h1>}

//   <p>deneme</p>
//   <input type="text" />
//   <input type="date" />
//   <img src={url} alt="" />
// </div>

/* <div className='box'>
    </div> */

export default App;
