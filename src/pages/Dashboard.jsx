export default function Dashboard() {
  const foodSections = [
    {
      title: "Popular Near You",
      items: [
        { name: "Campus Burger", price: "$5.99", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60" },
        { name: "Pepperoni Pizza", price: "$7.49", image: "https://images.unsplash.com/photo-1548365328-9f547fb0953f?auto=format&fit=crop&w=500&q=60" },
        { name: "Loaded Fries", price: "$4.50", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=500&q=60" },
        { name: "Chicken Wrap", price: "$6.20", image: "https://images.unsplash.com/photo-1604908177522-4326a6a6a8c4?auto=format&fit=crop&w=500&q=60" },
        { name: "Club Sandwich", price: "$4.80", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=60" },
        { name: "Cheese Pasta", price: "$6.99", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=500&q=60" },
      ],
    },
    {
      title: "Top Rated",
      items: [
        { name: "Double Cheese Burger", price: "$6.99", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60" },
        { name: "BBQ Pizza", price: "$8.50", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=500&q=60" },
        { name: "Hot Dog", price: "$3.99", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60" },
        { name: "Spicy Noodles", price: "$5.20", image: "https://images.unsplash.com/photo-1589308078054-832e0a3d3c91?auto=format&fit=crop&w=500&q=60" },
        { name: "Chicken Wings", price: "$7.30", image: "https://images.unsplash.com/photo-1604908554021-8f1b5d0f7fd4?auto=format&fit=crop&w=500&q=60" },
        { name: "Veggie Burger", price: "$5.10", image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd0d?auto=format&fit=crop&w=500&q=60" },
      ],
    },
    {
      title: "Sweet Cravings",
      items: [
        { name: "Chocolate Donut", price: "$2.99", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=60" },
        { name: "Ice Cream Sundae", price: "$3.99", image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=500&q=60" },
        { name: "Brownie", price: "$2.50", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=60" },
        { name: "Pancakes", price: "$4.20", image: "https://images.unsplash.com/photo-1506086679525-9e7f4a4a5e8a?auto=format&fit=crop&w=500&q=60" },
        { name: "Cupcake", price: "$2.80", image: "https://images.unsplash.com/photo-1589307004173-3c5e98c6e8c1?auto=format&fit=crop&w=500&q=60" },
        { name: "Waffles", price: "$4.90", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=60" },
      ],
    },
    {
      title: "Refreshing Drinks",
      items: [
        { name: "Iced Coffee", price: "$3.50", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60" },
        { name: "Strawberry Shake", price: "$4.20", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=60" },
        { name: "Fresh Lemonade", price: "$2.80", image: "https://images.unsplash.com/photo-1524594154908-edd3e5f17b29?auto=format&fit=crop&w=500&q=60" },
        { name: "Cold Brew", price: "$3.90", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=500&q=60" },
        { name: "Mango Smoothie", price: "$4.10", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=60" },
        { name: "Bubble Tea", price: "$4.75", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=500&q=60" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex justify-center bg-black">
      <div className="w-[375px] min-h-screen bg-[#121212] text-white flex flex-col relative">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1f1f1f]">
          <h1 className="text-xl font-bold">CampusFoodX</h1>
          <div className="w-9 h-9 rounded-full bg-[#1f1f1f] flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">
              notifications
            </span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-10 pb-24">

          {/* Greeting */}
          <div>
            <h2 className="text-2xl font-bold">Hey Student 👋</h2>
            <p className="text-gray-400 text-sm">
              Discover meals around your campus
            </p>
          </div>

          {/* Search */}
          <div className="bg-[#1f1f1f] rounded-xl px-4 py-3 flex items-center gap-3">
            <span className="material-symbols-outlined text-gray-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search food, drinks..."
              className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
            />
          </div>

          {/* Food Sections */}
          {foodSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">
                {section.title}
              </h3>

              <div className="flex gap-4 overflow-x-auto pb-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="min-w-[220px] bg-[#1f1f1f] rounded-2xl overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-36 w-full object-cover"
                    />

                    <div className="p-4 space-y-2">
                      <h4 className="text-sm font-semibold">
                        {item.name}
                      </h4>

                      <div className="flex items-center justify-between">
                        <span className="text-orange-500 font-bold text-sm">
                          {item.price}
                        </span>
                        <button className="bg-orange-500 px-3 py-1 rounded-lg text-xs font-semibold">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 w-full bg-[#1a1a1a] border-t border-[#1f1f1f] flex justify-around py-3">
          {[
            { icon: "home", label: "Home" },
            { icon: "receipt_long", label: "Orders" },
            { icon: "person", label: "Profile" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-gray-400 text-xs"
            >
              <span className="material-symbols-outlined text-[22px]">
                {item.icon}
              </span>
              {item.label}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
