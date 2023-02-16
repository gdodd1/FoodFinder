import Link from "next/link";
import SearchBar from "./components/searchbar";
import Map from "./components/map";
import RestaurantCard from "./components/restaurantCard";

const IndexPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 py-2 flex justify-end">
        <ul className="flex items-center">
          <li className="mr-4">
          <Link href="./components/Login" as = "button">
              Login
            </Link>
          </li>
          <li>
            <Link href="./components/SignUp" as = "button">
              Signup
            </Link>
          </li>
        </ul>
      </nav>

      {/* Search bar */}
      <div className="container mx-auto mt-8 mb-4 px-4">
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
