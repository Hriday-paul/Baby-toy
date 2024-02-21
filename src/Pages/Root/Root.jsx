import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../../component/Shared/Navbar/Navbar";
import Footer from "../../component/Shared/Footer/Footer";


const Root = () => {

    const dark = (isLight) => {
        if (isLight) {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }

    return (
        <div>
            <Navbar dark={dark}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default Root;