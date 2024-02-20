

const HomeAgeCategory = () => {
    return (
        <div className="flex flex-row flex-wrap gap-x-5 justify-center my-20 dark:bg-[#1D232A]">
            <div>
                <img src="https://i.ibb.co/fkpGFKZ/lg-thumb-1.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">For Baby</h4>
            </div>
            <div>
                <img src="https://i.ibb.co/CzvL2KL/lg-thumb-2.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">Age 1-2</h4>
            </div>
            <div>
                <img src="https://i.ibb.co/M53Xw46/lg-thumb-3.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">Age 3-5</h4>
            </div>
            <div>
                <img src="https://i.ibb.co/L6846ny/lg-thumb-4.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">Age 6-8</h4>
            </div>
            <div>
                <img src="https://i.ibb.co/CvWv0n6/lg-thumb-5.webp" className="hover:opacity-70 hover:rotate-6 duration-500" alt="child img" />
                <h4 className="text-center text-xl font-nunito mt-2 dark:text-white">Age 9+</h4>
            </div>
        </div>
    );
};

export default HomeAgeCategory;