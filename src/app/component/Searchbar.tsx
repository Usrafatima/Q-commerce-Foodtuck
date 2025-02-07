import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link component from Next.js
import client from "@/sanity/lib/client"; 
import magnify from '../public/magnify.png'; 
import Image from "next/image";

interface SearchBarProps {
  searchQuery: string;
  handleSearchChange: (query: string) => void;
  searchResults: { name: string; category: string; description?: string; price: number; slug: string }[]; // Ensure the search result includes slug
}

const Searchbar: React.FC<SearchBarProps> = ({ searchQuery, handleSearchChange, searchResults }) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const [foods, setFoods] = useState<{ name: string; category: string; description?: string; price: number; slug: string }[]>([]);

  // Fetch foods data
  useEffect(() => {
    const fetchFoods = async () => {
      const query = `*[_type == "food"]{
        _id,
        name,
        price,
        description,
        category,
        "slug": slug.current
      }`;

      try {
        const fetchedFoods = await client.fetch(query);
        setFoods(fetchedFoods); 
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods(); 
  }, []);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    handleSearchChange(value); 
  };

  // Handle search button click
  const handleSearchClick = () => {
    handleSearchChange(inputValue);
  };

  // Filter search results based on input value
  const filteredResults = foods.filter(food =>
    food.name && food.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  

  return (
    <div className="relative flex flex-col items-center mt-6">
      {/* Search Input */}
      <div className="relative w-64">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search food items..."
          className="p-3 pr-10 w-full bg-transparent border-2 border-[#FF9F0D] text-white rounded-full focus:outline-none focus:ring-2"
        />
      
        <Image
          src={magnify}
          alt="Search"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
          onClick={handleSearchClick}
        />
      </div>

     
      {inputValue && filteredResults.length > 0 && (
        <ul className="mt-2 bg-gray-800 rounded-lg w-full max-h-40 overflow-y-auto absolute z-10 top-full left-0">
          {filteredResults.map((food, index) => (
            <Link href={`/product/${food.slug}`} key={index} passHref>
              <li className="text-white p-2 border-b border-gray-700 hover:bg-gray-600 cursor-pointer">
                <div>
                  <strong>{food.name}</strong> - {food.category} - ${food.price}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
