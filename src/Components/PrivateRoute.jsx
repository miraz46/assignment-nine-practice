import { useContext } from 'react';
import { AuthContext } from '../Js_File/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='flex h-[90vh] justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>;
};

export default PrivateRoute;

// state={location?.pathname || '/'}