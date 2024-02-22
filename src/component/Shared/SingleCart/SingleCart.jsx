import { RxCross2 } from "react-icons/rx";
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic/UseAxiosPublic'
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { authContext } from "../../../ContextHandler/Authonicate/Authonicate";


const SingleCart = ({cartToy}) => {
    const {userInfo, getCartToys} = useContext(authContext)
    const axiosPublic = UseAxiosPublic();
    const deletecart = (id)=>{
        axiosPublic.delete(`/deleteCart/${id}`)
        .then(()=>{
            toast.success('Delete successfully');
            getCartToys(userInfo.email);
        })
    }

    return (
        <div className="flex flex-row justify-between gap-x-5 border-b py-5">
            <div className="flex flex-row gap-x-3">
                <img className="h-28 w-28" src={cartToy?.img} alt="toy image" />
                <div>
                    <h2 className="text-lg font-nunito font-medium">{cartToy?.name}</h2>
                    <h2 className="text-xl font-nunito font-medium">{cartToy?.price} /=</h2>
                </div>
            </div>
            <div>
                <RxCross2 className="text-xl cursor-pointer" onClick={()=>deletecart(cartToy._id)}></RxCross2>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SingleCart;