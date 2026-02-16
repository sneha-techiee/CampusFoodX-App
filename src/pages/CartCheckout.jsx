import React from "react";

const CartCheckout = () => {
  const cartItems = [
    {
      name: "Paneer Tikka Roll",
      desc: "Extra Mint Chutney, No Onions",
      price: "₹120",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUlNpvsw33h-vKtlqHBaOACnTLYYnphbBqCCi5a3tKcHZ_yDMvlhmwZ7tdvFCjmv-xUaBEpQ4SOS-YCQXboVjZeAGscL5tAunfZsCMddJWDDi6D0wK5MSx85y-kl0SO8K_wUwjyY_0VTZy8cZvvUB0LRB3lJrtbz-iSOTed45l_EO59uAn-jOOzgEauUcgvDQjVGt8HgmwoeRf3_QPD3KnpyjcxCRnZwlxYACRxndT4up2b04Xy9orLDhNQnMN5hVyhS6YmZGRv_ao",
      qty: 1
    },
    {
      name: "Campus Monster Burger",
      desc: "Double Patty, Extra Cheese",
      price: "₹370",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOArxVmK7e_6upu0irEBrZjzMmkg1BhgwihNWAtELJA6WulyXYP5OsEt-C_a7knJbYCKzexNwBvSnt39nlwDA36qo-6jDpCrr1LJNmzfQLUfylECFnNLG5Q5KA-fgaMBvb9lVi33frH33k9TIWu_Fggza7blCbZ1ojpCEUEJGIB48WiiySuFpErYmay6YM9tK3JUByCooh4i42fv74MQVacA5QZqyvyb9xm7Y6A5egxBnIOxWa8DfhCIuP-vPCrjMBRw1zuuYpZPjP",
      qty: 2
    },
    {
      name: "Cold Coffee (Large)",
      desc: "Standard Sweetness",
      price: "₹95",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrmZ1ZQAtpP1T7nBLEm6ty-S2F_5C7zw150MiDAMi1WyupdFq6_1U6QHA-0oYcmwKxCDSadsriRC6naUKHdfaa9AjOaIQgQMlPApSQLid3rrdBKjo7zNBIyeHa-92dIAoHd-MNVO7wdTxkOQBPWRUteKJ4YbJCUgCS6kXMizBk0uO0GN8SF3xqNb4iN8wI_X45avVHoP07WbhGsIcUE_TSHozgceNGOVo0bDxypzLEAvslKEclLX03gf23XPBkxrl6LfxkhrIMqnsa",
      qty: 1
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-20 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center p-1 rounded-full hover:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined text-orange-500">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold tracking-tight text-orange-500">Review Order</h1>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs font-medium text-orange-500">Table 12</span>
        </div>
      </header>

      {/* Progress Stepper */}
      <div className="flex w-full items-center justify-center gap-4 py-6 bg-gray-900">
        <div className="flex flex-col items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,107,0,0.6)]"></div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-orange-500">Cart</span>
        </div>
        <div className="h-[1px] w-8 bg-gray-700"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-gray-700"></div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Address</span>
        </div>
        <div className="h-[1px] w-8 bg-gray-700"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-gray-700"></div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Payment</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-40 overflow-y-auto hide-scrollbar max-w-2xl mx-auto w-full">
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Your Tray</h2>

          {/* Cart Items */}
          <div className="space-y-3">
            {cartItems.map((item, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-3 flex items-center gap-4 border border-gray-700 shadow-sm">
                <div className="h-20 w-20 rounded-lg bg-cover bg-center shrink-0" style={{backgroundImage: `url(${item.img})`}}></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-semibold truncate pr-2">{item.name}</h3>
                    <span className="text-base font-bold text-orange-500">{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center bg-gray-700 rounded-full px-1 py-1">
                      <button className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-800 shadow-sm hover:text-orange-500 transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="mx-3 text-sm font-bold">{item.qty}</span>
                      <button className="h-7 w-7 flex items-center justify-center rounded-full bg-gray-800 shadow-sm hover:text-orange-500 transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button className="text-gray-500 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Sticky Footer / CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-8 pt-4 bg-gray-900 border-t border-gray-800 flex justify-center">
        <button className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-5 rounded-xl shadow-lg transition-all active:scale-[0.98]">
          <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
          <span className="tracking-wide text-sm">PAY NOW (UPI)</span>
        </button>
      </div>
    </div>
  );
};

export default CartCheckout;
