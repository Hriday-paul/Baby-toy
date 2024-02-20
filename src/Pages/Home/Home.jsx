import HomeAgeCategory from "../../component/Ui/HomeAgeCategory";
import HomeSlider from "../../component/Ui/HomeSlider";
import img1 from '../../assets/1.webp'
import img2 from '../../assets/2.webp'

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <HomeSlider></HomeSlider>
            <HomeAgeCategory></HomeAgeCategory>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center my-10">
                <div className="overflow-hidden">
                    <img className="hover:scale-105 duration-200 mx-auto" src={img1} alt="image" />
                </div>
                <div className="overflow-hidden">
                    <img className="hover:scale-105 duration-200 text-center mx-auto" src={img2} alt="image" />
                </div>

            </div>
        </div>
    );
};

export default Home;