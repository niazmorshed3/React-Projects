import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <div className="m-20">
        <h1>Hot Hot Coffee Ache {coffees.length} </h1>
        <div className="grid md: grid-cols-2 gap-4">
          {coffees.map((i) => (
            <CoffeeCard
              key={i._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={i}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
