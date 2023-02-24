import Dropdown from "./dropdown"
import { MdSearch } from "react-icons/md"

const Search = () => {
    return (
        <div className="flex gap-x-2 items-center h-[70px]">
            {/* Category dropdown */}
            <Dropdown />

            {/*Search box */}
            <input type="search" name="search" id="search" className="search rounded-lg 
                w-[500px] h-[70px] p-3 outline-2 outline-none active:outline-orange-500 
                duration-300">
            </input>

            {/*Search button */}
            <button className="bg-orange-500 rounded-lg text-white text-lg px-5 h-[70px]">
                <MdSearch />
            </button>
        </div>
    )
}

export default Search