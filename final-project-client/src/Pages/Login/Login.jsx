import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/ContextProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Social Login/SocialLogin";

const Login = () => {
  // const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.form?.pathname || "/";
  // console.log("State in the Locaton", location.state?.from.pathname)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login Successfull",
        text: "That thing is still around",
        icon: "question",
      });
      navigate(from, { replace: true });
    });
  };

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      // setDisable(false);
    } else {
      // setDisable(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                placeholder="Enter Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleCaptcha}
                type="text"
                name="captcha"
                placeholder="Enter The captcha"
                className="input input-bordered"
                required
              />
              {/* <button
                
                className="btn btn-outline btn-xs mt-2"
              
                Validate
              </button> */}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="p-2 text-center mb-2">
            New Here ? Please{" "}
            <NavLink to="/register">
              <span className="font-bold text-xl text-blue-500">Register</span>
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

export default Login;
