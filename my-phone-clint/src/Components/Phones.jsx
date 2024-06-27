import { NavLink, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl">All Phones are here : {phones.length} </h2>
      {
        phones.map((i)=> <li key={i.id}>
            <NavLink to={`/phone/${i.id}`}>{i.name}</NavLink>
            </li>)
      }
    </div>
  );
};

export default Phones;
