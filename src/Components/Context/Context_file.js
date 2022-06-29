import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggin: false,
  isLogout: () => {},
  getlogin: (userName, pwd) => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const logged = useEffect(() => {
    const getLoggedFlag = localStorage.getItem("isLoggedIn");
    console.log("Logged Flag : ", getLoggedFlag);
    if (getLoggedFlag) {
      setisLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setisLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setisLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggin: isLoggedIn,
        getlogin: loginHandler,
        isLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
