import React, { useState, useReducer, useContext } from "react";
import AuthContext from "../Context/Context_file";
import Input from "../UI/Input/Input";

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
    case "GET_FORM_VALID":
      return {
        isValid:
          (action.payload.userEmail.includes("@") &&
          action.payload.userPwd.length > 6)
      };

    default:
      return { value: "", isValid: false };
  }
};

const Login = (props) => {
  //const [userName, setUsrname] = useState("");
  //const [password, setPwd] = useState("");
  //const [userNameValid, setuserNameValid] = useState("");
  //const [userPwdValid, setUserPwdValid] = useState("");
  //const [formValid, setFormValid] = useState("");
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [pwdState, dispatchPwd] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [formValid, dispatchFormValid] = useReducer(emailReducer, {
    isValid: false,
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



  //const
  // const validateUserName = () => {
  //   // setuserNameValid(emailState.value.includes("@"));
  // };

  // const validatePwd = () => {
  //   setUserPwdValid(password.length > 6);
  // };

  const authCtx = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatchFormValid({
      type: "GET_FORM_VALID",
      payload: { userEmail: emailState.value, userPwd: pwdState.value },
    });
    console.log("formValid ", formValid);
    if (formValid.isValid) {
      authCtx.getlogin(emailState.value, pwdState.value);
    }

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
        <Input
          isValid={emailState.isValid}
          type="text"
          name="username"
          onChange={getUserName}
        />

        <Input
          divClassName="pt-2"
          isValid={pwdState.isValid}
          type="password"
          name="password"
          onChange={getPwd}
        />
        {/* {if(formValid.inValid){
          btnShow : ''
        }else{
          btnShow : "diabled"
        }} */}
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
