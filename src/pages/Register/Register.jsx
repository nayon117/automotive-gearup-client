import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/utils";

import toast from "react-hot-toast";
import { saveUser } from "../../api/auth";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth() || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    const image = data.image[0];

    try {
      const imageData = await imageUpload(image);

      const result = await createUser(data.email, data.password);

      await updateUserProfile(data.name, imageData?.data?.display_url);

      const databaseResponse = await saveUser(result?.user);
      console.log(databaseResponse);

      toast.success("Sign up successful");
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error?.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);

      navigate("/");
      toast.success("Sign up successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-third">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  {...register("image", { required: true })}
                  name="image"
                  accept="image/*"
                />
                {errors.image && (
                  <span className="text-red-500">Image is required</span>
                )}
              </div>
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
                  <span className="text-red-500">Email is required</span>
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
                      ? "Password is required"
                      : "Password must be at least 6 characters long"}
                  </span>
                )}
              </div>
              <div className="mt-2">
                <button
                  type="submit"
                  className="bg-first w-full hover:bg-white hover:text-first btn text-white"
                >
                  {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto" />
                  ) : (
                    "Sign up"
                  )}
                </button>
              </div>
            </form>
            <div
              onClick={handleGoogleLogin}
              className="btn bg-white mx-8 p-1 mb-4"
            >
              <FcGoogle size={32} />
              <p>Continue with Google</p>
            </div>
            <p className="text-center mb-3">
              Already have an account?{" "}
              <Link className="text-[#332885] ml-1" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
