import { FaLocationArrow } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className=" max-w-1/3 card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold rounded border text-[#7E90FE] border-[#7E90FE] mr-4">
            {" "}
            {remote_or_onsite}{" "}
          </button>
          <button className=" text-[#7E90FE] px-5 py-2 font-extrabold rounded border border-[#7E90FE] mr-4">
            {" "}
            {job_type}{" "}
          </button>
        </div>
        <div className="mt-4 flex ">
          <h2 className="flex mr-4">
            <FaLocationArrow className="text-xl mr-2" /> {location}{" "}
          </h2>
          <h2 className="flex">
            <FaDollarSign className="text-xl" /> {salary}{" "}
          </h2>
        </div>
        <div className="card-actions">
          <NavLink to={`/job/${id}`}><button className="btn btn-primary">View Details</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Job;
