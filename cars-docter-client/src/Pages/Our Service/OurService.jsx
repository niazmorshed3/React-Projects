import { useEffect, useState } from "react";
import OurSeriviceCard from "./OurSeriviceCard";

const OurService = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl text-orange-700">Our Service {user.length} </h2>
        <h3 className="text-lg">Our Service Area</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {user.map((i) => (
          <OurSeriviceCard key={i._id} info={i}></OurSeriviceCard>
        ))}
      </div>
    </div>
  );
};

export default OurService;
