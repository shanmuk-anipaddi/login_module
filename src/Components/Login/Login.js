import React, { useState } from "react";

const Login = (props) => {
  const [userName, setUsrname] = useState("");
  const [password, setPwd] = useState("");
  const [userNameValid, setuserNameValid] = useState("");
  const [userPwdValid, setUserPwdValid] = useState("");

  const getUserName = (e) => {
    //console.log("UserName : ", e.target.value);
    setUsrname(e.target.value);
  };

  const getPwd = (e) => {
    //console.log("Pwd : ", e.target.value);
    setPwd(e.target.value);
  };

  const validateUserName = () => {
    setuserNameValid(userName.includes("@"));
  };

  const validatePwd = () => {
    setUserPwdValid(password.length > 6);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    props.getlogin(userName,password)
    //console.log("UserName", userName);
    //console.log("Password", password);
  };
//   console.log(setuserNameValid);
//   console.log(setUserPwdValid);
  return (
    <div className="align-middle">
        <center><h2>Welcome To Login Page</h2></center>
      <form method="get" >
        <div>
          <input
            className={`${userNameValid === false ? "bg-red-300 " : ""} border-2`}
            type="text"
            name="username"
            onChange={getUserName}
            onBlur={validateUserName}
          />
        </div>
        <div className="pt-2">
          <input
            className={`${userPwdValid === false ? "bg-red-300 " : ""} border-2 `}
            type="password"
            name="password"
            onChange={getPwd}
            onBlur={validatePwd}
          />
        </div>
        <input type="submit" value="SUBMIT" onClick={loginHandler} />
      </form>
    </div>
  );
};

export default Login;
