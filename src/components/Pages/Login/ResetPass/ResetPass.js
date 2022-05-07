import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, error] =
    useSendPasswordResetEmail(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-28 m-3">
      <div className="flex-col">
        <input
          className="border-2 border-black px-3 py-1 rounded-xl"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="px-3 py-1 mx-2 rounded-xl bg-sky-400"
          onClick={async () => {
            await sendPasswordResetEmail(email);
            toast("Sent email");
          }}
        >
          Reset password
        </button>
      </div>
    </div>
  );
};

export default ResetPass;
