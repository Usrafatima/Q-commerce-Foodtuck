import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Searchbar from "@/app/component/Searchbar";

interface FoodItem {
  name: string;
  category: string;
  description?: string; // Optional description
  price: number;
  slug: string; // Added slug
}


const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const data: FoodItem[] = await client.fetch(
          '*[_type == "food"]{name, category, description, price}'
        );
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food items from Sanity:", error);
      }
    };

    fetchFoodData();
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);

    const filteredResults = foodItems.filter(
      (food) =>
        food.name.toLowerCase().includes(query.toLowerCase()) ||
        food.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <Searchbar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        searchResults={searchResults}
      />
    </div>
  );
};

export default App;
