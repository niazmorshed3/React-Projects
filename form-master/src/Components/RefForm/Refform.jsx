import { useEffect } from "react";
import { useRef } from "react";


const Refform = () => {

    const nameRef = useRef();
    const mailRef = useRef();
    const passRef = useRef ();

    useEffect(()=>{
        nameRef.current.focus()
    },[])



    const handleSubmit = (i)=>{
        i.preventDefault();
        console.log(nameRef.current.value)
        console.log(mailRef.current.value)
        console.log(passRef.current.value)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Enter your name" />
                <br />
                <input ref={mailRef} defaultValue={'rafibhaai@gmail.com'} type="text" name="mail"  placeholder="Enter your email" />
                <br />
                <input ref={passRef} type="text" name="password" placeholder="Enter your Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Refform;