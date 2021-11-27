import React from 'react';
import { NavLink, } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import Cart from '../Cart/Cart';
import Slider from '../Home/Slider/Slider';
import './Header.css'

const Header = () => {
    const { user, logout, signInUsingGoogle } = useAuth();

    return (

        <div>
            <nav class="navbar navbar-expand-lg  fixed-top navbar-dark  bg-dark">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">               <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav text-white mx-2 me-auto mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="text-white nav-item" to="/home">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="text-white nav-item" to="/services">Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="text-white nav-item" to="/about">About</NavLink>
                            </li>


                        </ul>

                        <div class="nav-item">
                            <span className="text-white"><img className="rounded-circle" width="40px" src={user.photoURL} alt="" /> {user.displayName}
                            </span>
                            {
                                user.email ?
                                    <div>


                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle"
                                                // role="button" 
                                                id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"
                                            >
                                                My profile
                                            </button>  <button className="header btn border-rounded text-white btn-danger" onClick={logout}>  Log out</button>

                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><NavLink class="dropdown-item nav-item" to="/myOrder" >My order</NavLink></li>
                                                <li><NavLink class="nav-item dropdown-item" to="/manageOrder">Manage all order</NavLink></li>
                                                <li><NavLink class="nav-item dropdown-item" to="/addmenu">Add menu</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <button className="btn btn-danger m-2" onClick={signInUsingGoogle} ><i class="fab fa-google"></i>  Google Sign In</button>
                            }
                        </div>
                    </div>
                </div>

            </nav>
            <div>
                <Slider></Slider>
            </div>
        </div>


    )
}

export default Header;
