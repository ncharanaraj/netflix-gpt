import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSigninForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 mx-auto p-12 right-0 left-0 my-36 bg-black text-white rounded-sm bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded-sm bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-sm bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-sm bg-gray-600"
        />
        <button type="submit" className="p-2 my-4 bg-red-600 w-full rounded-sm">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSigninForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Signed Up Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
