import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import initializetionAuthentication from '../../firebase/firebase.init';
// import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';
// initializetionAuthentication();

const auth = getAuth();
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const [isLogin, setIslogin] = useState(false);

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const toggleLogin = e => {
        setIslogin(e.target.checked)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password);
        if (password.length < 6) {
            setError("Password minimum 6 cheracter");
            return;
        }
        setError('')

        isLogin ? prosseingLogin(email, password) : newUser(email, password)


    }
    const prosseingLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // const googleProvider = new GoogleAuthProvider();
    // const signINGoogle = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {

    //             const user = result.user;
    //             console.log(result.user)
    //             setUser(user)

    //         })
    // }
    const { signInUsingGoogle } = useAuth();
    // console.log(user)
    // const location = useLocation();

    const newUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <img src="https://web.programming-hero.com/static/media/man-with-laptop.331dfa07.png" alt="" />
                </div>
                <div className="col-12 col-lg-6">
                    <div className=" p-4">
                        <form onSubmit={handleSubmit}>
                            <h2>Please {isLogin ? "login" : "Ragister"}</h2>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Already Registered?</label>
                            </div>
                            <div className="row mb-3 text-danger">{error}</div>
                            <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Ragister"}</button>
                        </form>

                    </div>
                    <div>

                        <button className="btn btn-danger m-2" onClick={signInUsingGoogle} ><i class="fab fa-google"></i> Google Sign In</button>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;