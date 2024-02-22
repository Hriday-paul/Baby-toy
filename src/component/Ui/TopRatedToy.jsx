import { useEffect, useState } from "react";
import UseAxiosPublic from '../../Hooks/UseAxiosPublic/UseAxiosPublic'
import MultipleSlide from "./MultipleSlide";

const TopRatedToy = () => {
    const [toys, setToys] = useState([]);
    const axiosPublic = UseAxiosPublic();

    useEffect(()=>{
        axiosPublic.get('/getToyWithRating')
        .then(({data})=>{
            setToys(data)
            console.log(data);
        })
    }, [])
    return (
        <div className="py-10">
            <div>
                <h4 className="text-3xl font-nunito font-bold text-center dark:text-white">Top rated Toy</h4>
                <p className="text-lg font-nunito text-[#00C4CC] text-center">Our Collections</p>
            </div>
            <div className="py-10">
                {
                    toys.length >0 && <MultipleSlide toys={toys}></MultipleSlide>
                }
            </div>
        </div>
    );
};

export default TopRatedToy;