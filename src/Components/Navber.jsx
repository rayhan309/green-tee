import { ShoppingCart, TableOfContents, X } from "lucide-react";
import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { CardsData } from "../App";

const Navber = () => {

    // add data sheare 
    const { addData } = use(CardsData)
    // console.log(addData)

    // menu state
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-[#15803D]">
            <nav className="flex justify-between items-center px-5 inter shadow-xl py-3.5">
                <span onClick={() => setOpen(!open)} className="flex gap-2 items-center">
                    {
                        open ? <X className="block md:hidden pt-2 text-white"></X> : <TableOfContents className="block md:hidden text-white"></TableOfContents>
                    }
                    <h2 className="text-2xl text-white font-bold">Green Earth</h2>
                </span>

                <ul className={`absolute -top-40 bg-[#0ec050] p-2 duration-1000 rounded-md z-40 md:hidden ${open && 'top-14'}`}>
                    <li className="text-white mt-2 font-normal"><Link to="/about">About</Link></li>
                    <li className="text-white font-medium"><Link to="/home">Home</Link></li>
                    <li className="text-white mt-2 font-normal"><Link to="/Gallery">Gallery</Link></li>
                    <li className="text-white mt-2 font-normal"><Link to="/contact">Plant a Tree</Link></li>
                </ul>

                <div className="hidden md:block">
                    <ul className="flex gap-5">
                        <li className="text-white font-medium"><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/home">Home</NavLink></li>
                        <li className="text-white font-medium"><NavLink to="/about">About</NavLink></li>
                        <li className="text-white font-medium"><NavLink to="/gallery">Gallery</NavLink></li>
                        <li className="text-white font-medium"><NavLink to="/plants">Plant a Tree</NavLink></li>
                        <li className="text-white font-medium"><NavLink to="/addCards">
                            <div className="absolute"><ShoppingCart /><span className="relative top-[-35px] -right-5">{addData.length}</span></div>
                        </NavLink></li>
                    </ul>
                </div>

                <button className="cursor-pointer text-[#15803D] font-medium bg-[#FACC15] py-2 px-4 rounded-4xl">Plant a Tree</button>
            </nav>
        </div>
    );
};

export default Navber;