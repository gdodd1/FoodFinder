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
        <ul className="flex items-center">
          <li className="mr-4">
            <Link href="./components/Login">Login</Link>
          </li>
          <li>
            <Link href="./components/SignUp">Signup</Link>
          </li>
        </ul>
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
