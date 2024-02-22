import { Drawer, Spin } from "antd";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic/UseAxiosPublic"
import { authContext } from "../../ContextHandler/Authonicate/Authonicate";
import UploadFile from "../../Hooks/UploadFile/UploadFile";

const UpdateToys = ({ toy, fetchToys }) => {
    const { userInfo } = useContext(authContext);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [loader, setLoader] = useState(false);
    const axiosPublic = UseAxiosPublic();

    const postData = (data) => {
        axiosPublic.put(`/updateToy`, data)
            .then(() => {
                toast.success('Your toy added succesfully');
                fetchToys();
                setLoader(false)
            })
            .catch(() => {
                toast.error('Something wents wrong, try again!');
                setLoader(false)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        const form = e.target;
        const file = form.image.files[0];
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brand = form.brand.value;
        const ageType = form.ageType.value;
        const details = form.details.value;
        if (file) {
            UploadFile(file)
                .then((response) => response.json())
                .then((data) => {
                    postData({
                        email: userInfo.email,
                        img: data.secure_url,
                        name,
                        price: parseInt(price),
                        rating: parseFloat(rating),
                        brand,
                        ageType,
                        details,
                        id: toy._id
                    })
                })
                .catch(() => {
                    toast.error('file upload failed, try again');
                });
        }
        else{
            postData({
                email: userInfo.email,
                name,
                price: parseInt(price),
                rating: parseFloat(rating),
                brand,
                ageType,
                details,
                id: toy._id
            })
        }
    }

    const showDrawer = () => {
        setOpenDrawer(true);
    };
    const onClose = () => {
        setOpenDrawer(false);
    };


    return (
        <div>
            <Drawer title="Update Toy" width={720} onClose={onClose} open={openDrawer}>
                <div className='flex flex-col gap-y-2 '>
                    {
                        openDrawer && <Spin spinning={loader} size="large">
                            <div className="dark:bg-gray-800">
                                <div className="px-2">
                                    <div className="max-w-2xl shadow-xl dark:bg-gray-700 rounded-md mx-auto p-5">
                                        <form onSubmit={handleSubmit} className="grid grid-cols-1  gap-x-0 md:gap-x-5 gap-y-5 items-center">
                                            <div>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Name<span className="text-red-500">*</span></label>

                                                <input id='name' name="name" type="text" className="rounded-md px-2 border-x-0 focus:border-0 border-b-0 border-t-gray-200 outline-none py-1 bg-slate-100 dark:bg-gray-600 dark:text-white shadow-inner h-10 w-full text-sm" defaultValue={toy?.name} required />
                                            </div>
                                            <div>
                                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Price <span className="text-red-500">*</span></label>

                                                <input id='price' name="price" type="number" className="rounded-md px-2 border-x-0 focus:border-0 border-b-0 border-t-gray-200 outline-none py-1 bg-slate-100 dark:bg-gray-600 dark:text-white shadow-inner h-10 w-full text-sm" defaultValue={toy?.price} required />
                                            </div>
                                            <div>
                                                <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Rating<span className="text-red-500">*</span></label>

                                                <input id='rating' name="rating" type="number" max={5} min={1} className="rounded-md px-2 border-x-0 focus:border-0 border-b-0 border-t-gray-200 outline-none py-1 bg-slate-100 dark:bg-gray-600 dark:text-white shadow-inner h-10 w-full text-sm" defaultValue={toy?.rating} required />
                                            </div>
                                            <div>
                                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Toy Brand<span className="text-red-500">*</span></label>

                                                <input id='brand' name="brand" type="text" max={5} min={1} className="rounded-md px-2 border-x-0 focus:border-0 border-b-0 border-t-gray-200 outline-none py-1 bg-slate-100 dark:bg-gray-600 dark:text-white shadow-inner h-10 w-full text-sm" defaultValue={toy?.brand} required />
                                            </div>
                                            <div>
                                                <label htmlFor="ageType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age Type<span className="text-red-500">*</span></label>
                                                <select name="ageType" defaultValue={toy?.ageType} id="ageType" className="rounded-md px-2 border-x-0 focus:border-0 border-b-0 border-t-gray-200 outline-none py-1 bg-slate-100 dark:bg-gray-600 dark:text-white shadow-inner h-10 w-full text-sm" required >
                                                    <option value="baby">Baby</option>
                                                    <option value="1-2">1-2 years</option>
                                                    <option value="3-5">3-5 years</option>
                                                    <option value="6-8">6-8 years</option>
                                                    <option value="9+">9+ years</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image<span className="text-red-500">*</span></label>

                                                <input type="file" id="image" name="image" className="file-input file-input-bordered dark:bg-gray-600 dark:border-gray-700 dark:text-white w-full" />
                                            </div>

                                            <div className="">
                                                <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details<span className="text-red-500">*</span></label>
                                                <textarea name="details" id="details" className="rounded-md px-2 border-x-0 focus:border-0 border-b-0 border-t-gray-200 outline-none py-1 bg-slate-100 dark:bg-gray-600 dark:text-white shadow-inner w-full text-sm" required rows="5" defaultValue={toy?.details}></textarea>
                                            </div>

                                            <button type="submit" className="btn text-white bg-blue-600 btn-block hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300">
                                                Update Toy
                                            </button>

                                        </form>
                                    </div>
                                    <Toaster></Toaster>
                                </div>
                            </div>
                        </Spin>
                    }
                </div>
            </Drawer>
            <button onClick={showDrawer} className="hover:border-white/40 hover:bg-[#00C4CC] flex items-center justify-center rounded-md border border-transparent bg-[#00C4CC] px-5 py-1.5 md:py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 duration-200 focus:ring-[#00C4CC]"><FiEdit></FiEdit></button>
        </div>
    );
};

export default UpdateToys;