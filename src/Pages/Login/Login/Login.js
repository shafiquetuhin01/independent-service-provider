import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";
const Login = () => {
  const [login, setLogin] = useState(true);

  const [confirmError, setConfirmError] = useState("");

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  // for signin with github
  const provider = new GithubAuthProvider();
  const auth = getAuth();
  const gitSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
    signInWithRedirect(auth, provider);
  };

  //for creating user
  const [
    createUserWithEmailAndPassword,
    createUser,
    creteLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);

  //for using login page
  const [signInWithEmailAndPassword, user, loading, email] =
    useSignInWithEmailAndPassword(auth);

  const [loginUser, loginloading, loginerror] = useAuthState(auth);
  // input value to form
  const handleFormInput = (event) => {
    userInfo[event.target.name] = event.target.value;
  };
  // email varify
  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email varification sent");
    });
  };
  // for password reset
  const handlePassReset = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("email sent");
    });
  };
  // for submit button
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!login) {
      if (userInfo.password !== userInfo.confirmPass) {
        setConfirmError("password can not match");
        return;
      }

      setConfirmError("");
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    } else {
      signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
  };

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loginUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <h2>{login ? "Login" : "Sign Up"}</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onBlur={(event) => handleFormInput(event)}
            type="text"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={(event) => handleFormInput(event)}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        {!login && (
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              onBlur={(event) => handleFormInput(event)}
              type="password"
              name="confirmPass"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        )}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={() => setLogin(!login)}
          />
          {login ? (
            <label className="form-check-label" htmlFor="exampleCheck1">
              If you are new user please select the checque box for{" "}
              <span className="text-primary fw-bold">Sign Up</span>.
            </label>
          ) : (
            <div>
              <h6>Please Sign Up</h6>
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          {login ? (
            <div>
              <h6>Login</h6>
            </div>
          ) : (
            "Sign Up"
          )}
        </button>
        <button
          onClick={handlePassReset}
          className="btn btn-primary btn-lg p-1 ms-3"
        >
          Reset Password
        </button>
        <p className="text-danger">{confirmError}</p>
        {createError && <p className="text-danger">{createError.message}</p>}
        {createUser &&
          varifyEmail()(
            <p className="text-success">Service Created Successfully</p>
          )}
        {user && <p className="text-success">Service Login Successfully</p>}
        <div className="d-flex justify-content-center mt-5">
          <button
            onClick={gitSignIn}
            className="btn btn-secondary btn-lg text-center"
          >
            Signin with github
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
