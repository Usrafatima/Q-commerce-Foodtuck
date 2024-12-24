import Image from "next/image";

import menu from '../../public/menu.png';
import {Checkbox} from "@nextui-org/checkbox";
import tikka from '../../public/tikka.png';
export default function Checkout(){
    return (
        <div className="bg-white ">
         <Image src={menu} alt="Our Menu" className="w-full h-[350px]" />
  
  {/* Content overlay */}
  <div className="-mt-36 text-center">
    {/* Heading */}
    <h1 className="text-white text-2xl md:text-4xl font-bold">
      About Us
    </h1>

    {/* Breadcrumb */}
    <nav className="text-white text-sm md:text-base">
      <span className="text-white font-bold">Home</span>
      <span className="mx-2">{'>'}</span>
      <span className="text-[#FF9F0D] font-bold">Checkout</span>
    </nav>
  </div>

            <div className="p-28  flex flex-col lg:flex-row  mb-10 items-center justify-center lg:items-start mt-48">
              <div className="w-full lg:w-3/5 p-6 sm:p-8 bg-white shadow-md">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-start">
                  Shipping Address
                </h2>
      
                {/* Form */}
                <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Left side Fields */}
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    {/* City Field */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Company
                      </label>
                      <input
                        id="city"
                        type="text"
                        placeholder="Enter your city"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Enter your company"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    {/* Phone Number Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Address 1
                      </label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="Enter your phone number"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    <h1>Billing Address</h1>
                    <Checkbox>Same as Shipping address</Checkbox>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="w-full sm:w-auto px-6 py-2 bg-gray-200">Back to Cart</button>
                      <button className="w-full sm:w-auto px-6 py-2 bg-[#ff9f0d] hover:bg-orange-600">
                        Proceed Shipping
                      </button>
                    </div>
                  </div>
      
                  {/* Right side Fields */}
                  <div className="space-y-4">
                    {/* Username Field */}
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    {/* Address Field */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <input
                        id="address"
                        type="text"
                        placeholder="Enter your address"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    {/* Country Field */}
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        id="country"
                        type="text"
                        placeholder="Choose country"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    {/* Postal Code Field */}
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                        Zip Code
                      </label>
                      <input
                        id="postalCode"
                        type="text"
                        placeholder="Enter your postal code"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      />
                    </div>
                    {/* Gender Field */}
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <select
                        id="gender"
                        className="w-full py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                      >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
      
             
              <div className="space-y-4 p-4 border rounded-md shadow-lg ml-10 w-[424px] h-[700px]">
            <div className="flex flex-row gap-5">
            <Image src={tikka} alt="" className="ml-10"/>
            <div>
                <h1>Chicken Tikka Kabab</h1>
                <p>150 gm net</p>
                <p>50$</p>
                
            </div>
           
            </div>
            <hr className="border-t-2 border-gray-200 " />
            <div className="flex flex-row gap-5">
            <Image src={tikka} alt="" className="ml-10"/>
            <div>
                <h1>Chicken Tikka Kabab</h1>
                <p>150 gm net</p>
                <p>50$</p>
                
            </div>
           
            </div>
            <hr className="border-t-2 border-gray-200 " />
            <div className="flex flex-row gap-5">
            <Image src={tikka} alt="" className="ml-10"/>
            <div>
                <h1>Chicken Tikka Kabab</h1>
                <p>150 gm net</p>
                <p>50$</p>
                
            </div>
           
            </div>
            <hr className="border-t-2 border-gray-200 " />
            <div className="flex flex-row gap-48 ml-12">
                <p>Sub-total</p>
                <p>130$</p>
              </div>
              <div className="flex flex-row gap-48 ml-12">
                <p>SHipping</p>
                <p>Free</p>
              </div>
              <div className="flex flex-row gap-48 ml-12">
                <p>Discount</p>
                <p>25%</p>
              </div>
              <div className="flex flex-row gap-52 ml-12">
                <p>Tax</p>
                <p>54.76$$</p>
              </div>
              <hr className="border-t-2 border-gray-200 " />
              <div className="flex flex-row gap-52 ml-12">
                <p>Total </p>
                <p>432.65$</p>
              </div>
              <div>
              <button className="text-white bg-[#ff9f0d] w-[376px] h-[58px]">Place an Order</button>
              </div>
              </div>
              
              </div>
            </div>
         
    
      );
      
    }