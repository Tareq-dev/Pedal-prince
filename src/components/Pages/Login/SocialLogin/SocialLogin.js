import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbuser, fbloading, fberror] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (error || fberror) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || fbloading) {
    return <p>Loading...</p>;
  }
  if (user || fbuser) {
    return navigate(from, { replace: true });
  }

  return (
    <div className="flex">
      <button
        onClick={() => signInWithGoogle()}
        className="flex align-center border p-1 rounded-lg border-sky-400"
      >
        <img className="w-6" src="https://i.ibb.co/5k5bzzG/google.png" alt="" />
        <p className="mx-2">Continue with Google</p>
      </button>
      <button
        onClick={() => signInWithFacebook()}
        className="flex align-center border p-1 rounded-lg mx-3 border-sky-400"
      >
        <img
          className="w-6"
          src="https://i.ibb.co/DwNRDFW/facebook.png"
          alt=""
        />
        <p className="mx-2">Continue with Facebook</p>
      </button>
    </div>
  );
};

export default SocialLogin;
