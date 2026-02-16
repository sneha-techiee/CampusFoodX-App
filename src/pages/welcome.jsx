export default function Welcome() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      {/* Phone Container */}
      <div className="w-full max-w-sm min-h-screen bg-black text-white flex flex-col justify-between px-6 py-10">

        {/* Top Logo */}
        <div className="flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-orange-500 text-3xl">
            restaurant
          </span>
          <h1 className="text-2xl font-bold">CampusFoodX</h1>
        </div>

        {/* Center Content */}
        <div className="text-center">
          <div className="mb-8">
            <span className="material-symbols-outlined text-orange-500 text-6xl">
              local_bar
            </span>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Campus Dining <span className="text-orange-500">Redefined</span>
          </h2>

          <p className="text-white/70 text-lg">
            Fast, Secure Campus Food & More
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">

          <button className="h-14 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition">
            Log In
          </button>

          <button className="h-14 border-2 border-orange-500 rounded-lg font-semibold hover:bg-white/10 transition">
            Create Account
          </button>

          <button className="text-sm text-white/60 hover:text-white transition">
            Continue as Guest
          </button>

        </div>

      </div>

    </div>
  );
}
