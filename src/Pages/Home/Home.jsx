import HomeAgeCategory from "../../component/Ui/HomeAgeCategory";
import img1 from '../../assets/1.webp'
import img2 from '../../assets/2.webp'
import SwiperComponent from "../../component/Ui/SwiperComponent";
import TopRatedToy from "../../component/Ui/TopRatedToy";

const Home = () => {
    return (
        <div className=" dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <SwiperComponent></SwiperComponent>
                <HomeAgeCategory></HomeAgeCategory>
                <div className="flex flex-col md:flex-row gap-x-5 gap-y-5  items-center justify-center py-10">
                    <div className="overflow-hidden">
                        <img className="hover:scale-110 duration-200 mx-auto" src={img1} alt="image" />
                    </div>
                    <div className="overflow-hidden">
                        <img className="hover:scale-105 duration-200 text-center mx-auto" src={img2} alt="image" />
                    </div>

                </div>
                <TopRatedToy></TopRatedToy>
            </div>
        </div>
    );
};

export default Home;