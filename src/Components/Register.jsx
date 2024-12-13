import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Js_File/AuthContext";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate()
    const { setError, createUser, updateUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;
        console.log(name, email, photoUrl, password);
        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
          return toast.error("Must have an Uppercase letter,a Lowercase letter and Length must be at least 6");
        }

        createUser(email, password)
            .then(() => {
                updateUser(name, photoUrl)
                    .then(() => {
                        navigate('/')
                    }).catch((error) => {
                        setError(error)
                    });
                    toast.success('Registration Complete')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return (

        <div className="hero bg-base-200 min-h-screen">
            < Helmet >
                <title>Registration</title>
            </Helmet >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            {/* Name */}
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* Photo URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photoUrl" type="text" placeholder="photoUrl" className="input input-bordered" required />
                        </div>
                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <h2 className="mt-6">Already have an account? <NavLink className={'underline underline-offset-4 text-sky-500'} to={'/login'}>Login</NavLink> </h2>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Register;