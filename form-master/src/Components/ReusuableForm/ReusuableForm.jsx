const ReusuableForm = ({formTitle, handleSubmit, btnText="Submit", children}) => {
    const handleLocalSubmit = (i) => {
        i.preventDefault();
        const files ={
            name : i.target.name.value,
            email : i.target.mail.value,
            password : i.target.password.value
        }
        handleSubmit(files)
    }

  return (
    <div>
        {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="text" name="mail" placeholder="Enter your email" />
        <br />
        <input type="text" name="password" placeholder="Enter your Password" />
        <br />
        <input type="submit" value={btnText} />
      </form>
    </div>
  );
};

export default ReusuableForm;
