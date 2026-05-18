{
  /* APPLY POPUP */
}

{
  showForm && (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-5">
      <div className="bg-[#1e293b] w-full max-w-[350px] p-6 rounded-[30px]">
        <h2 className="text-2xl font-bold">Apply for {selectedJob}</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mt-5 p-4 rounded-2xl bg-white/10 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mt-4 p-4 rounded-2xl bg-white/10 outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full mt-4 p-4 rounded-2xl bg-white/10 outline-none"
        />

        <textarea
          placeholder="Why should we hire you?"
          className="w-full mt-4 p-4 rounded-2xl bg-white/10 outline-none h-28 resize-none"
        />

        <button
          onClick={() => {
            alert("Application Submitted 🚀");

            setShowForm(false);
          }}
          className="w-full mt-5 bg-violet-500 p-4 rounded-2xl font-semibold"
        >
          Submit Application
        </button>

        <button
          onClick={() => setShowForm(false)}
          className="w-full mt-3 bg-red-500 p-4 rounded-2xl font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

{
  /* BOTTOM NAV */
}

<div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[390px] bg-white/10 backdrop-blur-xl rounded-[30px] p-5 flex justify-around text-2xl border border-white/10">
  <FaHome
    onClick={() => setActiveTab("home")}
    className={`cursor-pointer ${
      activeTab === "home" ? "text-violet-400" : ""
    }`}
  />

  <FaSearch
    onClick={() => setActiveTab("search")}
    className={`cursor-pointer ${
      activeTab === "search" ? "text-violet-400" : ""
    }`}
  />

  <FaHeart
    onClick={() => setActiveTab("saved")}
    className={`cursor-pointer ${
      activeTab === "saved" ? "text-violet-400" : ""
    }`}
  />

  <FaUser
    onClick={() => setActiveTab("profile")}
    className={`cursor-pointer ${
      activeTab === "profile" ? "text-violet-400" : ""
    }`}
  />
</div>;
