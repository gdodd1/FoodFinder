import { useState } from "react"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const dropdown = () => {
    const categories = [
        "All",
        "Food",
        "Fast-Food",
        "Restaurants",
    ]

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("")

    const menuTrigger = (item: string) => {
        if (item !== selected) {
            setSelected(item)
            setOpen(false)
        }
    }

    return (
        <div className="relative flex flex-col items-center w-[150px] rounded-lg">
            {/* Dropdown button */}
            <button onClick={() => setOpen(!open)} className="bg-white p-4 w-full flex 
                items-center justify-between rounded-lg tracking-wide border-2 border-transparent
                active:border-orange-500 duration-300 active:text-orange-500">
                {selected ? selected : "Categories"}
                {!open ? <MdArrowDropDown className="h-8" /> : <MdArrowDropUp className="h-8" />}
            </button>

            {/* Category selector */}
            <ul className={`bg-white absolute top-20 flex flex-col items-start rounded-lg
                            p-2 w-full ${open ? 'max-h-32' : 'max-h-0 p-0 hidden'}`}>
                {categories.map((item) =>
                    <li onClick={() => menuTrigger(item)} key={item}
                        className="flex w-full justify-between hover:bg-gray-100 cursor-pointer 
                            rounded-r-lg border-l-transparent hover:border-l-orange-500 border-l-4 p-2
                            active:text-orange-500 duration-150">
                        {item}
                    </li>)}
            </ul>
        </div>
    )
}

export default dropdown