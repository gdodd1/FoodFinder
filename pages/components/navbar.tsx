
import React, { Component } from 'react'
import Link from "next/link";

export default class navbar extends Component {
  render() {
    return (
  
<header>
  <nav>
    <div className="">
      <div className="flex justify-between h-16 px-10 shadow items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">FoodFinder</h1>
          <div className="hidden md:flex justify-around space-x-4">
            <a href="#" className="hover:text-indigo-600 text-gray-700">Home</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">About</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Service</a>
            <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
</header>
    )
  }
}
