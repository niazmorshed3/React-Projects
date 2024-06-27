import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Local Storage/localStorage";

const Applied = () => {
  const job = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (job.length > 0) {
      const jobApplied = job.filter((i) => storedJobId.includes(i.id));
      setAppliedJobs(jobApplied);
    }
  }, []);

  return (
    <div>
      <h2>Jobs i have applied : {appliedJobs.length} </h2>
    </div>
  );
};

export default Applied;
