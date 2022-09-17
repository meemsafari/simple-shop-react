import React from 'react';
import './Navbar.css'
import NavItems from "./NavItems/NavItems";

const Navbar = (props) => {
    return(
        <header className={'navbar'}>
            <NavItems />
        </header>
    )
}

export default Navbar
