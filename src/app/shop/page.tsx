"use client";

import { useState, useEffect } from "react";
import AddToCartButton from "../component/AddToCartButton/AddToCartButton";
import Image from "next/image";
import client from "@/sanity/lib/client";
import Link from "next/link";

interface FoodItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  tags: string[];
  available: boolean;
  imageUrl: string;
  slug: string;
}

const Shop = () => {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const query = `*[_type == "food"]{
          _id,
          name,
          price,
          description,
          tags,
          available,
          "imageUrl": image.asset->url,
          "slug": slug.current
        }`;

        const data: FoodItem[] = await client.fetch(query);
        setFoods(data);
      } catch (err) {
        setError("Failed to fetch food items.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (foods.length === 0) return <p>No foods available.</p>;

  // ✅ Define filteredFoods before rendering
  const filteredFoods = foods.filter((food) => food.available);

  return (
    <div className="bg-white p-6 mt-5">
      <h1 className="text-2xl font-bold mb-6 text-center">Food</h1>

      {filteredFoods.length === 0 && <p className="text-center">No items found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoods.map((food: FoodItem) => (
          <div key={food._id} className="bg-gray-100 shadow-lg p-4 flex flex-col items-center h-full">
            <Link href={`/food/${food.slug}`} className="text-center">
              <Image src={food.imageUrl} alt={food.name} width={400} height={200} className="rounded-lg" />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">{food.name}</h2>
            </Link>

            <p className="text-black text-lg font-bold mt-1">Rs {food.price}</p>
            <p className="text-black text-xs mt-2">{food.tags.join(", ")}</p>
            <p className="text-gray-700 text-sm mt-2">{food.description}</p>
            <p className={`text-sm font-medium mt-3 ${food.available ? "text-green-600" : "text-red-600"}`}>
              {food.available ? "Available" : "Not Available"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center w-full mt-4">
              <Link href={`/product/${food.slug}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-[130px] text-center h-[40px] bg-[#008080] text-white shadow-md hover:scale-105 transition-all duration-300 ease-in-out active:scale-95 rounded-md">
                  View Detail
                </button>
              </Link>

              <div className="w-full sm:w-auto flex justify-center">
                <AddToCartButton 
                  food={{
                    id: food._id,
                    name: food.name,
                    price: food.price,
                    image: food.imageUrl || "/default-image.jpeg",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;



  // return (
  //   <div className="min-h-screen bg-white">
  //     <header className="top-0 left-0 right-0 z-50">
  //       <nav className="bg-black px-4 md:px-6">
  //         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
  //           {/* Logo */}
  //           <Link
  //             href="/"
  //             className="flex items-center text-xl font-bold text-white"
  //           >
  //             Food<span className="text-orange-500">tuck</span>
  //           </Link>

  //           {/* Desktop Navigation */}
  //           <div className="hidden items-center gap-8 md:flex">
  //             <Link href="/" className="text-white hover:text-orange-500">
  //               Home
  //             </Link>
  //             <Link href="/menu" className="text-white hover:text-orange-500">
  //               Menu
  //             </Link>
  //             <Link href="/blog" className="text-white hover:text-orange-500">
  //               Blog
  //             </Link>
  //             <Link href="/pages" className="text-white hover:text-orange-500">
  //               Pages
  //             </Link>
  //             <Link href="/about" className="text-white hover:text-orange-500">
  //               About
  //             </Link>
  //             <Link href="/shop" className=" text-orange-500">
  //               Shop
  //             </Link>
  //             <Link
  //               href="/contact"
  //               className="text-white hover:text-orange-500"
  //             >
  //               Contact
  //             </Link>
  //           </div>

  //           {/* Right Icons */}
  //           <div className="flex items-center gap-4">
  //             <Link href="/error">
  //               <button className="text-white hover:text-orange-500">
  //                 <Search className=" h-5 w-5" />
  //                 <span className="sr-only">Search</span>
  //               </button>
  //             </Link>
  //             <Link href="/account">
  //               <button className="text-white hover:text-orange-500">
  //                 <User className="h-5 w-5" />
  //                 <span className="sr-only">Account</span>
  //               </button>
  //             </Link>
  //             <Link href="/cart">
  //               <button className="text-white hover:text-orange-500">
  //                 <ShoppingBag className="h-5 w-5" />
  //                 <span className="sr-only">Cart</span>
  //               </button>
  //             </Link>
  //           </div>
  //         </div>
  //       </nav>

  //       {/* Hero Section */}
  //       <div
  //         className="relative h-[300px] w-full bg-cover bg-center"
  //         style={{ backgroundImage: `url('/home-pic-1.png')` }}
  //       >
  //         <div className="absolute inset-0 bg-black/50" />
  //         <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
  //           <h1 className="mb-4 text-5xl font-bold text-white">Our Shop</h1>
  //           <div className="flex items-center gap-2 text-lg">
  //             <Link href="/" className="text-white hover:text-orange-500">
  //               Home
  //             </Link>
  //             <span className="text-white">&gt;</span>
  //             <span className="text-orange-500">Shop</span>
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //     {/* navbar end */}

  //     {/*Content Start */}
  //     <div className="min-h-screen mt-5 mb-5">
  //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  //         {/* Sort and Filter Section */}
  //         <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
  //           <div className="flex flex-wrap gap-2 items-center">
  //             <p className="p-2">Sort By:</p>
  //             <select className="border text-gray-600 p-2 w-[180px] rounded-md">
  //               <option>Newest</option>
  //               <option>Oldest</option>
  //             </select>
  //             <p className="p-2">Show:</p>
  //             <select className="border text-gray-600 p-2 w-[180px] rounded-md">
  //               <option>Default</option>
  //               <option>Popular</option>
  //             </select>

       
  //           </div>
  //           <div className="flex items-center w-full md:w-[350px] h-[50px] rounded-md overflow-hidden">
  //             <input
  //               type="text"
  //               placeholder="Search Your Product"
  //               className="flex-grow px-4 py-2 border-[1px] bg-transparent focus:outline-none"
  //             />
  //             <Link href="/error">
  //               <button className="px-4 py-2 bg-[#FF9F0D] h-[43px] hover:text-orange-500 text-white font-medium">
  //                 <Search />
  //               </button>
  //             </Link>
  //           </div>
  //         </div>
  //        {/* Foods Products */}
  //         <div className="mt-[20px] mb-[20px] lg:px-[20px]">
          
         
            {/* <product foods={foods} /> */}
         

         

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Shop;

//       {/* Side List (Moved to the right side) */}
//       <div className="w-[312px] p-4 border-2 border-gray-300 rounded-lg hidden xl:block">
//         {/* Search Bar */}
//         <div className="flex items-center mb-5">
//           <form className="w-full">
//             <div className="relative border-2 border-[#FF9F0D] rounded-lg">
//               <input
//                 type="search"
//                 placeholder="Search Product"
//                 className="w-full h-[50px] p-4 bg-white text-black focus:outline-none rounded-lg"
//               />
//               <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2">
//                 <div className="w-[80px] h-[54px] flex justify-center items-center border-2 border-[#FF9F0D] bg-[#FF9F0D] rounded-lg">
//                   <AiOutlineSearch className="text-white text-2xl" />
//                 </div>
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Categories */}
//         <div className="mb-5">
//           <h1 className="font-bold">Category</h1>
//           <div className="flex flex-col gap-2">
//             {["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thai", "Non Veg", "Uncategorized"].map((item) => (
//               <Checkbox key={item}>
//                 <p>{item}</p>
//               </Checkbox>
//             ))}
//           </div>
//         </div>

//         {/* Filter by Price */}
//         <h1 className="font-bold text-2xl">Filter by Price</h1>
//         <Slider />
//         <div className="flex justify-between text-gray-400 mt-3">
//           <p>From $0 to $8000</p>
//           <button className="text-[#FF9F0D] font-medium">Filter</button>
//         </div>

//         {/* Latest Products */}
//         <div className="mt-5">
//           <h1 className="font-bold text-2xl">Latest Products</h1>
//           {["Pizza", "Cupcake", "Cookies", "Burger"].map((product, index) => (
//             <div key={index} className="flex items-center gap-4 mt-5">
//               <Image src={cheese} alt={product} className="w-12 h-12 rounded-lg" />
//               <div className="flex flex-col">
//                 <h1 className="text-sm font-medium">{product}</h1>
//                 <Image src={star} alt="Rating" className="w-16 h-4" />
//                 <p className="text-gray-500 text-sm">$35.00</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         Product Tags
// {/* Product Tags */}
// <div className="mt-5">
//   <h1 className="font-bold text-2xl">Product Tags</h1>
//   {[["Services", "Our Menu", "Pizza"], ["Cupcake", "Burger", "Cookies"], ["Our Shop", "Tandoori Chicken"]].map((row, rowIndex) => (
//     <div key={rowIndex} className="flex gap-2 mt-2">
//       {row.map((tag) => (
//         <div key={tag} className="text-center">
//           <p className="text-sm">{tag}</p>
//           <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
//         </div>
//       ))}
//     </div>
//   ))}
// </div>
// )
// }





{/* import Image from 'next/image';
import menu from '../public/menu.png';
import firstpic from '../public/firstpic.png';
import seconpic from '../public/secondpic.png';
import third from '../public/thrid.png';
import fourth from '../public/fourth.png';
import sixth from '../public/sixth.png';
import seventh from '../public/seventh.png';
import eight from '../public/eight.png';
import nine from '../public/nine.png';
import ten from '../public/ten.png';
import { AiOutlineSearch } from "react-icons/ai";
import {Checkbox} from "@nextui-org/checkbox";
import {Slider} from "@nextui-org/slider";
import shopbox from '../public/shopbox.png';
import star from '../public/star.png';
import cheese from '../public/cheeseborad.png';
import pagination from '../public/pagination.png';
import Bestselling from '../component/ui/bestselling';
import Foods from "@/sanity/schemaTypes/foods"; */}
{/* import page from "../page"; */}



