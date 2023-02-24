import Map from "./components/map";
import RestaurantCard from "./components/restaurantCard";
import Dropdown from "./components/dropdown";

const IndexPage = () => {
  return (
    <div className="bg-gray-100 pt-20 px-32">
      {/* Searchbar */}
      <div>
        <Dropdown />
      </div>

      {/* Google Map */}
      <Map />

      {/* Food Car */}
      <RestaurantCard />
    </div>
  );
};

export default IndexPage;
