import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { PiNoteLight, PiNotepadLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className="nav_left">
                <span id="back"><NavLink to={'/home'}><BiArrowBack /></NavLink></span>

                <div className="logo">
                    <NavLink to={"/"}>
                        <figure><img src="../../img/Logo.png" alt="logo" /></figure>
                        <ul>
                            <li>Walk-In</li>
                            <li>Coca coffeetalk</li>
                        </ul>
                    </NavLink>
                </div>
            </div>

            <div className='nav_right'>
                <ul className='links'>
                    <li>
                        <NavLink><span><GoHome /></span><span>Bosh sahifa</span></NavLink>
                    </li>
                    <li>
                        <NavLink><span><PiNoteLight /></span><span>Joylar</span></NavLink>
                    </li>
                    <li>
                        <NavLink><span><PiNotepadLight /></span><span>Buyurtmalar</span></NavLink>
                    </li>
                </ul>

                <ul>
                    <li>10:53:00  26/02/2023</li>
                    <li>
                        <figure><img src="../../img/Profile.png" alt="profile" /></figure>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;