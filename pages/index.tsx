import Link from "next/link";
import Map from "./components/Map";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/Search";

import React from "react";
const IndexPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 py-2 flex justify-end">    
        <div className="flex space-x-4 items-center">
          {/* <Link href="./components/login" className="text-gray-800 text-sm">LOGIN</Link> */}
        <Link href="./components/login" className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">LOGIN</Link>
        </div>
      </nav>
       
      {/* Google Map */}
      <div className="container mx-auto px-4 mb-4">
        <SearchBar />
      </div>
      {/* Google Map */}
      <div className="container mx-auto px-4 mb-4">
        <Map />
      </div>

      {/* Food Car */}
      <div className="container mx-auto px-4">
        <RestaurantCard />
      </div>

     
    </div>
  );
};

export default IndexPage;
