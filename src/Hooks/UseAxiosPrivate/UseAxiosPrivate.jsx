import axios from "axios";
import { useContext, useEffect } from "react";
import { authContext } from "../../ContextHandler/Authonicate/Authonicate";

const secure = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
})

function UseAxiosPrivate() {
    const { logOut } = useContext(authContext);
    useEffect(() => {
        secure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            if (error.response.status) {
                console.log(error)
                logOut();
            }
        })
    }, [])
    return secure
}
export default UseAxiosPrivate;