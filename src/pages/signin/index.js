import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import axios from "axios";

import { authLogin } from "../../redux/auth/authSlice";

export default function Signin() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const authAccount = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setLoginInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const env = process.env.NODE_ENV;
  const endpoint =
    env == "development"
      ? process.env.NEXT_PUBLIC_ENDPOINT_URL_DEV
      : process.env.NEXT_PUBLIC_ENDPOINT_URL_PROD;

  const handleSubmit = () => {
    try {
      console.log(env);
      console.log(endpoint);

      axios
        .post(endpoint + "/auth/signin", loginInput)
        .then((respons) => {
          console.log(respons.data);
          dispatch(authLogin(respons.data));

          if (respons.data) {
            router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(authAccount);
  }, [authAccount]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>JejakSiUser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-600">JejakSi</span>User
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="bg-green-700 border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  href="#"
                  className="border-2 text-green-500 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
          {/* Sign in section */}

          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello,</h2>
            <div className="bg-white border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">
              Fill up personal information and start journey with us.
            </p>
            <Link
              href="/signup"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign Up
            </Link>
          </div>
          {/* Sign up section */}
        </div>
      </main>
    </div>
  );
}
