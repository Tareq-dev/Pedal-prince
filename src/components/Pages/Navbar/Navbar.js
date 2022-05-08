import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <header className="text-white body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/">
            <img
              className="w-48"
              src="https://i.ibb.co/417bkjk/logo-text.png"
              alt=""
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-amber-400" to="inventory">
              Inventory
            </Link>
            <Link className="mr-5 hover:text-amber-400" to="/blog">
              Blog
            </Link>
            <Link className="mr-5 hover:text-amber-400" to="/factory">
              Factory
            </Link>
            {user ? (
              <>
                <Link
                  className="mr-5 hover:text-amber-400"
                  as={Link}
                  to="/addItem"
                >
                  Add Item
                </Link>

                <Link
                  className="mr-5 hover:text-amber-400"
                  as={Link}
                  to="/manage"
                >
                  Manage Item
                </Link>
                <Link
                  className="mr-5 hover:text-amber-400"
                  as={Link}
                  to="/myItem"
                >
                  My Item
                </Link>
                <Link
                  className="mr-5 hover:text-amber-400"
                  as={Link}
                  to="/statistic"
                >
                  Statistic
                </Link>
              </>
            ) : (
              ""
            )}
            {user ? (
              ""
            ) : (
              <Link
                className="mr-5 hover:text-amber-400"
                to="/register"
              >
                Register
              </Link>
            )}
            {user ? (
              ""
            ) : (
              <Link className="mr-5 hover:text-amber-400" as={Link} to="/login">
                Login
              </Link>
            )}
          </nav>
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="inline-flex items-center bg-sky-400 border-0 py-1 px-3 focus:outline-none hover:bg-amber-400 hover:text-black rounded text-base mt-4 md:mt-0"
            >
              Sign Out
            </button>
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
