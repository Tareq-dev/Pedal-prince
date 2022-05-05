import React from "react";

const Team = () => {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} className="py-5">
      <div className="container max-w-7xl mx-auto px-4" style={{ cursor: "auto" }}>
      <h1 className="text-center text-3xl mt-8 mb-8">Our Team</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-5 px-4">
            <div className="px-6">
              <img
                alt="John Doe"
                src="https://i.ibb.co/jTJvwCK/trk1.png"
                className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
              />
              <div className="pt-6 text-center">
                <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                  John Doe
                </h1>
                <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-2">
                  CEO
                </p>
              </div>
              <div className="flex justify-center">
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/PGtRMFj/facebook.png" alt="" /></a>
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/7SrYPLF/instagram.png" alt="" /></a>
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/bbFHQgR/LinkedIn.png" alt="" /></a>
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
            style={{ cursor: "auto" }}
          >
            <div className="px-6" style={{ cursor: "auto" }}>
              <img
                alt="Jack Wales"
                src="https://i.ibb.co/jTJvwCK/trk1.png"
                className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                style={{ cursor: "auto" }}
              />
              <div className="pt-6 text-center">
                <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                  Jack Wales
                </h1>
                <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  CMO
                </p>
                <div className="flex justify-center">
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/PGtRMFj/facebook.png" alt="" /></a>
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/7SrYPLF/instagram.png" alt="" /></a>
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/bbFHQgR/LinkedIn.png" alt="" /></a>
              </div>
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
            style={{ cursor: "auto" }}
          >
            <div className="px-6" style={{ cursor: "auto" }}>
              <img
                alt="George Hoyt"
                src="https://i.ibb.co/jTJvwCK/trk1.png"
                className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
                style={{ cursor: "auto" }}
              />
              <div className="pt-6 text-center">
                <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                  George Hoyt
                </h1>
                <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  Software Engineer
                </p>
                <div className="flex justify-center">
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/PGtRMFj/facebook.png" alt="" /></a>
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/7SrYPLF/instagram.png" alt="" /></a>
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/bbFHQgR/LinkedIn.png" alt="" /></a>
              </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="Jenna Kardi"
                src="https://i.ibb.co/jTJvwCK/trk1.png"
                className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"
              />
              <div className="pt-6 text-center">
                <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                  Isabella Bolt
                </h1>
                <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  Human Resources
                </p>
                <div className="flex justify-center">
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/PGtRMFj/facebook.png" alt="" /></a>
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/7SrYPLF/instagram.png" alt="" /></a>
              <a href="/fa"><img className="mx-2 w-9" src="https://i.ibb.co/bbFHQgR/LinkedIn.png" alt="" /></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
