import { useState, createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useEffect } from 'react'
import auth from '../../firebase.config'
import axios from "axios";

export const authContext = createContext(null);

const Authonicate = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, pass) => {
        console.log(email, pass);
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const userLogin = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const user = { email: currentUser.email }
                axios.put("http://localhost:4000/crtJwt", user, { withCredentials: true })
            }
            else {
                const user = { email: userInfo.email };
                axios.put("http://localhost:4000/dltJwt", user, { withCredentials: true })
            }
            setUserInfo(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        userInfo,
        createUser,
        userLogin,
        googleLogin,
        logOut
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );

};

export default Authonicate;