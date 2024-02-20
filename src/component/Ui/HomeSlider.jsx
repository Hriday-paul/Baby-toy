import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import b1 from '../../assets/banner1.webp'
import b2 from '../../assets/banner2.webp'
import { Link } from "react-router-dom";

export default function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };
    return (
        <Slider {...settings}>
            <div className="dark:bg-[#1D232A]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gpa-x-0 md:gap-x-5 items-center justify-between min-h-[calc(100vh-140px)] dark:bg-[#1D232A]">
                    <div className="lg:pl-10 text-center md:text-left mt-10">
                        <span className="px-2 md:px-5 lg:px-7 py-1 md:py-3 lg:py-5 bg-[#00C4CC] text-white text-lg md:text-xl lg:text-2xl font-nunito ">New arrival</span>
                        <h1 className="text-6xl md:text-7xl font-extrabold font-nunito text-black mt-8 mb-3 dark:text-white">One Box Toy</h1>
                        <p className="text-gray-600 text-xl dark:text-gray-400">Flat 10% off on order Above 29.99 $</p>
                        <Link to='/shop' className="relative mt-5 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Shop Now</span>
                        </Link>
                    </div>
                    <div className="mx-auto">
                        <img src={b1} className="h-72 md:h-80 lg:h-96"></img>
                    </div>
                </div>
            </div>
            <div className="dark:bg-[#1D232A]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gpa-x-0 md:gap-x-5 items-center justify-between min-h-[calc(100vh-140px)] dark:bg-[#1D232A]">
                    <div className="lg:pl-10 text-center md:text-left mt-10">
                        <span className="px-2 md:px-5 lg:px-7 py-1 md:py-3 lg:py-5 bg-[#00C4CC] text-white text-lg md:text-xl lg:text-2xl font-nunito ">Big Discount</span>
                        <h1 className="text-6xl md:text-7xl font-extrabold font-nunito text-black mt-8 mb-3 dark:text-white">Kids Offer</h1>
                        <p className="text-gray-600 text-xl dark:text-gray-400">Flat 10% off on order Above 29.99 $</p>
                        <Link to='/shop' className="relative mt-5 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Shop Now</span>
                        </Link>
                    </div>
                    <div className="mx-auto">
                        <img src={b2} className="h-72 md:h-80 lg:h-96"></img>
                    </div>
                </div>
            </div>

        </Slider>
    );
}