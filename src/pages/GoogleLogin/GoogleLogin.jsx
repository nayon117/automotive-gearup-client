import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const GoogleLogin = () => {

    
    // context 
    const { googleLogin } = useContext(AuthContext)
    
    const navigate = useNavigate()


    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
            console.log(res.user);
                toast.success('Login Successful')
                navigate('/')
            })
            .catch(error => {
            console.log(error);
            toast.error('Something went wrong')
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="flex items-center mx-auto btn btn-sm bg-white border border-gray-500 gap-3">
                <FcGoogle></FcGoogle>
                <span>Log in with Google</span>
              </button>
        </div>
    );
};

export default GoogleLogin;