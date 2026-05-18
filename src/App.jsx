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

  // IMAGES
  const images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1552664730-d307ca884978",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  ];

  // JOBS
  const jobs = Array.from({ length: 40 }).map((_, i) => ({
    id: i + 1,

    role: [
      "Frontend Dev",
      "Backend Dev",
      "UI UX",
      "Data Analyst",
      "DevOps",
      "Full Stack",
      "Mobile Dev",
      "React Dev",
      "AI Engineer",
      "Cloud Engineer",
    ][i % 10],

    company: ["Google", "Amazon", "Microsoft", "Netflix", "Infosys"][i % 5],

    location: ["Mumbai", "Pune", "Bangalore", "Delhi", "Hyderabad"][i % 5],

    salary: `₹${6 + (i % 20)} LPA`,

    image: images[i % 5],
  }));

  // SAVE JOB
  const toggleSaveJob = (job) => {
    const exists = savedJobs.find((j) => j.id === job.id);

    if (exists) {
      setSavedJobs(savedJobs.filter((j) => j.id !== job.id));
    } else {
      setSavedJobs([...savedJobs, job]);
    }
  };

  // SEARCH
  const filteredJobs = jobs.filter(
    (job) =>
      job.role.toLowerCase().includes(searchText.toLowerCase()) ||
      job.company.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      {/* TOP */}
      <div className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-700 p-6 rounded-b-[35px] shadow-2xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          Find Your <br /> Dream Job 🚀
        </h1>

        <p className="mt-2 text-white/80 text-lg">
          Discover premium opportunities
        </p>

        {/* SEARCH */}
        <div className="bg-white/15 mt-5 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-xl border border-white/10">
          <FaSearch className="text-white/70 text-lg" />

          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search jobs..."
            className="bg-transparent outline-none w-full placeholder:text-white/60"
          />
        </div>
      </div>

      {/* HOME */}
      {activeTab === "home" && (
        <div className="px-5 pt-7 pb-32 space-y-8">
          {Array.from({
            length: Math.ceil(filteredJobs.length / 5),
          }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-8 overflow-x-auto pb-4 pt-2"
            >
              {filteredJobs.slice(rowIndex * 5, rowIndex * 5 + 5).map((job) => (
                <div
                  key={job.id}
                  className="min-w-[250px] bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-[30px] overflow-hidden border border-white/10 shadow-2xl flex-shrink-0 hover:scale-[1.02] transition duration-300"
                >
                  {/* IMAGE */}
                  <img
                    src={job.image}
                    alt="job"
                    className="w-full h-40 object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-5">
                    {/* TOP */}
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl font-bold">{job.role}</h2>

                      <FaHeart
                        onClick={() => toggleSaveJob(job)}
                        className={`cursor-pointer text-2xl transition ${
                          savedJobs.find((j) => j.id === job.id)
                            ? "text-red-500"
                            : "text-white/40"
                        }`}
                      />
                    </div>

                    {/* COMPANY */}
                    <div className="flex items-center gap-2 text-gray-300 mt-4">
                      <FaBriefcase className="text-violet-400" />
                      <span>{job.company}</span>
                    </div>

                    {/* LOCATION */}
                    <div className="flex items-center gap-2 text-gray-300 mt-2">
                      <FaMapMarkerAlt className="text-pink-400" />
                      <span>{job.location}</span>
                    </div>

                    {/* SALARY */}
                    <h3 className="text-cyan-400 text-2xl font-bold mt-5">
                      {job.salary}
                    </h3>

                    {/* BUTTON */}
                    <button
                      onClick={() => {
                        setSelectedJob(job.role);
                        setShowForm(true);
                      }}
                      className="w-full mt-5 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 py-3 rounded-2xl font-bold hover:opacity-90"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* SEARCH TAB */}
      {activeTab === "search" && (
        <div className="p-5 pb-32">
          <h1 className="text-3xl font-bold mb-6">Search Jobs 🔍</h1>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#111827] p-5 rounded-2xl border border-white/10"
              >
                <h2 className="text-2xl font-bold">{job.role}</h2>

                <p className="text-gray-400 mt-2">
                  {job.company} • {job.location}
                </p>

                <button
                  onClick={() => {
                    setSelectedJob(job.role);
                    setShowForm(true);
                  }}
                  className="mt-4 bg-violet-600 px-5 py-3 rounded-xl"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SAVED */}
      {activeTab === "saved" && (
        <div className="p-5 pb-32">
          <h1 className="text-3xl font-bold">Saved Jobs ❤️</h1>

          <div className="space-y-4 mt-6">
            {savedJobs.length === 0 ? (
              <p className="text-gray-400">No saved jobs</p>
            ) : (
              savedJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#111827] p-5 rounded-2xl border border-white/10"
                >
                  <h2 className="text-2xl font-bold">{job.role}</h2>

                  <p className="text-gray-400 mt-2">
                    {job.company} • {job.location}
                  </p>

                  <p className="text-cyan-400 font-bold mt-3 text-xl">
                    {job.salary}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* PROFILE */}
      {activeTab === "profile" && (
        <div className="p-5 pb-32">
          <div className="bg-gradient-to-br from-violet-700 to-indigo-700 rounded-[35px] p-8 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white object-cover"
            />

            <h1 className="text-4xl font-bold mt-5">Ankita</h1>

            <p className="text-white/80 mt-2 text-lg">Frontend Developer</p>

            <button className="mt-6 bg-white text-violet-700 px-6 py-3 rounded-2xl font-bold">
              Edit Profile
            </button>
          </div>
        </div>
      )}

      {/* APPLY FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-5 z-50">
          <div className="bg-[#111827] w-full max-w-[380px] rounded-[35px] p-6 border border-white/10">
            <h2 className="text-3xl font-bold">Apply for {selectedJob}</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full mt-5 bg-white/10 p-4 rounded-2xl outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full mt-4 bg-white/10 p-4 rounded-2xl outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full mt-4 bg-white/10 p-4 rounded-2xl outline-none"
            />

            <textarea
              placeholder="Why should we hire you?"
              className="w-full mt-4 bg-white/10 p-4 rounded-2xl outline-none h-28"
            ></textarea>

            <button
              onClick={() => {
                alert("Application Submitted 🚀");
                setShowForm(false);
              }}
              className="w-full mt-5 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 p-4 rounded-2xl font-bold"
            >
              Submit Application
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="w-full mt-3 bg-red-500 p-4 rounded-2xl font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* BOTTOM NAV */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[30px] p-5 flex justify-around text-2xl z-50">
        <FaHome
          onClick={() => setActiveTab("home")}
          className={`cursor-pointer ${
            activeTab === "home" ? "text-violet-400 scale-125" : "text-white/60"
          }`}
        />

        <FaSearch
          onClick={() => setActiveTab("search")}
          className={`cursor-pointer ${
            activeTab === "search" ? "text-cyan-400 scale-125" : "text-white/60"
          }`}
        />

        <FaHeart
          onClick={() => setActiveTab("saved")}
          className={`cursor-pointer ${
            activeTab === "saved" ? "text-pink-400 scale-125" : "text-white/60"
          }`}
        />

        <FaUser
          onClick={() => setActiveTab("profile")}
          className={`cursor-pointer ${
            activeTab === "profile"
              ? "text-yellow-400 scale-125"
              : "text-white/60"
          }`}
        />
      </div>
    </div>
  );
}

export default App;
