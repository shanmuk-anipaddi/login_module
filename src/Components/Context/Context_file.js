import React from "react";

const AuthContext = React.createContext({
  isLoggin: false,
  isLogout : () => {}
});

export default AuthContext;
