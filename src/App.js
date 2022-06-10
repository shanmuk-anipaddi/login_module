import React, { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import AuthContext from "./Components/Context/Context_file";

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  /*Using UseEffect to check the isLoggedIn once with out rerendering*/

  const logged = useEffect(() => {
    const getLoggedFlag = localStorage.getItem("isLoggedIn");
    console.log("Logged Flag : ", getLoggedFlag);
    if (getLoggedFlag) {
      setloggedIn(true);
    }
  }, []);

  const loginHandler = (userName, pwd) => {
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
    <AuthContext.Provider
      value={{
        loggedIn: loggedIn,
        isLogout: logoutHandler
      }}
    >
      {!loggedIn && <Login getlogin={loginHandler} />}
      {loggedIn && <Home />}
      {loggedIn && (
        <Menu  />
      )}
    </AuthContext.Provider>
  );
}

export default App;
