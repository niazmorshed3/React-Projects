import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase Setup/firebase.config";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSucces, setLoginSuccess] = useState("");
  const emailRef = useRef(null);
  const handleHeroLogin = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.password.value;
    // console.log(mail, pass);
    // Reset The Logins
    setLoginSuccess("");
    setLoginError("");
    //  Add Validation User
    signInWithEmailAndPassword(auth,mail,pass)
      .then((result) => {
        const user = result.user;
        if(user.emailVerified){
          setLoginSuccess("Login Success");
          console.log(user);
        }
        else{
          alert("Please Verify Your Email")
        }
        
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    // console.log("Reset Mail",email)
    if (!email) {
      console.log("Please Provide an Email");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      ("Please Write a Valid Address");
      return;
    }
    // Send Validation Email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please Check Your Email");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleHeroLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
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
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a
                  onClick={handleResetPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            {loginError && <p className="text-red-700">{loginError}</p>}
            {loginSucces && <p className="bg-green-700">{loginSucces}</p>}
            <NavLink to="/register">
              <p>New to This Website! Please Register Now</p>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
