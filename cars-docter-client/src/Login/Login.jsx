import { NavLink, useLocation, useNavigate } from "react-router-dom";
import login from "../../src/assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/ContextProvider";
import UseAuth from "../Auth/UseAuth";

const Login = () => {


  // const { signIn } = useContext(AuthContext);
  const { signIn } = UseAuth();




  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedinUser = result.user;
        console.log(loggedinUser);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center p-4">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="p-4 text-center">
            New to Car Doc? Please{" "}
            <NavLink
              className="text-2xl font-semibold text-blue-700"
              to="/register"
            >
              Register
            </NavLink>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
