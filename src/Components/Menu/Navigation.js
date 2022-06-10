import React from "react";
import AuthContext from "../Context/Context_file";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <ul>
            {ctx.loggedIn && <li>Home</li>}
            {ctx.loggedIn && (
              <li>
                <button onClick={ctx.isLogout}>Logout</button>
              </li>
            )}
          </ul>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
