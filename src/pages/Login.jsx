export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0a0a0a]">
      
      {/* Phone Container */}
      <div className="w-[375px] min-h-screen bg-[#0a0a0a] text-white px-6 py-6 relative flex flex-col">

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="size-10 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#333]">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e77e23] rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">
                fastfood
              </span>
            </div>
            <span className="font-bold text-lg">CampusFoodX</span>
          </div>

          <div className="w-10"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400 text-sm">
            Enter your campus credentials to start ordering.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Mobile */}
          <div>
            <label className="text-sm text-gray-300">Mobile Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full mt-2 h-12 rounded-xl bg-[#1a1a1a] border border-[#333] px-4 text-white focus:outline-none focus:border-[#e77e23]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">University Email</label>
            <input
              type="email"
              placeholder="name@college.edu"
              className="w-full mt-2 h-12 rounded-xl bg-[#1a1a1a] border border-[#333] px-4 text-white focus:outline-none focus:border-[#e77e23]"
            />
            <p className="text-xs text-gray-500 mt-1">
              Verified .edu domain required
            </p>
          </div>

          {/* Send OTP */}
          <button className="w-full bg-[#e77e23] hover:opacity-90 transition py-3 rounded-xl font-bold mt-4">
            Send OTP
          </button>

          {/* OTP */}
          <div className="flex justify-between gap-2 mt-6">
            <input className="w-12 h-12 text-center rounded-xl bg-[#1a1a1a] border border-[#333]" maxLength="1" />
            <input className="w-12 h-12 text-center rounded-xl bg-[#1a1a1a] border border-[#333]" maxLength="1" />
            <input className="w-12 h-12 text-center rounded-xl bg-[#1a1a1a] border border-[#333]" maxLength="1" />
            <input className="w-12 h-12 text-center rounded-xl bg-[#1a1a1a] border border-[#333]" maxLength="1" />
          </div>
        </div>

      </div>
    </div>
  );
}
