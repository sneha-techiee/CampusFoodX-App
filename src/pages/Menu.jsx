export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center">
      
      {/* Phone Container */}
      <div className="w-full max-w-md bg-gray-900 relative pb-28">

        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between z-10">
          <span className="material-symbols-outlined cursor-pointer text-orange-500">
            arrow_back
          </span>
          <h1 className="font-bold text-lg text-orange-500">
            The Daily Grind
          </h1>
          <span className="material-symbols-outlined cursor-pointer text-orange-500">
            favorite
          </span>
        </div>

        {/* Hero */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
          }}
        ></div>

        {/* Info Card */}
        <div className="bg-gray-800 p-4">
          <p className="font-bold text-lg text-white">
            ⭐ 4.8 • Coffee & Bakery
          </p>
          <p className="text-sm text-gray-400">Open until 8:00 PM</p>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto px-4 py-4">
          {["All", "Espresso", "Pastries", "Cold Brew", "Sandwiches"].map(
            (cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  i === 0
                    ? "bg-orange-600 text-white"
                    : "bg-gray-800 text-gray-300 border border-gray-700"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Menu Items */}
        <div className="px-4 space-y-4">
          {[
            {
              name: "Signature Latte",
              price: "$5.50",
              img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            },
            {
              name: "Almond Croissant",
              price: "$4.75",
              img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
            },
            {
              name: "Cold Brew",
              price: "$6.25",
              img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 bg-gray-800 p-3 rounded-xl border border-gray-700"
            >
              <div
                className="h-24 w-24 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>

              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>
                  <span className="font-bold text-orange-500">
                    {item.price}
                  </span>
                </div>

                <button className="self-end bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded-lg text-xs">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Cart */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400">2 Items</p>
              <p className="font-bold text-orange-500">$10.25</p>
            </div>

            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl">
              View Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
