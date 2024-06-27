

const SimpleForm = () => {
    const handleSubmit = (i) =>{
        i.preventDefault();
        console.log(i.target.name.value)
        console.log(i.target.mail.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" />
                <br />
                <input type="text" name="mail" placeholder="Enter your email" />
                <br />
                <input type="text" name="password" placeholder="Enter your Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;