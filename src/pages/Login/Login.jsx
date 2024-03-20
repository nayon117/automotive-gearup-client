import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/auth";

const Login = () => {
  const { signIn, signInWithGoogle, loading } = useAuth() || {};
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      const result = await signIn(data.email, data.password);
      console.log(result);
      navigate(from, { replace: true });
      toast.success("Sign in successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);
      navigate(from, { replace: true });
      toast.success("Sign in successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-80 lg:w-96 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password", {
                    minLength: 6,
                    required: true,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center focus:outline-none top-8"
                >
                  {showPassword ? (
                    <BsEyeSlash className="text-first" />
                  ) : (
                    <BsEye className="text-first" />
                  )}
                </button>
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.type === "required"
                      ? "This field is required"
                      : "Password must be at least 6 characters long"}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="bg-first w-full hover:bg-white hover:text-first btn text-white"
                >
                  {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto" />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
            <div
              onClick={handleGoogleLogin}
              className="btn bg-white mx-8 p-1"
            >
              <FcGoogle size={32} />
              <p>Continue with Google</p>
            </div>
            <p className="text-center py-2 mb-3">
              Already have an account?{" "}
              <Link className="text-[#332885] ml-1" to="/register">
                Sign up
              </Link>
            </p>
            <div className="divider px-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
