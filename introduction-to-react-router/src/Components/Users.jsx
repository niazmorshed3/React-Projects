import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";
import "./SingleUser.css"

const Users = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            <h2>This is USERS guys : {data.length} </h2>
            <p>Ki obostha users</p>
            <div className="displayofuser">
                {
                    data.map(i=> <SingleUser key={i.id} rawdata={i}></SingleUser>)
                }
            </div>
        </div>
    );
};

export default Users;