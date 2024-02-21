import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { Rate } from "antd";
import { useContext } from "react";
import { authContext } from "../../../ContextHandler/Authonicate/Authonicate";
import UseAxiosPrivate from "../../../Hooks/UseAxiosPrivate/UseAxiosPrivate";

const SingleToy = ({ toy }) => {
    const { userInfo } = useContext(authContext);
    const axiosPrivate = UseAxiosPrivate();
    const navig = useNavigate();

    console.log(toy.rating);


    const handleAddCart = (details) => {
        if (userInfo) {
            axiosPrivate.post(`/addCart`, { email: userInfo.email, ...details })
                .then(() => {
                    toast.success('Add to cart Successfully')
                })
                .catch(() => {
                    toast.error('Add cart failed, try again!')
                })
        }
        else {
            navig("/login")
        }
    }

    return (
        <div className="flex justify-center">
            <div className="group relative border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border shadow-md bg-white dark:bg-gray-800">
                <Link to={`/toy/${toy?.ageType}/${toy._id}`} className="relative mx-8 mt-3 flex justify-center h-32 md:h-48 lg:h-48 overflow-hidden rounded-xl">
                    <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={toy?.img} alt="toy image" />
                    <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src={toy?.img} alt="toy image" />

                </Link>
                <div className="mt-1 px-5 pb-5">
                    <Link to={`/toy/${toy?.ageType}/${toy._id}`}>
                        <h5 className="text-base md:text-lg font-medium font-sans tracking-tight truncate dark:text-white">{toy?.name}</h5>
                    </Link>
                    <div className="mb-3 flex items-center justify-between">
                        <p>
                            <span className="text-lg md:text-xl dark:text-white font-bold text-slate-900">${toy?.price}</span>

                        </p>
                        <div className="">
                            <Rate disabled defaultValue={toy?.rating} allowHalf />;

                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button onClick={() => handleAddCart(toy)} className="hover:border-white/40 w-full hover:bg-[#00C4CC] flex items-center justify-center rounded-md border border-transparent bg-[#00C4CC] px-5 py-1.5 md:py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 duration-200 focus:ring-[#00C4CC]">
                            Add to cart
                            <BsArrowRight className="ml-1"></BsArrowRight>
                        </button>
                    </div>
                </div>

                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default SingleToy;