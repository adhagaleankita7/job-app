import { useState } from "react";
import {
  FaHome,
  FaHeart,
  FaSearch,
  FaUser,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [savedJobs, setSavedJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [searchText, setSearchText] = useState("");

  // SAVE / UNSAVE
  const toggleSaveJob = (job) => {
    const exists = savedJobs.find((j) => j.id === job.id);

    if (exists) {
      setSavedJobs(savedJobs.filter((j) => j.id !== job.id));
    } else {
      setSavedJobs([...savedJobs, job]);
    }
  };

  // 70 JOBS
  const jobs = Array.from({ length: 70 }).map((_, i) => ({
    id: i + 1,
    role: [
      "Frontend Developer",
      "Backend Developer",
      "UI/UX Designer",
      "Data Analyst",
      "DevOps Engineer",
      "Full Stack Developer",
      "Mobile App Developer",
    ][i % 7],
    company: ["Google", "Amazon", "Microsoft", "Netflix", "TCS", "Infosys"][
      i % 6
    ],
    location: ["Mumbai", "Pune", "Bangalore", "Hyderabad", "Delhi"][i % 5],
    salary: `₹${4 + (i % 30)} LPA`,
  }));

  // SEARCH FILTER
  const filteredJobs = jobs.filter(
    (job) =>
      job.role.toLowerCase().includes(searchText.toLowerCase()) ||
      job.company.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="bg-[#070b1a] min-h-screen flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-[#0f172a] text-white p-5 pb-28">
        {/* HOME */}
        {activeTab === "home" && (
          <>
            <h1 className="text-4xl font-bold">Find Dream Job 🚀</h1>

            <p className="text-gray-400 mt-2">
              Apply, save and grow your career
            </p>

            {/* SEARCH */}
            <div className="bg-white/10 mt-5 p-3 rounded-xl flex gap-2">
              <FaSearch />
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="bg-transparent outline-none w-full"
                placeholder="Search jobs..."
              />
            </div>

            {/* JOB LIST */}
            <div className="mt-6 space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white/10 p-4 rounded-xl border border-white/10"
                >
                  <div className="flex justify-between">
                    <h2 className="font-bold">{job.role}</h2>

                    <FaHeart
                      onClick={() => toggleSaveJob(job)}
                      className={
                        savedJobs.find((j) => j.id === job.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }
                    />
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mt-2">
                    <FaBriefcase /> {job.company}
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMapMarkerAlt /> {job.location}
                  </div>

                  <p className="text-violet-400 mt-2 font-bold">{job.salary}</p>

                  <button
                    onClick={() => {
                      setSelectedJob(job.role);
                      setShowForm(true);
                    }}
                    className="w-full mt-3 bg-violet-600 p-3 rounded-xl"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* SAVED */}
        {activeTab === "saved" && (
          <div>
            <h1 className="text-2xl font-bold">Saved Jobs ❤️</h1>

            <div className="mt-5 space-y-3">
              {savedJobs.length === 0 ? (
                <p className="text-gray-400">No saved jobs</p>
              ) : (
                savedJobs.map((job) => (
                  <div key={job.id} className="bg-white/10 p-3 rounded-xl">
                    <h2>{job.role}</h2>
                    <p className="text-gray-400">{job.company}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* SEARCH TAB */}
        {activeTab === "search" && (
          <div>
            <h1 className="text-2xl font-bold">Search Jobs 🔍</h1>

            <div className="bg-white/10 p-3 rounded-xl flex gap-2 mt-5">
              <FaSearch />
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="bg-transparent outline-none w-full"
                placeholder="Type job or company..."
              />
            </div>
          </div>
        )}

        {/* PROFILE */}
        {activeTab === "profile" && (
          <div className="text-center mt-10">
            <div className="w-20 h-20 bg-violet-600 rounded-full mx-auto"></div>
            <h2 className="mt-3 text-xl font-bold">User</h2>
            <p className="text-gray-400">Job Seeker</p>
          </div>
        )}

        {/* APPLY FORM */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-5">
            <div className="bg-[#111827] p-5 rounded-xl w-full max-w-[350px]">
              <h2 className="text-xl font-bold">Apply for {selectedJob}</h2>

              <input
                className="w-full mt-4 p-3 bg-white/10 rounded-xl"
                placeholder="Name"
              />
              <input
                className="w-full mt-3 p-3 bg-white/10 rounded-xl"
                placeholder="Email"
              />
              <input
                className="w-full mt-3 p-3 bg-white/10 rounded-xl"
                placeholder="Phone"
              />

              <button
                onClick={() => {
                  alert("Applied Successfully 🚀");
                  setShowForm(false);
                }}
                className="w-full mt-5 bg-violet-600 p-3 rounded-xl"
              >
                Submit
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="w-full mt-2 bg-red-500 p-3 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* BOTTOM NAV */}
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[390px] bg-white/10 p-4 rounded-xl flex justify-around">
          <FaHome onClick={() => setActiveTab("home")} />
          <FaSearch onClick={() => setActiveTab("search")} />
          <FaHeart onClick={() => setActiveTab("saved")} />
          <FaUser onClick={() => setActiveTab("profile")} />
        </div>
      </div>
    </div>
  );
}

export default App;
