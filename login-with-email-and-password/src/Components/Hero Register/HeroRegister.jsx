import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase Setup/firebase.config";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const HeroRegister = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showButton, setShowButton] = useState(false);

  const handleHeroRegister = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.password.value;
    console.log(mail, pass);
    // Reset Register
    setRegisterError("");
    setRegisterSuccess("");
    // Check Pass
    if (pass.length < 6) {
      setRegisterError("Password Can not be less than 6 Charecter");
      return;
    } else if (!/[A-Z]/.test(pass)) {
      setRegisterError("Password has to include one Uppercase Cherecter");
      return;
    }
    // Create User
    createUserWithEmailAndPassword(auth, mail, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setRegisterSuccess("Register Successfull");
      })
      .catch((error) => {
        console.error(error);
        registerError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleHeroRegister} className="card-body">
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
                type={showButton ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <span onClick={() => setShowButton(!showButton)}>
                {showButton ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {registerError && <p className="text-red-700">{registerError}</p>}
          {registerSuccess && (
            <p className="text-green-700">{registerSuccess}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
