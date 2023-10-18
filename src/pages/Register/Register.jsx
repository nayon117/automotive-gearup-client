import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
const Register = () => {
  // states
  const [showPassword, setShowPassword] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  // use context
  const { signUp, handleUpdateProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  // onsubmit functionlity
  const handleRegister = (e) => {
    e.preventDefault();

    // get data from input fields
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const check = e.target.check.checked;

    // reset error
    setRegistrationError("");

    // some validations
    if (password.length < 6) {
      setRegistrationError("password should be 6 characters or more");
      return;
    } else if (!/^(?=.*[A-Z]).{1,}$/.test(password)) {
      setRegistrationError("password should have at least on upperCase letter");
      return;
    } else if (
      !/(?=.*[!@#$%^&*()_+\-=[\]{};:'"\\|,.<>/?]).{1,}/.test(password)
    ) {
      setRegistrationError(
        "password should have at least one special characters"
      );
      return;
    } else if (!check) {
      setRegistrationError("please accept our terms and conditions");
      return;
    }

    // create a new user
    signUp(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("sign up successfull");
        navigate("/");
        handleUpdateProfile(name, photo)
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setRegistrationError(error.message);
      });
  };

  return (
    <section className="bg-gray-50    ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-full  bg-white rounded-lg shadow dark:border  max-w-md xl:p-0  ">
          <div className="     space-y-3 md:space-y-4 p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign up to your account
            </h1>
            <form onSubmit={handleRegister} className="space-y-3  md:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="your name"
                />
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Image URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="image url..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
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
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-xl text-gray-500" />
                    ) : (
                      <FaEye className="text-xl text-gray-500" />
                    )}
                  </span>
                </div>
              </div>
              {registrationError && (
              <p className="text-red-500">{registrationError}</p>
            )}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      name="check"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      I agree to the terms and condition
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full btn btn-neutral">
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline  ml-2"
                >
                  Sign In
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

export default Register;