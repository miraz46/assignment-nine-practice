import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Js_File/AuthContext";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location?.state;
    const { setError, googleSingIn, signInUser, githubSingIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(() => {
                toast.success('LogIn Complete')
                navigate(from || '/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    const handleSocialMediaLogin = (socialMedia) => {
        socialMedia()
            .then(() => {
                toast.success('LogIn Complete')
                navigate(from || '/')

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            < Helmet >
                <title>Login</title>
            </Helmet >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <h2 className="mt-6 ">Already have an account? <NavLink className={'underline underline-offset-4 text-sky-500'} to={'/register'}>Register</NavLink> </h2>
                    </form>
                    <div className="flex gap-4 mb-3">
                        <button onClick={() => handleSocialMediaLogin(googleSingIn)} className="btn btn-outline w-16  border-sky-500">Google</button>
                        <button onClick={() => handleSocialMediaLogin(githubSingIn)} className="btn btn-outline w-16  border-green-500">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;