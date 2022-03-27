import React from 'react'
import logo from '../../Assets/log.jpg'
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    return (
      <div className="py-2 px-8 w-full  flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-16 h-16" />
        </div>
        <div className=""><SearchBar/></div>
        <div className="flex ">
          <button className="ring-1 ring-primary text-primary px-8 mx-1 rounded-full  hover:bg-gray-100">Log In</button>
          <button className="bg-primary text-white rounded-full px-8 mx-1 hover:bg-blue-600">Sign Up</button>
          <div className="flex justify-between items-center">
            <svg
              class="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              class="h-5 w-5 text-gray-600"
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
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    );
}

export default Navbar
