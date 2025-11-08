import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const toggleSingInForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleFormSubmit = () => {
    const message = validateForm(
      isSigninForm,
      // fullname.current.value,
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);
    if (message) return;

    // Signin and SignUp Logic
    if (!isSigninForm) {
      // Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              const errorMessage = error.message;
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Signin logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          src={BACKGROUND}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleFormSubmit}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage && (
          <p className="text-red-500 font-bold">{errorMessage}</p>
        )}
        <p className="py-4 cursor-pointer" onClick={() => toggleSingInForm()}>
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already an user.! Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
