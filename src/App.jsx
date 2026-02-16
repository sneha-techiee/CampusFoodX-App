import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import your real pages
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import CartCheckout from "./pages/CartCheckout";
import OrderStatus from "./pages/OrderStatus";

export default function App() {
  return (
    <Router>
      {/* Temporary top nav for testing pages */}
      <div className="flex gap-2 p-4 bg-gray-800 text-white sticky top-0 z-20">
        <Link to="/">Welcome</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/order-status">OrderStatus</Link>
      </div>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CartCheckout />} />
        <Route path="/order-status" element={<OrderStatus />} />
      </Routes>
    </Router>
  );
}
