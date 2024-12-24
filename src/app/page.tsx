import Image from "next/image";
import hero from './public/hero.png';
import check from './public/check.png';
import pic1 from './public/pic1.svg';
import pic2 from './public/pic2.svg';
import pic3 from './public/pic3.svg';
import mushroom from './public/mushroom.svg';
import burger from './public/burger.svg';
import chicken from './public/chicksalad.svg'
import donut  from './public/donuts.svg';
import Hamburger from './public/Hamburger.png';
import Cookie from './public/Cookie.png';
import Wine from './public/Wine.png';

import leaf from './public/leafs.svg';
import leafplate from './public/leafplate.svg';
import fryballs from './public/fryballs.svg';
import chef1 from './public/chef1.png';
import chef2 from './public/chef2.png';
import chef3 from './public/chef3.png';
import chef4 from './public/chef4.png';

import ellipse from './public/Ellipse 6.png';
import quotes from './public/Quotes.png';

import restu from './public/restu banner.png';
import burger2 from './public/burger2.png';
import icon from './public/Icon.png';
import pizza from './public/pizza.png';
import taco from './public/taco.png';
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";


export default function Home() {

  return (
    <div>
<div className="max-w-screen-lg mx-auto px-4 md:px-24 pt-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 lg:gap-5 ">
  {/* Section 1: Its Quick & Amusing */}
  <div className="text-section text-center md:text-start md:w-1/2 ">
    <h1 className="text-[#FF9F0D] font-great-vibes text-4xl">Its Quick & Amusing</h1>
    <p className="text-5xl font-bold mt-4">
      <span className="text-[#FF9F0D]">Th</span>
      <span className="text-white">e</span>
      <span className="text-white"> Art of Speed Food Quality</span>
    </p>
    <p className="text-white pt-7">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas, et, perferendis iste suscipit ratione commodi.
    </p>
    <div className="pt-5">
      <button className="border-2 bg-[#FF9F0D] text-white w-[190px] h-[60px] rounded-full">
        See Menu
      </button>
    </div>
  </div>

  {/* Right Side: Image */}
  <div className="md:w-1/2 flex justify-center">
    <Image
      src={hero}
      alt="Hero Image"
      width={877.8}
      height={670}
      className="object-cover w-full h-auto max-w-md"
    />
  </div>
</div>

<div className="max-w-screen-lg mx-auto px-4 md:px-24 pt-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 lg:gap-24">
  {/* Section 2: About Us */}
  <div className="text-section text-center md:text-start md:w-1/2">
    <h1 className="text-[#FF9F0D] font-great-vibes text-4xl">About Us</h1>
    <p className="text-4xl font-bold mt-4">
      <span className="text-[#FF9F0D]">We</span>
      <span className="text-white"> Create the Best Foody Product</span>
    </p>
    <p className="text-white w-full md:w-[450px] pt-5 mx-auto md:mx-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    <div className="pt-5">
      <p className="flex items-center justify-center md:justify-start space-x-2">
        <Image src={check} alt="Check Icon" />
        <span className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </p>
      <p className="flex items-center justify-center md:justify-start space-x-2 pt-5">
        <Image src={check} alt="Check Icon" />
        <span className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </p>
      <p className="flex items-center justify-center md:justify-start space-x-2 pt-5">
        <Image src={check} alt="Check Icon" />
        <span className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </p>
    </div>
    <div className="pt-5">
      <button className="border-2 bg-[#FF9F0D] text-white w-[190px] h-[60px] rounded-full">
        Read More
      </button>
    </div>
  </div>

  {/* Right Side: Image Grid */}
  <div className="md:w-1/2 grid grid-rows-2 grid-cols-2 gap-4 lg:gap-8 mt-8 md:mt-0">
    {/* Large Image */}
    <div className="row-span-1 col-span-2">
      <Image
        src={pic1}
        alt="Large Image"
        className="w-full h-[200px] sm:h-[330px] object-cover"
      />
    </div>
    {/* First Small Image */}
    <div>
      <Image
        src={pic2}
        alt="Small Image 1"
        className="w-full h-[120px] sm:h-[190px] object-cover"
      />
    </div>
    {/* Second Small Image */}
    <div>
      <Image
        src={pic3}
        alt="Small Image 2"
        className="w-full h-[120px] sm:h-[190px] object-cover"
      />
    </div>
  </div>
</div>

<div className="hidden text-section xl:flex flex-col ml-[300px] mt-28 lg:block">
       <h1 className="text-[#FF9F0D] pt-0 font-great-vibes text-4xl">Why Choose us</h1>
       <p className="text-4xl font-bold">
         <span className="text-[#FF9F0D] text-4xl">Ex</span>
         
         <span className="text-white w-[15%] text-4xl">tra Ordinary taste And Experienced</span>
      </p>
      <p className="text-white w-[450px] pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. 
      Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-4 mt-5 space-x-5">
  <div className="relative w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center border-2">
    <Image 
      src={Hamburger} 
      alt="Hamburger" 
      width={56} 
      height={56} 
    />
    <p className="absolute -bottom-6 text-white text-center w-full">Fast Food</p>
  </div>
  
  <div className="relative w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center border-2 ">
    <Image 
      src={Cookie} 
      alt="Cookie" 
      width={56} 
      height={56} 
    />
    <p className="absolute -bottom-6 text-white text-center w-full">Lunch</p>
  </div>
  
  <div className="relative w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center border-2">
    <Image 
      src={Wine} 
      alt="Wine" 
      width={56} 
      height={56} 
    />
    <p className="absolute -bottom-6 text-white text-center w-full">Dinner</p>
  </div>
</div>

   </div>
   <div className="flex mt-5">
  <div className="border-2 bg-white mt-8 w-[374px] h-[93px] flex items-center px-4">
    <span className="text-[#FF9F0D] text-4xl mr-4">30+</span>
    <div className="flex flex-col">
      <span className="text-2xl">Years of</span>
      <span className="text-2xl font-bold">Experienced</span>
    </div>
  </div>
</div>

  </div>
  {/* Menu */ }
  <div className="text-section text-center mt-20">
  <h1 className="text-[#FF9F0D] font-great-vibes text-4xl">Choose & pick</h1>
  <p className="text-4xl font-bold">
    <span className="text-[#FF9F0D] text-4xl">Fr</span>
    <span className="text-white w-[15%] text-4xl text-center">om Our Menu</span>
  </p>

  {/* Category Menu */}
  <div>
    <ul className="text-white flex flex-col sm:flex-row sm:justify-center sm:space-x-10 mt-10">
      <li className="text-[#FF9F0D]">Breakfast</li>
      <li>Lunch</li>
      <li>Dinner</li>
      <li>Dessert</li>
      <li>Drink</li>
      <li>Snack</li>
      <li>Soups</li>
    </ul>
  </div>

  {/* Menu items */}
  <div className="relative ml-64 mt-16 hidden xl:block">
    {/* Hide image on small screens */}
    <div className="absolute -left-16 top-0 hidden sm:block">
      <Image src={leaf} alt="Leaf" />
    </div>

    <div className="left-2">
      <Image src={leafplate} alt="Leaf Plate" className="hidden sm:block" />

      {/* Container for two sets of menus side by side */}
      <div className="hidden sm:block">
  <div className="flex flex-col sm:flex-row sm:space-x-16 sm:mx-96 sm:-mt-80 mt-10 m">
    {/* First menu set */}
    <div className="flex flex-col text-white sm:w-1/2">
      {/* First menu item */}
      <div className="relative mb-10">
        <Image src={fryballs} alt="Fryballs" className="ml-5" />
        <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
          <h1 className="font-bold">Lettuce Leaf</h1>
          <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat</p>
          <p className="text-[#FF9F0D]">12.5$</p>
        </div>
      </div>

      {/* Second menu item */}
      <div className="relative mb-10">
        <Image src={fryballs} alt="Fryballs" className="ml-5" />
        <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
          <h1 className="font-bold">Fresh Breakfast</h1>
          <p>Lacus nisi, et ac dapibus velit in consequat</p>
          <p className="text-[#FF9F0D]">14.5$</p>
        </div>
      </div>

      {/* Third menu item */}
      <div className="relative mb-10">
        <Image src={fryballs} alt="Fryballs" className="ml-5" />
        <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
          <h1 className="font-bold">Mild Butter</h1>
          <p>Lacus nisi, et ac dapibus velit in consequat</p>
          <p className="text-[#FF9F0D]">12.5$</p>
        </div>
      </div>

      {/* Fourth menu item */}
      <div className="relative">
        <Image src={fryballs} alt="Fryballs" className="ml-5" />
        <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
          <h1 className="font-bold">Fresh Bread</h1>
          <p>Lacus nisi, et ac dapibus velit in consequat</p>
          <p className="text-[#FF9F0D]">12.5$</p>
        </div>
      </div>
    </div>

    {/* Second menu set */}
    <div className="flex flex-col text-white sm:w-1/2">
      {/* First menu item */}
      <div className="relative mb-10">
        <Image src={fryballs} alt="Fryballs" className="ml-5" />
        <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
          <h1 className="font-bold">Lettuce Leaf</h1>
          <p>Lacus nisi, et ac dapibus velit in consequat</p>
          <p className="text-[#FF9F0D]">12.5$</p>
        </div>
      </div>

      {/* Second menu item */}
      <div className="relative mb-10">
        <Image src={fryballs} alt="Fryballs" className="ml-5" />
        <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
          <h1 className="font-bold">Fresh Breakfast</h1>
          <p>Lacus nisi, et ac dapibus velit in consequat</p>
          <p className="text-[#FF9F0D]">14.5$</p>
        </div>
      </div>

      {/* Third menu item */}
      <div className="relative mb-10">
        <Image src={fryballs} alt="Fryballs" className="ml-5" />
        <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
          <h1 className="font-bold">Mild Butter</h1>
          <p>Lacus nisi, et ac dapibus velit in consequat</p>
          <p className="text-[#FF9F0D]">12.5$</p>
        </div>
      </div>

      {/* Fourth menu item */}
      <div className="relative">
        <Image src={fryballs} alt="Fryballs" className="ml-5" />
        <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
          <h1 className="font-bold">Fresh Bread</h1>
          <p>Lacus nisi, et ac dapibus velit in consequat</p>
          <p className="text-[#FF9F0D]">12.5$</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

 
{/* Chefs */ }
<div className="text-section text-center mt-24">
  <h1 className="text-[#FF9F0D] pt-0 font-great-vibes text-4xl">Chefs</h1>
  <p className="text-4xl font-bold">
    <span className="text-[#FF9F0D]">Me</span>
    <span className="text-white text-4xl">et Our Chefs</span>
  </p>
</div>

<div className="mt-10 flex flex-wrap justify-center gap-7">
  <div>
    <Image src={chef1} alt="Chef 1" />
  </div>
  <div>
    <Image src={chef2} alt="Chef 2" />
  </div>
  <div>
    <Image src={chef3} alt="Chef 3" />
  </div>
  <div>
    <Image src={chef4} alt="Chef 4" />
  </div>
</div>

<div className="flex justify-center items-center my-10 border-2 border-[#FF9F0D] w-[155px] h-[50px] rounded-full text-white mx-auto">
  <button className="text-center">See more</button>
</div>

<div className="text-section text-center px-4 md:px-16 lg:px-56 my-10">
  <h1 className="text-[#FF9F0D] pt-0 font-great-vibes text-4xl">Testimonials</h1>
  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white mx-auto">
    What our clients are saying
  </p>
</div>


<div className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
     
      

        {/* Testimonial Card */}
        <div className="relative bg-white text-black rounded-lg shadow-lg mt-12 p-8 max-w-2xl mx-auto">
          {/* Avatar */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <Image
              src={ellipse} // Replace with your image URL
              alt="Client Avatar"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          </div>
          {/* Content */}
          <div className="mt-16">
           <div className="flex justify-center">
          <Image src={quotes} alt="" />
          </div> 
            <p className="text-gray-700 text-lg mt-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
           
          </div>
          {/* Client Info */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800">Alamin Hasan</h3>
            <p className="text-sm text-gray-500">Food Specialist</p>
            {/* Rating */}
            <div className="flex justify-center items-center mt-4">
              <span className="text-orange-500 text-xl">★</span>
              <span className="text-orange-500 text-xl">★</span>
              <span className="text-orange-500 text-xl">★</span>
              <span className="text-orange-500 text-xl">★</span>
              <span className="text-gray-400 text-xl">★</span>
            </div>
          </div>
        </div>
 </div>
        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
        </div>
      </div>

      <div className="w-full h-full my-10">
  <Image src={restu} alt="Restaurant" />
</div>

<div className="text-section text-center">
  <h1 className="text-[#FF9F0D] pt-0 font-great-vibes text-4xl" >Blog Post</h1>
  <p className="text-4xl font-bold">
    <span className="text-[#FF9F0D]">La</span>
    <span className="text-white">test News & Blog</span>
  </p>
</div>

<div className="flex flex-wrap justify-center gap-6 mt-10">
  {/* First Card */}
  <div className="border-2 w-[424px] h-[550px] bg-black text-white">
    <Image src={burger2} alt="Burger" className="w-full h-[349px]" />
    <p className="ml-6 mt-4 text-[#FF9F0D]">10 February 2022</p>
    <h1 className="ml-6 font-bold mt-2 text-lg">
      Pellentesque Non Efficitur Mi Aliquam Cinvallis Mi Quis
    </h1>
    <div className="flex items-center ml-6 mt-4 justify-between pr-6">
      <p className="text-sm">Learn More</p>
      <Image src={icon} alt="Icon" className="w-20 h-5" />
    </div>
  </div>

  {/* Second Card */}
  <div className="border-2 w-[424px] h-[550px] bg-black text-white">
    <Image src={pizza} alt="Pizza" className="w-full h-[349px]" />
    <p className="ml-6 mt-4 text-[#FF9F0D]">10 February 2022</p>
    <h1 className="ml-6 font-bold mt-2 text-lg">
      Pellentesque Non Efficitur Mi Aliquam Cinvallis Mi Quis
    </h1>
    <div className="flex items-center ml-6 mt-4 justify-between pr-6">
      <p className="text-sm">Learn More</p>
      <Image src={icon} alt="Icon" className="w-20 h-5" />
    </div>
  </div>

  {/* Third Card */}
  <div className="border-2 w-[424px] h-[550px] bg-black text-white">
    <Image src={taco} alt="Taco" className="w-full h-[349px]" />
    <p className="ml-6 mt-4 text-[#FF9F0D]">10 February 2022</p>
    <h1 className="ml-6 font-bold mt-2 text-lg">
      Pellentesque Non Efficitur Mi Aliquam Cinvallis Mi Quis
    </h1>
    <div className="flex items-center ml-6 mt-4 justify-between pr-6">
      <p className="text-sm ">Learn More</p>
      <Image src={icon} alt="Icon" className="w-20 h-5" />
    </div>
  </div>
</div>
</div>

 </div>

  );
}

