import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Sanity client
import Searchbar from "@/app/component/Searchbar"; // Correct casing

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foodItems, setFoodItems] = useState<any[]>([]); // Food data
  const [searchResults, setSearchResults] = useState<any[]>([]); // Filtered results

  // Fetch food data from Sanity
  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const data = await client.fetch('*[_type == "food"]{name, category, description, price}');
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food items from Sanity:", error);
      }
    };

    fetchFoodData();
  }, []);

  // Handle search query change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);

    const filteredResults = foodItems.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase()) ||
      food.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      {/* Search Bar Component with Results */}
      <Searchbar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        searchResults={searchResults} // Only pass the results here
      />
      
      {/* No need to render FoodList here anymore */}
    </div>
  );
};

export default App;
