import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center mt-5 pt-5 flex justify-center">
        <div className="border w-1/2 p-2">
          <h3 className="text-danger mt-2 text-xl text-red-500">Your Email is not verified!!</h3>
          <h5 className="text-success mt-2">
            Please Verify your email address
          </h5>
          <button
            className="bg-sky-300 rounded-lg px-5 py-1 mt-5"
            onClick={async () => {
              await sendEmailVerification();
              toast("Sent email");
            }}
          >
            Send Verification Email Again
          </button>
          <ToastContainer />
        </div>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
