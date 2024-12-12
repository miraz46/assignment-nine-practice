import { useContext } from 'react';
import { AuthContext } from '../Js_File/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    console.log(loading)
    if (!user) {
        return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
    }
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;