import React, {  useContext } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import AuthContext from "./Components/Context/Context_file";

function App() {
  const ctx = useContext(AuthContext);
  
  console.log("App Js ",ctx);

  /*Using UseEffect to check the isLoggedIn once with out rerendering*/
  /*getlogin={loginHandler}*/
  return (
    <>
      {!ctx.isLoggin && <Login />}
      {ctx.isLoggin && <Home />}
      {ctx.isLoggin && <Menu />}
    </>
  );
}

export default App;
