import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const twiterProvider = new TwitterAuthProvider();
  const [info, setInfo] = useState();

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setInfo(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setInfo(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleX = () => {
    signInWithPopup(auth, twiterProvider)
      .then((result) => {
        const user = result.user;
        setInfo(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setInfo(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {info ? (
        <button onClick={handleSignOut}>Log Out</button>
      ) : (
        <>
          <button onClick={handleSignIn}>Google Login</button>
          <button onClick={handleGitHub}>GitHub Login</button>
          <button onClick={handleX}>X Login</button>
        </>
      )}
      {info && (
        <div>
          <h1>Name: {info.displayName}</h1>
          <h1>Mail : {info.email} </h1>
          <img src={info.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
