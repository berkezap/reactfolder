import './App.css'

function App() {
  const students = 43000;
  const nameSurname = "Berke Ozsap";
  const dogruMu = true;

  return (
    <div>
      <h1>İsim Soyisim : {nameSurname} </h1>
      <p>Öğrenci Sayisi: {students}</p>
      

      {/* ? den sonra gelen true olduğunda, : dan sonra gelen false olduğunda çalışır */}
      {dogruMu ? <p>Öğrenci Sayisi </p> :  <h1>İsim Soyisim :</h1>}

      <p>deneme</p>
      <input type="text" />
      <input type="date" />
    </div>
  );
}

export default App

