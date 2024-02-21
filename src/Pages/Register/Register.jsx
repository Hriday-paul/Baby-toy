import { Link } from "react-router-dom";
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
//import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { authContext } from "../../ContextHandler/Authonicate/Authonicate";
import UseAxiosPublic from '../../Hooks/UseAxiosPublic/UseAxiosPublic'


const Register = () => {
    const { createUser } = useContext(authContext);
    const [passError, setPassError] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loader, setLoader] = useState(false);
    const axiosPublic = UseAxiosPublic();

    const passwardValidate = (e) => {
        let msg = ''
        const password = e.target.value;
        if (password.length < 6) {
            msg = "pasword must use 6 character"
        }
        if (!/[A-Z]/.test(password)) {
            msg = msg + ',' + "an Uppercase character"
        }
        if (!/[#?!@$%^&*-]/.test(password)) {
            msg = msg + ',' + "one special character"
        }
        setPassError(msg)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!passError) {
            setLoader(true)
            createUser(email, password)
                .then(({ user }) => {
                    updateProfile(user, {
                        displayName: name,
                    })
                    axiosPublic.put('/user', { email: user.email, password, name, photo : '' })
                        .then(() => {
                            form.reset();
                            toast.success('Registration successfully');
                            setLoader(false);
                        })
                        .catch(() => {
                            form.reset();
                            toast.error('Something wents wrong, try again!');
                            setLoader(false)
                        })
                })
                .catch(() => {
                    form.reset();
                    toast.error('Something wents wrong, try again!')
                    setLoader(false);
                })
        }
    }

    return (
        <div>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Create an account
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 ">User name *</label>
                                    <Input size="large" type="text" name="name" id="userName" placeholder="user name..." prefix={<UserOutlined />} required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email *</label>
                                    <Input size="large" type="email" name="email" id="email" placeholder="name@gmail.com" required prefix={<MailOutlined />} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password *</label>
                                    <Space direction="horizontal" className="w-full mx-auto">
                                        <Input.Password onChange={passwardValidate} size="large" type="password" name="password" id="password" required
                                            placeholder="password..."
                                            visibilityToggle={{
                                                visible: passwordVisible,
                                                onVisibleChange: setPasswordVisible,
                                            }}
                                        />
                                    </Space>
                                    <p className="text-sm text-center text-red-500 mt-2">{passError}</p>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                {/* <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button> */}
                                <button type="submit" className="btn text-white bg-blue-600 btn-block hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300">
                                    {loader && <span className="loading loading-spinner"></span>}
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-700">
                                    Already have an account? <Link to="/login" className="font-medium text-gray-800 hover:underline">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                    <Toaster></Toaster>
                </div>
            </section>
        </div>
    );
};

export default Register;