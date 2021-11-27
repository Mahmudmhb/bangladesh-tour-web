import { signOut, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// import  { useEffect, useState } from "react";
import initializetionAuthentication from "../firebase/firebase.init";
initializetionAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const { error, setError } = useState('');
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth()

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                // console.log(result.user)

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user);
                setUser({ user })
            }
        })

    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logout

    }
}
export default useFirebase;