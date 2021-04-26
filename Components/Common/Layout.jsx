import Footer from "./Footer";
import Header from "./Header";
import HeadScript from "./HeadScript";
import FooterScript from "./FooterScript";

const Layout = ({ children }) => {
    return (
        <div>
            <HeadScript />

            <Header />
            {{ ...children }}
            <Footer />
            <FooterScript />
        </div>
    );
}

export default Layout;