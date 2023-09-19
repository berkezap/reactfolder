import { useContext } from "react";
import AuthContext from "./context/authContext";

function Auth() {
  const { status, login } = useContext(AuthContext);
  console.log(status);
  return (
    <div>
      <h1>giriş yaptın mı</h1>
      {status ? <p> evet</p> : <p>hayır</p>}
      <button onClick={login}>Giriş Yap</button>
    </div>
  );
}
export default Auth;
