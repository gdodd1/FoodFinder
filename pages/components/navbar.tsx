import Link from 'next/link'
import Button from './button'
import { useState } from 'react'
import { MdFastfood, MdMenu, MdClose } from 'react-icons/md'

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/service" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ]

  const [open, setOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Site Logo and Title */}
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-orange-500 mr-1 pb-3">
            <MdFastfood />
          </span>
          FoodFinder
        </div>

        {/* Hamburger Menu */}
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {open ? <MdClose /> : <MdMenu />}
        </div>

        {/* Navlinks */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto 
        z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
        ${open ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
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