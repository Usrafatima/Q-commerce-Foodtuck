"use client";

import { useCart } from "../../../app/context/CartContext";
import toast from "react-hot-toast"; // ✅ Import toast

const AddToCartButton = ({ food }: { food: { id: string; name: string; price: number; image: string } }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      quantity: 1,
      imageUrl: "",
      description: "",
    });

    toast.success(`${food.name} added to cart!`); // ✅ Show toast here too
  };

  return (
    <div className="w-full sm:w-auto">
      <button
        onClick={handleAddToCart}
        className="w-full sm:w-[130px] text-center h-[40px] bg-[#FF9F0D] text-white shadow-md hover:scale-105 transition-all duration-300 ease-in-out active:scale-95 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
