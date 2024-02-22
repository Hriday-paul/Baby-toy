import { useContext, useEffect, useState } from "react";
import { authContext } from "../../ContextHandler/Authonicate/Authonicate";
import UseAxiosPublic from '../../Hooks/UseAxiosPublic/UseAxiosPublic'
import LoadingToys from "../../component/Shared/LoadingToys/LoadingToys";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UpdateToys from "../UpdateToys/UpdateToys";
import { Rate } from "antd";

const MyToys = () => {
    const [loading, setLoading] = useState(true);
    const { userInfo } = useContext(authContext);
    const axiosPublic = UseAxiosPublic();
    const [toys, setToys] = useState([]);

    const fetchToys = () => {
        axiosPublic.get(`/myToy/${userInfo?.email}`)
            .then(({ data }) => {
                setToys(data)
                setLoading(false)
            })
    }


    useEffect(() => {
        fetchToys();
    }, [])

    return (
        <div >
            <div className="dark:bg-gray-700 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    {
                        loading ? <LoadingToys></LoadingToys> :
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5">
                                {
                                    toys?.map((toy) => {
                                        return <div key={toy._id} className="flex justify-center">
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

                                                    <div>
                                                        
                                                        <UpdateToys toy={toy} fetchToys={fetchToys}></UpdateToys>


                                                    </div>

                                                </div>

                                                <Toaster></Toaster>
                                            </div>

                                        </div>
                                    })
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyToys;