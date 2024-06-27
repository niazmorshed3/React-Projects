import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userData = {
          email: user?.email,
          name: user.displayName,
        };
        axiosPublic.post("/user", userData).then((res) => {
          console.log(res.data);
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline btn-accent px-8"
    >
      <FaGoogle></FaGoogle>
    </button>
  );
};

export default SocialLogin;
