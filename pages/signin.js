import React, { useState } from "react";
import Image from "next/image";
import { localStorageService, useLocal } from "@/controller/localStorage";
import { useRouter } from "next/router";
import { employeeService } from "@/services/employeeService";

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const handleSignIn = (event) => {
    event.preventDefault();
    employeeService
      .loginEmployee({ username, password })
      .then((res) => {
        localStorageService.setUserInfo(res.data.data.token);
        router.push("/");
        setIsLogin(false);
      })
      .catch((err) => {
        setIsLogin(true);
      });
  };
  return (
    <div className="relative">
      <div className="h-screen">
        <div className="absolute inset-0 -z-10 ">
          <Image
            src="/img/city.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <div className=" w-96 signin-glass">
            <h1 className="text-center text-white text-2xl ">Sign in</h1>
            <form
              onSubmit={(e) => {
                handleSignIn(e);
              }}
            >
              <div class="mb-6">
                <label
                  for="username"
                  class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <p
                className={
                  isLogin ? " text-sm text-center  font-bold my-3" : "hidden"
                }
              >
                Wrong username or password !!!
              </p>
              <button
                type="submit"
                class="text-white mt-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div>
        <span>Username</span>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <span>Password</span>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div> */}
    </div>
  );
};

export default SignIn;
