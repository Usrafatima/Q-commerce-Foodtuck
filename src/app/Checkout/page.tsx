"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/app/context/CartContext";
import { Elements } from "@stripe/react-stripe-js";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const CheckoutPage = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phoneNo: "",
    email: "",
    city: "",
    address1: "",
    address2: "",
    postalCode: "",
  });

  const totalAmount = cart.reduce(
    (acc: number, item: { price: number; quantity: number }) => acc + item.price * item.quantity,
    0
  );
  const discount = totalAmount * 0.05;
  const totalAfterDiscount = totalAmount - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      alert("Stripe is not loaded.");
      return;
    }

    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, formData, totalAfterDiscount }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout Page
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      <div className="space-y-4 p-4 border rounded-md shadow-lg bg-white">
        {/* Form Fields */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="First Name"
          className="border p-2 w-full"
        />

        {/* Pricing Summary */}
        <div className="border-t pt-4">
          <p>Subtotal: Rs {totalAmount}</p>
          <p>Discount: 5%</p>
          <p className="font-bold">Total: Rs {totalAfterDiscount}</p>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="mt-4 p-2 w-full bg-blue-500 text-white rounded-md"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

// Wrap in Elements provider
const CheckoutPageWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
};

export default CheckoutPageWrapper;
