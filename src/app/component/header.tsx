"use client";

import { FaShoppingCart, FaUser } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Searchbar from "@/app/component/Searchbar";
import FoodList from "@/app/component/FoodList";
import { useCart } from "@/app/context/CartContext"; // ✅ Import Cart Context

export default function Header() {
  const [activePage, setActivePage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [foodItems, setFoodItems] = useState<any[]>([]);
  const [filteredFoods, setFilteredFoods] = useState<any[]>([]);

  const { cart } = useCart(); // ✅ Get cart data
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // ✅ Calculate total cart count

  useEffect(() => {
    async function fetchFoodData() {
      try {
        const data = await client.fetch('*[_type == "food"]{name, category, description, price, image}');
        setFoodItems(data);
        setFilteredFoods(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    }
    fetchFoodData();
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setFilteredFoods(
      foodItems.filter((food) =>
        food.category.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Blog", href: "/blog" },
    { name: "Chefs", href: "/chef" },
    { name: "About", href: "/aboutus" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-black">
      <div className="flex items-center justify-between px-6 py-5 lg:px-40">
        <Link href={"/"}>
        <p className="text-[#FF9F0D] text-2xl font-bold">
          Food<span className="text-white">tuck</span>
        </p>
        </Link>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* ✅ Cart Icon with Count */}
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-[#FF9F0D] text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/signin">
            <FaUser size={24} color="#FF9F0D" />
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <AiOutlineClose className="text-white text-3xl" />
            ) : (
              <AiOutlineMenu className="text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row space-x-6 text-white text-center xl:text-center mt-3">
          {navItems.map((item) => (
            <li key={item.name} className={`relative cursor-pointer ${activePage === item.name ? "font-bold" : ""}`} onClick={() => setActivePage(item.name)}>
              <Link href={item.href}>{item.name}</Link>
              {activePage === item.name && (
                <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FF9F0D] rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Icons & Search */}
        <div className="hidden md:flex items-center space-x-6">
          <Searchbar searchQuery={searchQuery} handleSearchChange={handleSearchChange} searchResults={filteredFoods} />
          <div className="flex gap-5 items-center mt-6">
            {/* ✅ Cart Icon with Count */}
            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-[#FF9F0D] text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/signin">
              <FaUser size={24} color="#FF9F0D"  />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col space-y-6 p-6">
            {navItems.map((item) => (
              <li key={item.name} className={`cursor-pointer ${activePage === item.name ? "font-bold" : ""}`} onClick={() => setActivePage(item.name)}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display Filtered Foods */}
      <FoodList filteredFoods={filteredFoods} />
    </div>
  );
}
