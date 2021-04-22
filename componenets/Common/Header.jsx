import Link from "next/link";

const Header = () => {
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
                                    <a href="#top" className="navactive   text-uppercase">restorents</a>
                                </Link>
                            </li>
                            <li><a className="color_animation text-uppercase" href="#story">ABOUT</a></li>
                            <li><a className="color_animation text-uppercase" href="#pricing">PRICING</a></li>
                            <li><a className="color_animation text-uppercase" href="#beer">BEER</a></li>
                            <li><a className="color_animation text-uppercase" href="#bread">BREAD</a></li>
                            <li><a className="color_animation text-uppercase" href="#featured">FEATURED</a></li>
                            <li><a className="color_animation text-uppercase" href="#reservation">RESERVATION</a></li>
                            <li><a className="color_animation text-uppercase" href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;