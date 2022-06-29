import React, { useContext } from "react";
import AuthContext from "../Context/Context_file";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //    return (
    <ul>
      {ctx.isLoggin && <li>Home</li>}
      {ctx.isLoggin && (
        <li>
          <button onClick={ctx.isLogout}>Logout</button>
        </li>
      )}
    </ul>
    // );
    // }
    //}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
