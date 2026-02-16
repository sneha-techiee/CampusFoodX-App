import React from "react";

const OrderStatus = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-white/5">
        <div className="text-white flex items-center justify-start cursor-pointer">
          <span className="material-symbols-outlined text-orange-500">arrow_back</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            Order #CFX-98210
          </h2>
          <p className="text-primary text-xs font-medium">Campus Delivery</p>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button className="text-white/60 text-sm font-bold leading-normal tracking-[0.015em] hover:text-red-500 transition-colors">
            Cancel
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Cancellation Timer Section */}
        <div className="bg-primary/10 border-b border-primary/20 py-6 px-4 mb-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative flex items-center justify-center">
              {/* Circular Countdown Visual */}
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  className="text-white/10"
                  cx="48"
                  cy="48"
                  fill="transparent"
                  r="44"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <circle
                  className="text-primary"
                  cx="48"
                  cy="48"
                  fill="transparent"
                  r="44"
                  stroke="currentColor"
                  strokeDasharray="276"
                  strokeDashoffset="60"
                  strokeWidth="4"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-2xl font-bold text-white leading-none">24</span>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                  Seconds
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white text-sm font-medium">Cancellation Window Closing</p>
              <p className="text-white/60 text-xs mt-1">
                Change your mind? You can still cancel now.
              </p>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="px-4 mb-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://placeholder.pics/svg/300')" }}
              alt="Dark themed city map showing a delivery route polyline"
            ></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute top-3 left-3 bg-background-dark/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">schedule</span>
              <span className="text-xs font-bold text-white">Arriving in 12-15 mins</span>
            </div>
            <div className="absolute bottom-3 right-3">
              <button className="bg-primary p-2 rounded-full shadow-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">fullscreen</span>
              </button>
            </div>
          </div>
        </div>

        {/* Status Milestones */}
        <div className="px-6 space-y-0">
          {/* Step 1: Preparing */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(231,126,35,0.4)]">
                <span className="material-symbols-outlined">skillet</span>
              </div>
              <div className="status-line active"></div>
            </div>
            <div className="pt-1 pb-6">
              <h3 className="text-white font-bold text-base">Preparing Your Order</h3>
              <p className="text-white/60 text-sm mt-1">
                The kitchen is working its magic. Est. completion at 12:45 PM.
              </p>
            </div>
          </div>
          {/* Step 2: Dispatched */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                <span className="material-symbols-outlined">moped</span>
              </div>
              <div className="status-line"></div>
            </div>
            <div className="pt-1 pb-6">
              <h3 className="text-white/40 font-bold text-base">Dispatched</h3>
              <p className="text-white/30 text-sm mt-1">
                Our rider will pick up your order shortly.
              </p>
            </div>
          </div>
          {/* Step 3: Delivered */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
            </div>
            <div className="pt-1 pb-6">
              <h3 className="text-white/40 font-bold text-base">Delivered</h3>
              <p className="text-white/30 text-sm mt-1">Enjoy your CampusFoodX meal!</p>
            </div>
          </div>
        </div>

        {/* Driver Info Card */}
        <div className="mx-4 mt-4 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary/30"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3_ARo5wlcs8CgyeIXorSF9wPX7Ce84WDLQ160dFMLvwaX1RX3j8um5ymSc872ui4LVFZ4ynrew_3sX2EJIRNTdZ_0EPai_B_2JEpZbkN0qZaSF8U0k4Jrbsyq6WvRAhK-If-HJ50dONReRcd3BHE6g9s6zuHfD8iOanrPiQzF_DRY0BXENaiXYFEdaqA6OUIzr_e4maesKUPwesfvWZWaWX6Rou2D7mESQGiLcB2fE7TAPvfbzqdjzbcsdrIuvV8UtN5GcfFwZntO')",
              }}
            ></div>
            <div>
              <h4 className="text-white font-bold text-sm">Alex Rodriguez</h4>
              <p className="text-white/60 text-xs">Campus Gold Rider ★ 4.9</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">chat_bubble</span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">call</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 w-full z-20">
        <div className="flex gap-2 border-t border-white/5 bg-background-dark/95 backdrop-blur-lg px-4 pb-6 pt-2">
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-white/50" href="#">
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined">home</span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-primary" href="#">
            <div className="flex h-8 items-center justify-center">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                receipt_long
              </span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Orders</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-white/50" href="#">
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined">featured_seasonal_and_gifts</span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Rewards</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-white/50" href="#">
            <div className="flex h-8 items-center justify-center">
              <span className="material-symbols-outlined">person</span>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
