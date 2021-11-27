import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div className="footers text-center p-4">
            <div className="container footer row d-flax text-start ">
                <div className="  col-lg-4">
                    <h3>About Us</h3>
                    <ul>
                        <li>
                            <Link to="/home">Company profile</Link>
                        </li>
                        <li>
                            <Link to="/home">Mission, vision, and values</Link>
                        </li>
                        <li>
                            <Link to="/home">Message from Chairperson</Link>
                        </li>
                        <li>
                            <Link to="/home">Message from Managing Director</Link>
                        </li>
                        <li>
                            <Link to="/home">Message from DMD & CEO</Link>
                        </li>
                    </ul>
                </div>
                <div className=" col-12 col-lg-4">
                    <h3>Products</h3>
                    <ul>
                        <li>
                            <Link to="/home">Products by trade name</Link>
                        </li>
                        <li>
                            <Link to="/home">Products by generic name</Link>
                        </li>
                        <li>
                            <Link to="/home">Products by thereapeutic class</Link>
                        </li>
                        <li>
                            <Link to="/home">Download all product list</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4">
                    <h3>Global Operation</h3>
                    <ul>
                        <li>
                            <Link to="/home">Current operation</Link>
                        </li>
                        <li>
                            <Link to="/home">Registration ongoing</Link>
                        </li>
                        <li>
                            <Link to="/home">Contract manufacturing</Link>
                        </li>
                        <li>
                            <Link to="/home">Photo gallery</Link>
                        </li>
                        <li>
                            <Link to="/home">Virtual tours</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <span className="text-white text-center">© 2021. Bangladesh tour All rights reserved.</span>
        </div>
    );
};

export default Footer;