import React, { useState, useReducer } from "react";

const emailReducer = (state, action) => {
  //console.log("State est ",state.value)
  console.log("Action ", action);
  switch (action.type) {
    case "GET_USER":
      return {
        value: action.payload.userEmail,
        isValid: action.payload.userEmail.includes("@"),
      };

    case "GET_PWD":
      return {
        value: action.payload.pwd,
        isValid: action.payload.pwd.length > 6,
      };
  }
};

const Login = (props) => {
  //const [userName, setUsrname] = useState("");
  //const [password, setPwd] = useState("");
  //const [userNameValid, setuserNameValid] = useState("");
  //const [userPwdValid, setUserPwdValid] = useState("");
  const [formValid,setFormValid] = useState('');
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [pwdState, dispatchPwd] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  console.log("Email state ", emailState);
  const getUserName = (e) => {
    //console.log("UserName : ", e.target.value);
    //setUsrname(e.target.value);
    dispatchEmail({ type: "GET_USER", payload: { userEmail: e.target.value } });
  };

  const getPwd = (e) => {
    //console.log("Pwd : ", e.target.value);
    dispatchPwd({ type: "GET_PWD", payload: { pwd: e.target.value } });
    //setPwd(e.target.value);
  };

  // const validateUserName = () => {
  //   // setuserNameValid(emailState.value.includes("@"));
  // };

  // const validatePwd = () => {
  //   setUserPwdValid(password.length > 6);
  // };

  const loginHandler = (e) => {
    e.preventDefault();
    props.getlogin(emailState.value, pwdState.value);
    //console.log("UserName", userName);
    //console.log("Password", password);
  };
  //   console.log(setuserNameValid);
  //   console.log(setUserPwdValid);
  return (
    <div className="align-middle">
      <center>
        <h2>Welcome To Login Page</h2>
      </center>
      <form method="get">
        <div>
          <input
            className={`${
              emailState.isValid === false ? "bg-red-300 " : ""
            } border-2`}
            type="text"
            name="username"
            onChange={getUserName}
            // onBlur={validateUserName}
          />
        </div>
        <div className="pt-2">
          <input
            className={`${
              pwdState.isValid === false ? "bg-red-300 " : ""
            } border-2 `}
            type="password"
            name="password"
            onChange={getPwd}
            // onBlur={validatePwd}
          />
        </div>
        <button
          type="submit"
          onClick={loginHandler}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Login;
