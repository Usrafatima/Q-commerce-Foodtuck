"use client";

import Image from "next/image";
import { useCart } from "../../../app/context/CartContext";
import Link from "next/link";
import menu from "@/app/public/menu.png";
import { useState } from "react";
import { createCheckoutSession, Metadata } from "./actions/createCheckoutSession";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const formatCurrency = (amount: number) => `Rs ${amount.toFixed(2)}`;

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const grandTotal = subtotal.toFixed(2);

  const handleCheckout = async () => {
    setShowModal(true); 
  };

  const handleCOD = () => {
    setShowModal(false);
    setTimeout(() => {
      router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id=COD&orderNumber=12345`);
    }, 1000); // 1 second delay
  };
  
  

  const handleCardPayment = async () => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerNumber: 0,
        customerEmail: "customer@example.com", 
      };

      const formattedCart = cart.map((item) => ({
        product: {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          _id: item.id,
          images: item.image ? [item.image] : [],
        },
        quantity: item.quantity,
      }));

      const checkoutUrl = await createCheckoutSession(formattedCart, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <div className="bg-white text-black">
      <Image src={menu} alt="Our Menu" className="w-full h-auto object-cover" />
      <div className="-mt-20 flex flex-col items-center text-center space-y-2">
        <h1 className="text-white text-2xl md:text-4xl font-bold">Cart</h1>
        <nav className="text-white text-sm md:text-base">
          <span className="text-gray-400">Home</span>
          <span className="mx-2">{'>'}</span>
          <span className="font-bold">Cart</span>
        </nav>
      </div>

      <div className="p-4 sm:p-8">
        {cart.length === 0 ? (
          <p className="text-center text-2xl p-20">Your cart is empty. Please add food items.</p>
        ) : (
          <div className="max-w-6xl mx-auto space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-lg shadow w-full">
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <Image src={item.image} alt={item.name} width={100} height={100} className="w-16 h-16 object-cover rounded" />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Price: {formatCurrency(item.price)}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600 font-semibold">Total: {formatCurrency(item.price * item.quantity)}</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-4 sm:mt-0">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-4 py-2 bg-gray-200 text-black rounded" disabled={item.quantity <= 1}>-</button>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-4 py-2 bg-gray-200 text-black rounded">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700">Remove</button>
                </div>
              </div>
            ))}

            <button onClick={handleCheckout} disabled={loading} className="w-full mt-4 bg-orange-500 text-white py-3 rounded text-lg hover:bg-orange-600 transition">
              {loading ? "Processing..." : "Checkout"}
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
      <h2 className="text-xl font-semibold mb-4">Choose Payment Method</h2>
      <button onClick={handleCOD} className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700 mb-3">
        Cash on Delivery (COD)
      </button>
      <button onClick={handleCardPayment} className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700 ">
        Pay with Card 
      </button>
      <button onClick={() => setShowModal(false)} className="w-full mt-4 bg-red-700 text-white py-2 rounded hover:bg-red-600">
        Cancel
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default CartPage;
