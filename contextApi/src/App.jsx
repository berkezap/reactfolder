import "./App.css";
import AuthContext from "./context/authContext";
import Auth from "./Auth";

function App() {
  const loginAuth = () => {};
  console.log("metodu tetikledim");
  return (
    <AuthContext.Provider value={{ status: false, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
