'use client'
import React, { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext"; // ✅ Correct import
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai"; // ✅ Better Home icon
import { FcPackage } from "react-icons/fc";
import { FaShoppingBag } from "react-icons/fa";
import { Suspense } from "react";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const sessionId = searchParams.get("session_id");
  const router = useRouter();
  const { cart, removeFromCart } = useCart();
  const [loading, setLoading] = useState(true); // For loading state

  // Use useCallback to memoize clearCart
  const clearCart = useCallback(() => {
    cart.forEach((item) => removeFromCart(item.id));
  }, [cart, removeFromCart]);

  useEffect(() => {
    if (!orderNumber || !sessionId) {
      console.error("Missing order details");
      router.push("/"); // Redirect if order info is missing
    } else {
      clearCart();
      setLoading(false); // Once data is valid, stop loading
    }
  }, [orderNumber, sessionId, router, clearCart]);

  if (loading) {
    return (
      <div className="py-10 flex items-center justify-center">Loading...</div> // Show loading indicator
    );
  }

  return (
    <div className="py-10 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.56 }}
        className="bg-white rounded-2xl shadow-2xl px-8 py-12 max-w-xl w-full text-center"
      >
        {/* ✅ Animated Check Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <CheckIcon className="text-green-500 w-12 h-12" />
        </motion.div>

        {/* ✅ Order Confirmation Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>

        {/* ✅ Order Details */}
        <p className="text-gray-700">
          Thank you for your order. We&apos;re processing it and will ship it soon.
          A confirmation email with your order details will be sent shortly.
        </p>

        <p className="text-gray-700 mt-4">
          <span className="font-semibold">Order Number:</span> {orderNumber}
        </p>

        {/* ✅ Navigation Buttons Inside the Box */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Link
            href={"/"}
            className="flex items-center justify-center px-4 py-3 font-semibold bg-white text-black 
            border border-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            <AiFillHome className="w-5 h-5 mr-2" />
            Home
          </Link>

          <Link
            href={"/orders"}
            className="flex items-center justify-center px-4 py-3 font-semibold bg-white text-black 
            border border-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            <FcPackage className="w-5 h-5 mr-2" />
            Orders
          </Link>

          <Link
            href={"/shop"}
            className="flex items-center justify-center px-4 py-3 font-semibold bg-black text-white 
            rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
          >
            <FaShoppingBag className="w-5 h-5 mr-2" />
            Shop
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default function Success() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  );
}

