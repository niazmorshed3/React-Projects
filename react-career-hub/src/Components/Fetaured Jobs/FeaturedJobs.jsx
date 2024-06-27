import { useEffect, useState } from "react";
import JobDetails from "../Job/Job";

const FeaturedJobs = () => {
  const [info, setInfo] = useState([]);
  const [dataLength, setDataLength] = useState(4);


  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Featured Jobs {info.length} </h2>
        <p className="text-center text-lg">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {info.slice(0, dataLength).map((i) => (
          <JobDetails key={i.id} job={i}></JobDetails>
        ))}
      </div>
      <div className={dataLength===info.length ? "hidden" : "flex justify-center m-6"}>
        <button  onClick={()=> setDataLength(info.length) } className="btn btn-accent">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
