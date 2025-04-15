import NavItem from "../NavItem"
import './index.css'
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header>
        <nav className="navbar">

            <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                <NavItem />
            </ul>

            <button className="btn-mobile" onClick={() => {setOpenMenu(!openMenu)}}>
                {openMenu ? <FaXmark /> : <FaBars />} 
            </button>
        </nav>
    </header>
  )
}

export default NavBar
