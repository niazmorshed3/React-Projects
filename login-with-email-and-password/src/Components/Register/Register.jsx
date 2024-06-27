import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase Setup/firebase.config";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const mail = e.target.email.value;
    const pass = e.target.password.value;
    const checkBox = e.target.checkbox.checked;
    console.log(name, mail, pass, checkBox);
    // Reset Register
    setRegisterError("");
    setRegisterSuccess("");

    // Check Pass
    if (pass.length < 6) {
      setRegisterError("Password Can not be less then 6 charecter");
      return;
    } else if (!/[A-Z]/.test(pass)) {
      setRegisterError("Password must be one UpperCase Charecter");
      return;
    } else if (!checkBox) {
      setRegisterError("Please Accept Our Terms And Condition");
      return;
    }

    // Create User
    createUserWithEmailAndPassword(auth, mail, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setRegisterSuccess("Register Succesfull");

        // Update User Profile
        updateProfile(user, {
          displayName : name,
          photoURL : "https://example.com/jane-q-user/profile.jpg"
        } )
        .then(()=>{
          
          console.log("Profile Updated")
        })
        .catch(error=>{
          console.error(error)
        })
        // Send Verify Email
        sendEmailVerification(user).then(() => {
          alert("Please Check Your Account And Verify Your Account");
        });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="mx-auto md:w-1/2 my-12">
      <div>
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4 "
            placeholder="Enter Your Name"
            type="text"
            name="name"
            id=""
            required
          />
          <br />
          <input
            className="mb-4 w-full py-2 px-4 "
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id=""
            required
          />
          <br />
          <div className="relative mb-4 border ">
            <input
              className="w-full py-2 px-4"
              placeholder="Password"
              type={showPass ? "text" : "password"}
              name="password"
              id=""
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label className="ml-2" htmlFor="checkbox">
              Accept Our <a href="">Terms and Condition</a>
            </label>
          </div>
          <br />

          <input
            className="btn btn-active btn-accent mb-4 w-full py-2 px-4"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-800">{registerError}</p>}
        {registerSuccess && <p className="text-green-700">{registerSuccess}</p>}
        <NavLink to="/login">
          <p>Already Have an Account!?Please Login </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
