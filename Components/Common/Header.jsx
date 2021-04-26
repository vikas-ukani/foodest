import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        const cartItems = localStorage.getItem('cartItems') || []
        setCartItems(cartItems)
    }, [])


    return (
        <nav className="navbar navbar-default " role="navigation">
            <div className="container">
                <div className="row">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link href="/">
                            <a className="navbar-brand">Restaurant</a>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse  " id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav main-nav  clear navbar-right ">

                            <li>
                                <Link href="home">
                                    <a href="#top" className="color_animation navactive font-white text-uppercase"><b>restorents</b></a>
                                </Link>
                            </li>
                            <li><a className="color_animation text-uppercase" href="#story">ABOUT</a></li>
                            <li><a className="color_animation text-uppercase" href="#pricing">PRICING</a></li>
                            <li><a className="color_animation text-uppercase" href="#beer">BEER</a></li>
                            <li><a className="color_animation text-uppercase" href="#bread">BREAD</a></li>
                            <li><a className="color_animation text-uppercase" href="#featured">FEATURED</a></li>
                            <li><a className="color_animation text-uppercase" href="#reservation">RESERVATION</a></li>
                            <li className="">
                                <a className="color_animation pull-right" style={{ padding: '0px ' }} >
                                    <i className="fa-3x fa fa-shopping-cart"></i>
                                    <span className="badge badge-info ">
                                        {cartItems.length}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;