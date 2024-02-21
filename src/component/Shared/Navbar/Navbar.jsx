import logo from '../../../assets/toy-logo.png'
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { authContext } from '../../../ContextHandler/Authonicate/Authonicate';
import { PiSignOutFill } from "react-icons/pi";
import { SiGnuprivacyguard } from "react-icons/si";

const Navbar = ({ dark }) => {
    const { userInfo, logOut } = useContext(authContext);
    const [showProfile, setShowProfile] = useState(false);

    const handleDark = (e) => {
        dark(e.target.checked)
    }



    return (
        <div className="bg-[#ffff] text-black dark:bg-[#1D232A] dark:text-white shadow-md">
            <div className="max-w-7xl mx-auto">
                {/* large device  */}
                <div className="grid grid-cols-2 lg:grid-cols-3 justify-between items-center gap-x-5">
                    <div>
                        <img className='h-16 md:h-20 lg:h-24 ' src={logo} alt="logo" />
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='flex flex-row gap-x-10 items-center justify-center font-nunito'>
                            <li className='text-xl font-medium relative group'>
                                <NavLink to='/'>Home</NavLink>
                                <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                            </li>
                            <li className='text-xl font-medium relative group'>
                                <NavLink to='/shop/all'>Shop</NavLink>
                                <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                            </li>
                            <li className='text-xl font-medium relative group'>
                                <NavLink to='/myCart'>My Cart</NavLink>
                                <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                            </li>
                            <li className='text-xl font-medium relative group'>
                                <NavLink to='/addToy'>Add Toy</NavLink>
                                <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-row gap-x-7 items-center justify-end'>
                        <CiSearch className='text-2xl hidden md:block' ></CiSearch>
                        <div className='relative'>
                            {
                                userInfo && <FaRegCircleUser className="text-2xl cursor-pointer" onClick={() => setShowProfile(!showProfile)}></FaRegCircleUser>
                            }
                            {
                                !userInfo && <Link to='/login'>
                                    <FaRegCircleUser className="text-2xl cursor-pointer"></FaRegCircleUser>
                                </Link>
                            }

                            {
                                userInfo && <div className={`z-50 w-[220px] absolute right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 duration-300 ${showProfile ? 'top-5 h-auto' : 'top-8 h-0 overflow-hidden'}`} id="user-dropdown">

                                <div className="flex flex-row flex-shrink items-center gap-x-2 text-base font-medium whitespace-nowrap px-3 py-3">


                                    <div className="avatar z-40">
                                        <div className="w-7 h-7 rounded-full z-40">
                                            <img className="z-40" src={userInfo?.photoURL ? `${userInfo?.photoURL}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU"} alt="img" />
                                        </div>
                                    </div>

                                    <span className="truncate">
                                        <h3 className="block text-sm text-gray-900 dark:text-white truncate">{userInfo?.displayName}</h3>
                                        <p className="truncate block text-sm  text-gray-500 dark:text-gray-400">{userInfo?.email}</p>
                                    </span>

                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">

                                    <li>
                                        <Link to="/register" className="flex items-center gap-x-1 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"><PiSignOutFill></PiSignOutFill>Register</Link>
                                    </li>
                                    
                                    <li>
                                        <div onClick={logOut} className="px-4 mt-2 flex items-center gap-x-1 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white cursor-pointer"><SiGnuprivacyguard className='text-red-500'></SiGnuprivacyguard>Sign out</div>
                                    </li>
                                </ul>
                            </div>
                            }
                        </div>



                        <BsCart3 className='text-2xl'></BsCart3>

                        <label className="swap swap-rotate lg:mr-5">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="hidden" onChange={handleDark} />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-7 h-7 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>


                        <FiMenu className='text-2xl lg:hidden mr-5'></FiMenu>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;