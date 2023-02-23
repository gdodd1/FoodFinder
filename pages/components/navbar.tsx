import Link from 'next/link'
import React from 'react'
import Button from './button'
import { MdFastfood } from 'react-icons/md'

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ]

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Site Logo and Title */}
        <div className="font-bold text-2x1 cursor-pointer flex items-center text-gray-800">
          <span className="text-3x1 text-orange-500 mr-1 pb-1">
            <MdFastfood />
          </span>
          FoodFinder
        </div>

        {/* Menu Icon Work in Progress */}
        <div className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden">

        </div>

        {/* Navlinks */}
        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto 
        z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          {
            Links.map((Link) => (
              <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a href={Link.link} className="text-gray-800 hover:text-gray-400 duration-500">{Link.name}</a>
              </li>
            ))
          }

          {/* Buttons */}
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar