// import { FaShoppingCart } from "react-icons/fa";
// import Link from "next/link";
// import { useCart } from "../context/CartContext";

// const CartIcon = () => {
//   const { cart } = useCart();
//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <Link href="/cart" className="relative">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-8 h-8 text-white"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="9" cy="21" r="1" />
//         <circle cx="20" cy="21" r="1" />
//         <path d="M1 1h4l2 14h13l2-10H5" />
//       </svg>

//       {/* Notification Badge */}
//       {cartCount > 0 && (
//         <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
//           {cartCount}
//         </span>
//       )}
//     </Link>
//   );
// };

// export default CartIcon;
