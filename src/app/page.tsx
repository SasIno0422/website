import React from "react";
import Link from "next/link";

export default function Login() {
  return (


    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden shadow-2xl">
      <body className="bg-pasay-image bg-no-repeat bg-center min-h-screen bg-cover">
      </body>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl shadow-2xl">
        <div className="flex justify-between">
          <img className="object-cover h-20 w-20" src="/AduLogo.png" alt="AduLogo" />
          <img className="object-cover h-20 w-20" src="/BarangayLogo.png" alt="BrgyLogo" />
        </div>
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              type="Username"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 shadow-md"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 shadow-md"
            />
          </div>

          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forgot Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 shadow-xl">
              <Link href="./user-login">Login</Link>
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            <Link href="./register">Sign up</Link>
          </a>
        </p>
      </div>
    </div>
  );
}

