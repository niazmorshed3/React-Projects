import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from '../../Local Storage/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(i=> i.id === idInt);
    const handleApply = ()=>{
        saveJobApplication(idInt)
        toast("Apply Hoise Bhai !");

    }



    return (
        <div>
            <h2>Job Details Of : {id} </h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <h2 className="text-2xl"> {job.job_title} </h2>
                    {job.company_name}
                </div>
                <div className="border md:col-span-1">
                    <h3>{job.salary}</h3>
                    <p>{job.location}</p>
                    <button onClick={handleApply} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg md:w-full bg-purple-500">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;