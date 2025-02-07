"use client";
import { Dispatch, SetStateAction } from "react";

interface CategoryBoxProps {
  categories: string[];
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ categories, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition-all duration-200 text-sm sm:text-base"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryBox;
