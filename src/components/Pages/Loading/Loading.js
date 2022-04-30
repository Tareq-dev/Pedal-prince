import React from "react";

const Loading = () => {
  return (
    <div  style={{ height: "500px" }}
    className="w-full flex aligns-center justify-center"
  >
      <div class="flex justify-center items-center space-x-2">
        <div
          class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
