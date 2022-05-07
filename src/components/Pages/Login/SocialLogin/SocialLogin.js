import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";
import Loading from './../../Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbuser, fbloading, fberror] =
    useSignInWithFacebook(auth);
    const [token] = useToken(user || fbuser);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading || fbloading) {
    return <Loading />;
  }
  
  if (token) {
   navigate(from, { replace: true });
  }

  return (
    <div>
      <p className="text-red-500">{error || fberror ? error.message : ""}</p>
      <div className="flex justify-between mt-5">
        <button
          onClick={() => signInWithGoogle()}
          className="flex align-center border p-1 rounded-lg border-sky-400"
        >
          <img
            className="w-6"
            src="https://i.ibb.co/5k5bzzG/google.png"
            alt=""
          />
          <p className="mx-2">Google</p>
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
          <p className="mx-2">Facebook</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
