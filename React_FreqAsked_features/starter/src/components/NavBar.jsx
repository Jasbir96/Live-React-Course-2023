// rfce
import React from 'react';
import Logo from "../download.png";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div className="border
      flex items-center
      space-x-8
      pl-3 py-4
       ">
            <img src={Logo}
                className="w-[50px]"
            />
            <Link  to ="/" className="font-bold 
            text-xl
            text-blue-400
            "
            >Movies</Link>
            <Link  to ="/fav" className="font-bold
            text-xl
            text-blue-400
            
            "> Favourites</Link>
        </div>
    )
}

export default NavBar