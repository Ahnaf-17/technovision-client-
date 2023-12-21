/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    const { logIn, googleLogin } = useAuth()
    const location = useLocation();
    const navigate = useNavigate()
    const [logInErr, setLogInErr] = useState('')

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        setLogInErr('')
        logIn(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/')
                // if(isParticipant){
                    
                // }
                // else if(isOrganizer){
                //     navigate(location?.state ? location.state : '/dashboard/organizer-profile')
                // }
                // else if(isProfessional){
                //     navigate(location?.state ? location.state : '/dashboard/professional-profile')
                // }
                // if (isParticipant == true) {
                //     navigate(location?.state ? location.state : '/dashboard/participant-profile');
                // } else if (isOrganizer == true) {
                //     navigate(location?.state ? location.state : '/dashboard/organizer-profile');
                // } else if (isProfessional == true) {
                //     navigate(location?.state ? location.state : '/dashboard/professional-profile');
                // }
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'incorrect password or email',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error)
            })
    }

    
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-800 md:w-3/4 lg:w-1/2 mx-auto rounded-xl">
                <form onSubmit={handleLogin} className="card-body ">
                    <div>
                        <h2 className="text-3xl text-center text-white font-bold ">Please Login</h2>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-bold text-white label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-neutral text-white font-bold">Login</button>
                    </div>
                    <div className="form-control text-center">
                        <h2 className="text-white font-bold">Or</h2>
                    </div>
                    <div className="form-control mt-2">
                        <button onClick={handleGoogleLogin} className="btn bg-white text-blue-700 font-extrabold">LogIn with Google <FaGoogle></FaGoogle></button>
                    </div>
                </form>
                <p className="text-center pb-10 text-white mt-3">Don't have an account? <Link className="text-blue-300 font-bold" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;