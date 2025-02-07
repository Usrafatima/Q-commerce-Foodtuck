
// import { Search, ShoppingBag, User } from "lucide-react";
// import { client } from "@/sanity/lib/client";

// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// import ShopProduct from "../app/ShopProduct/[slug]/page";
// export const revalidate = 60; //seconds
// const Shop = async () => {
//   const query = `*[_type == "food"]{
//     _id,
//     foodName,
//     price,
//     description,
//     tags,
//     available,
//     "imageUrl": image.asset->url,
//     "slug": slug.current
//   }`;
//   const foods = await client.fetch(query);


//   return (
//     <div className="bg-white p-6 mt-5">
//       <h1 className="text-2xl font-bold mb-6 flex justify-center">Food</h1>
//       <div className="flex flex-wrap justify-between gap-6">
//         {query.map((food: any) => (
//           <div
//             key={food._id}
//             className="bg-gray-100 rounded-lg shadow-lg p-4 w-[300px] flex flex-col items-center"
//           >
//             <Link href={`/food/${food.slug}`}>
//               <Image
//                 src={food.imageUrl}
//                 alt={food.name}
//                 width={300}
//                 height={200}
//                 className="rounded-lg"
//               />
//               <h2 className="text-lg font-semibold text-gray-800 mt-4">
//                 {food.name}
//               </h2>
//               <p className="text-gray-600 text-sm mt-1">${food.price}</p>
//               <p className="text-gray-500 text-xs mt-2">{food.tags}</p>
//               <p className="text-gray-700 text-sm mt-2">{food.description}</p>
//               <p
//                 className={`text-sm font-medium mt-3 ${
//                   food.available ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {food.available ? "Available" : "Not Available"}
//               </p>
//               <div className="flex flex-row gap-20 mt-4">
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded">
//                   Buy Now
//                 </button>
//                 <button className="px-4 py-2 bg-gray-500 text-white rounded">
//                   Add to Cart
//                 </button>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;
