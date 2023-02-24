import Map from "./components/map";
import RestaurantCard from "./components/restaurantCard";
import SearchBar from "./components/search";

const IndexPage = () => {
  return (
    <div className="bg-gray-100 pt-20 px-32">
      {/* Google Map */}
      <SearchBar />

      {/* Google Map */}
      <Map />

      {/* Food Car */}
      <RestaurantCard />
    </div>
  );
};

export default IndexPage;
