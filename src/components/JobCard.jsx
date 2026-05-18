import { FaHeart } from "react-icons/fa";

function JobCard({ job }) {
  return (
    <div className="card">
      <div className="top">
        <h2>{job.role}</h2>
        <FaHeart className="heart" />
      </div>

      <p>{job.company}</p>
      <p>{job.location}</p>

      <h3>{job.salary}</h3>

      <button className="applyBtn">Apply Now</button>
    </div>
  );
}

export default JobCard;
