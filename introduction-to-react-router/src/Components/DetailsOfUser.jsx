
import { useLoaderData } from "react-router-dom";


const DetailsOfUser = () => {
    const data = useLoaderData();
    const {name, website} = data;
    return (
        <div>
            <h2>Details of single Users</h2>
            <h1>Name : {name} </h1>
            <p>Website : {website} </p>
        </div>
    );
};

export default DetailsOfUser;