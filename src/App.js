import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  const loginHandler = (userName, pwd) => {
    console.log("In App file");
    console.log("UserName : ", userName);
    console.log("Pwd : ", pwd);
    if (userName.includes("@") && pwd.length > 6) {
      localStorage.setItem("isLoggedIn", "1");
      setloggedIn(true);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setloggedIn(false);
  };

  return (
    <div className="App">
      {!loggedIn && <Login getlogin={loginHandler} />}
      {loggedIn && <Home />}
      {loggedIn && (
        <Menu loggedStatus={loggedIn} logoutHandle={logoutHandler} />
      )}
    </div>
  );
}

export default App;
