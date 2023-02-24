import Map from "./components/map";
import RestaurantCard from "./components/restaurantCard";
import SearchBar from "./components/searchbar";

const IndexPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 pt-20 px-32">
      {/* Searchbar */}
      <SearchBar />

      {/* Google Map */}
      <Map />

      {/* Food Car */}
      <RestaurantCard />
    </div>
  );
};

export default IndexPage;
