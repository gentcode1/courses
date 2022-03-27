import React from 'react'

const Login = () => {
    return (
      <div className="h-screen flex flex-col   justify-around py-12  ">
        <div>
          <h3 className=" text-md font-bold py-4">Login</h3>
          <p className="py-4">
            {" "}
            by continuing you will be agreeing to our{" "}
            <span className="text-primary">terms</span> and{" "}
            <span className="text-primary">condition</span>
          </p>
        </div>
        <div className="flex">
          <button className=" mr-3 md:mr-6 lg:mr-9 flex ring ring-secondary rounded-full pl-2 pl-3 py-1 hover:ring-primary justify-center items-center">
            <svg
              class="h-6 w-6 text-black"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M17.788 5.108A9 9 0 1021 12h-8" />
            </svg>
            <p className="pl-2 text-sm"> continue with Google</p>
          </button>
          <button className=" flex ring ring-secondary rounded-full px-2 py-1 hover:ring-primary justify-center items-center">
            <svg
              class="h-8 w-8 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />{" "}
              <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
            </svg>
            <p className="pl-2 text-sm"> Continue with Apple</p>
          </button>
        </div>
        <div class="flex justify-evenly space-x-2 w-64 ">
          <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          <span class="flex-none uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        </div>
        <div className="flex flex-col">
          <input
            placeholder="username"
            className="pl-3 ring-1 my-4 ring-secondary flex rounded-sm justify-center py-2 w-80 hover:ring-gray-500"
          />
          <input
            placeholder="password"
            className="pl-3 ring-1 my-4 ring-secondary flex rounded-sm justify-center py-2 w-80 hover:ring-gray-500"
          />
          <button className="bg-primary text-white text-md font-semibold w-80 py-4 my-2 flex justify-center items-center rounded-full hover:bg-secondary hover:text-primary">
            Login
          </button>
        </div>
        <div>
          <p className="text-sm my-4">
            {" "}
            forget your{" "}
            <span className="text-primary hover:underline">
              username
            </span> or{" "}
            <span className="text-primary hover:underline">password</span>
          </p>
          <p className="text-sm my-2">
            New to webpost{" "}
            <span className="text-primary hover:underline">SIGN UP</span>
          </p>
        </div>
      </div>
    );
}

export default Login
