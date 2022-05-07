import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link,  useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/");
  }
  return (
    <div className="flex justify-center py-20 m-3">
      <div>
        <h2 className="text-center w-full bg-black text-white py-2">
          Please Register
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
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="password"
          placeholder="Confirm password"
          value={password}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <p>{error ? error.message : ""}</p>
        <div className="flex justify-center">
          <button
            className="bg-sky-400 w-full py-2"
            onClick={() =>
              createUserWithEmailAndPassword(email, password, confirmPassword)
            }
          >
            Register
          </button>
        </div>
        <p className="mt-1">Already have an account ?</p>
        <p className="mt-1 text-blue-700 underline">
          <Link to="/login">Sign In .</Link>{" "}
        </p>
        <div className="text-center text-gray-400 mb-4">
          __________ or __________
          <p>Continue with</p>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
