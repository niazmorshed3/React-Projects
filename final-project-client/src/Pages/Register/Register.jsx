import Swal from "sweetalert2";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/ContextProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/Social Login/SocialLogin";

const Register = () => {
  const axioPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          console.log("Profile Updateted");
          // Create user entry in database
          const userData = {
            name: data.name,
            email: data.email,
          };
          axioPublic.post("/user", userData).then((res) => {
            if (res.data.insertedId) {
              console.log("Data added to the dataBase");
              reset();
              Swal.fire({
                title: "Success",
                text: "User Created Successfully",
                icon: "question",
              });
              navigate("/");
            }
          });
        })

        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
                // {...(errors.name && <span>This field is required</span>)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Enter Photo URl"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="p-2 text-center mb-2">
            Already Have an Account ? Please{" "}
            <NavLink to="/login">
              <span className="font-bold text-xl text-blue-500">Login</span>
            </NavLink>
          </p>
          <div className="flex justify-center items-center p-6">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
