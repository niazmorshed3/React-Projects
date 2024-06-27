import axios from "axios";


const Secret = () => {
    const axx = axios.post('https://api.example.com/secret', =>{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return (
        <div>
            <h2 className="text4xl">This are Secret Things</h2>
            
        </div>
    );
};

export default Secret;