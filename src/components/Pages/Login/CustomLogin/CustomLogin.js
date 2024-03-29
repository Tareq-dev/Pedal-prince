import axios from "axios";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const CustomLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [token] = useToken(user);
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://pedal-prince.onrender.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  return (
    <div className="flex justify-center py-20 m-3">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center w-full bg-black text-white py-2">
          Please Login
        </h2>
        <input
          className="border-2 px-3 py-2 mb-3 mt-5 w-full"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <p className="mx-2 mb-2 text-red-500">{error ? error.message : ""}</p>
        <div className="flex justify-center">
          <button className="bg-sky-400 w-full py-2">Login</button>
        </div>
        <p className="flex justify-end mt-2 text-gray-400 text-sm">
          <Link to="/reset">forgot password?</Link>
        </p>
        <p className="mt-1">Don't have an account ?</p>
        <p className="mt-1 text-blue-700 underline">
          <Link to="/register">Please Register .</Link>
        </p>
        <div className="text-center text-gray-400 mb-4">
          __________ or __________
          <p>Continue with </p>
        </div>
        <SocialLogin />
      </form>
    </div>
  );
};

export default CustomLogin;
