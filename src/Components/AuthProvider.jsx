import { AuthContext } from '../Js_File/AuthContext';
const AuthProvider = ({ children }) => {

    console.log(children)
    const authInfo = {

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;