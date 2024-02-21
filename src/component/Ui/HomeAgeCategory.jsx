import { Link } from "react-router-dom";


const HomeAgeCategory = () => {
    return (
        <div className="py-10">
            <div>
                <h4 className="text-3xl font-nunito font-bold text-center dark:text-white">Shop By Age</h4>
                <p className="text-lg font-nunito text-[#00C4CC] text-center">Our Collections</p>
            </div>
            <div className="flex flex-row flex-wrap gap-x-5 justify-center py-10">
                <Link to='/shop/baby'>
                    <img src="https://i.ibb.co/fkpGFKZ/lg-thumb-1.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                    <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">For Baby</h4>
                </Link>
                <Link to='/shop/1-2'>
                    <img src="https://i.ibb.co/CzvL2KL/lg-thumb-2.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                    <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">Age 1-2</h4>
                </Link>
                <Link to='/shop/3-5'>
                    <img src="https://i.ibb.co/M53Xw46/lg-thumb-3.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                    <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">Age 3-5</h4>
                </Link>
                <Link to='/shop/6-8'>
                    <img src="https://i.ibb.co/L6846ny/lg-thumb-4.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                    <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">Age 6-8</h4>
                </Link>
                <Link to='/shop/9+'>
                    <img src="https://i.ibb.co/CvWv0n6/lg-thumb-5.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                    <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">Age 9+</h4>
                </Link>
            </div>
        </div>
    );
};

export default HomeAgeCategory;