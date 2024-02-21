import { useEffect, useState } from "react";
import UseAxiosPublic from '../../Hooks/UseAxiosPublic/UseAxiosPublic'
import SingleToy from "../../component/Shared/SingleToy/SingleToy";
import { useParams } from "react-router-dom";
import LoadingToys from "../../component/Shared/LoadingToys/LoadingToys";


const AllToys = () => {
    const axiosPublic = UseAxiosPublic();
    const [loading, setLoading] = useState(true);
    const [toys, setToys] = useState([]);
    const {type} = useParams();
    

    useEffect(() => {
        axiosPublic.get(`/toys/${type}`)
            .then(({ data }) => {
                setToys(data)
                setLoading(false);
            })
    }, [type])

    return (
        <div >
            <div className="dark:bg-gray-700 py-10">
                <div className="max-w-6xl mx-auto px-4">
                    {
                        loading ? <LoadingToys></LoadingToys> :
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5">
                            {
                                toys.map((toy) => {
                                    return <SingleToy key={toy._id} toy={toy}></SingleToy>
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllToys;