import { useState } from "react";

const StatefullForm = () => {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState();
  const [name, setName] = useState();

  const handleEmail = (i) => {
    setMail(i.target.value);
  };

  const handlePass = (i) => {
    setPass(i.target.value);
  };
  
  const handleName = (i)=>{
    setName(i.target.value)
  }

  const handleSubmit = (i) => {
    i.preventDefault();
    if (pass.length <4){
        setError("Password Cannot Be That small enter a bigger one")
    }
    else{
        setError("")
        console.log(name)
        console.log(mail);
        console.log(pass);
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" name="name" placeholder="Enter your name" />
        <br />
        <input
          onChange={handleEmail}
          type="text"
          name="mail"
          placeholder="Enter your email"
        />
        <br />
        <input
          onChange={handlePass}
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StatefullForm;
