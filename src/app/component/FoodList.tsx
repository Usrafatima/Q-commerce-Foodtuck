import React from 'react';

interface FoodListProps {
  filteredFoods: { name: string; category: string; price: number; description: string; }[];
}

const FoodList: React.FC<FoodListProps> = ({ filteredFoods }) => {
  // You can use the filteredFoods for other purposes, like filtering, sorting, or any other logic

  // For example:
  const totalPrice = filteredFoods.reduce((acc, food) => acc + food.price, 0);
  console.log("Total Price of Filtered Foods:", totalPrice);

  return (
    <div>
      {/* Nothing is rendered here */}
    </div>
  );
};

export default FoodList;
