'use client';
import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai"; 
import handbag from "../public/Handbag.png"; 
import Link from "next/link";
import magnify from '../public/magnify.png';
import user from '../public/User.png';
import { AiOutlineClose } from "react-icons/ai";









export default function Header() {
  const [activePage, setActivePage] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/aboutus" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  // Define a type for the navigation items
  type NavItemName = "Home" | "Menu" | "Blog" | "Pages" | "About" | "Shop" | "Contact";

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (itemName: NavItemName) => {
    setActivePage(itemName);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <div className="bg-black">
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-5 lg:px-40">
        <p className="text-[#FF9F0D] text-2xl font-bold">
          Food<span className="text-white">tuck</span>
        </p>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={handleMenuClick}>
            {isMenuOpen ? (
              <AiOutlineClose className="text-white text-3xl" />
            ) : (
              <AiOutlineMenu className="text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row space-x-6 text-white">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`relative cursor-pointer ${activePage === item.name ? "font-bold" : ""}`}
              onClick={() => handleNavItemClick(item.name as NavItemName)}
            >
              <Link href={item.href}>{item.name}</Link>
              {activePage === item.name && (
                <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FF9F0D] rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Search Bar and Icon */}
        <div className="hidden md:flex items-center space-x-6">
          <form className="md:w-[243px] xl:w-[310px]">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full h-[50px] p-4 bg-black border-2 border-[#FF9F0D] text-white rounded-full"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2">
                <AiOutlineSearch className="text-white text-2xl" />
              </button>
            </div>
          </form>
          <Image src={handbag} alt="Handbag Icon" className="w-6 h-6" />
          <a href="/signup">
        <Image src={user} alt="User Icon" className="w-6 h-6" />
        </a>
        <a href="/cart">
        <Image src={handbag} alt="Handbag Icon" className="w-6 h-6" />
        </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col space-y-6 p-6">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer ${activePage === item.name ? "font-bold" : ""}`}
                onClick={() => handleNavItemClick(item.name as NavItemName)}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


 function Header2() {
  return (
    <div className="bg-black w-full h-[90px] flex items-center justify-between px-10">
      {/* Left: Logo */}
      <div className="flex items-center">
        <p className="text-1xl font-bold">
          <span className="text-[#FF9F0D]">Food</span>
          <span className="text-white">tuck</span>
        </p>
      </div>

      {/* Center: Navigation */}
      <div className="flex-grow">
  <ul className="flex justify-center gap-5 text-white">
    <li>
      <Link href="/" className="cursor-pointer hover:text-[#FF9F0D]">
        Home
      </Link>
    </li>
    <li>
      <Link href="/menu" className="cursor-pointer hover:text-[#FF9F0D]">
        Menu
      </Link>
    </li>
    <li>
      <Link href="/blog" className="cursor-pointer hover:text-[#FF9F0D]">
        Blog
      </Link>
    </li>
    <li>
      <Link href="/pages" className="cursor-pointer hover:text-[#FF9F0D]">
        Pages
      </Link>
    </li>
    <li>
      <Link href="/aboutus" className="cursor-pointer hover:text-[#FF9F0D]">
        About
      </Link>
    </li>
    <li>
      <Link href="/shop" className="cursor-pointer hover:text-[#FF9F0D]">
        Shop
      </Link>
    </li>
    <li>
      <Link href="/contact" className="cursor-pointer hover:text-[#FF9F0D]">
        Contact
      </Link>
    </li>
  </ul>
</div>

      {/* Right: Icons */}
      <div className="flex items-center gap-5">
        <Image src={magnify} alt="Search Icon" className="w-6 h-6" />
        <a href="/signup">
        <Image src={user} alt="User Icon" className="w-6 h-6" />
        </a>
        <a href="/cart">
        <Image src={handbag} alt="Handbag Icon" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
 }