import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [loginError,setLoginError] = useState('')

    // context 
  const { signIn } = useContext(AuthContext)
  

  const location = useLocation()
  const navigate = useNavigate()
    
    const handleLogin = (e) => {
        e.preventDefault()

        // get data from field 
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        // reset error 
        setLoginError('');

        // sign In user

        signIn(email, password)
            .then(res => {
              console.log(res.user);
              toast.success('Login Successful')
              navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message)
        })
    }

    return (
        <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
          <div className="w-full bg-white rounded-lg shadow   md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  ">
                Sign in to your account
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900  "
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <div className="flex items-center relative">
                  <input
                    type={showPassword?"text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5  "
                     
                  />
                    <span  onClick={() => setShowPassword(!showPassword)} className="absolute right-2">
                      {
                        showPassword ? <FaEyeSlash className="text-xl text-gray-500"/>:<FaEye className="text-xl text-gray-500"/>
                      }
                  </span>
                  </div>
                  
                </div>
                {
                loginError && <p className="text-red-500">{ loginError}</p>          
             }
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a  
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full btn btn-neutral "
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <Link to='/register'
                     
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </Link>
               </p>
               <p className="divider">or</p> 
              <GoogleLogin></GoogleLogin>
              </form>
           
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login;