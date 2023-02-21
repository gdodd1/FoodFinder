import Map from "./components/Map";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/Search";

import React from "react";
const IndexPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Google Map */}
      <div className="container mx-auto px-4 mb-4">
        {/* <SearchBar /> */}
      </div>

      {/* Google Map */}
      <div className="container mx-auto px-4 mb-4">
        <Map />
      </div>

      {/* Food Car */}
      <div className="container mx-auto px-4 mb-4">
        <RestaurantCard />
      </div>
    </div>
  );
};

export default IndexPage;
