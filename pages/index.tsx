import Map from "./components/map";
import RestaurantCard from "./components/restaurantCard";
import SearchBar from "./components/search";

const IndexPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Google Map */}
      <div className="container mx-auto px-4 mb-4 pt-20">
        <SearchBar />
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
