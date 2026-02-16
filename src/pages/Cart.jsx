export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center">

      <div className="w-full max-w-md bg-gray-900 pb-32 relative">

        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 px-4 py-4 flex items-center justify-between">
          <span className="material-symbols-outlined text-orange-500 cursor-pointer">
            arrow_back
          </span>
          <h1 className="text-lg font-bold text-orange-500">
            Your Cart
          </h1>
          <div></div>
        </div>

        {/* Cart Items */}
        <div className="px-4 py-6 space-y-4">

          {[
            { name: "Signature Latte", price: 5.5, qty: 1 },
            { name: "Almond Croissant", price: 4.75, qty: 1 },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex justify-between items-center"
            >
              <div>
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">${item.price}</p>
              </div>

              {/* Quantity Controls (inline) */}
              <div className="flex items-center gap-2 bg-gray-700 rounded-full px-2 py-1">
                <button className="text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-600">
                  -
                </button>
                <span className="text-white px-2">{item.qty}</span>
                <button className="text-white w-6 h-6 flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-700">
                  +
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Bill Section */}
        <div className="px-4 space-y-2 text-gray-300">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$10.25</span>
          </div>
          <div className="flex justify-between">
            <span>Platform Fee</span>
            <span>$0.50</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>$0.75</span>
          </div>

          <div className="border-t border-gray-700 my-3"></div>

          <div className="flex justify-between text-white font-bold text-lg">
            <span>Total</span>
            <span>$11.50</span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold">
            Proceed to Checkout →
          </button>
        </div>

      </div>

    </div>
  );
}
