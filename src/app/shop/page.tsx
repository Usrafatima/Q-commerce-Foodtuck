import Image from 'next/image';
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

export default function Shop(){
    return(
      <div>
        <div className=" bg-white text-black">
        {/* Image */}
        <Image src={menu} alt="Our Menu" className="w-full h-[350px]" />
    
        {/* Content overlay */}
        <div className="-mt-36 text-center">
           {/* Heading */}
           <h1 className="text-white text-2xl md:text-4xl font-bold">
            Our Shop
           </h1>
    
          {/* Breadcrumb */}
           <nav className="text-white text-sm md:text-base">
             <span className="text-white font-bold">Home</span>
             <span className="mx-2">{'>'}</span>
             <span className=" text-[#FF9F0D] font-bold">Menu</span>
           </nav>
         </div>
         <div className='bg-white text-black '>
            
        
         
       

          <div className=" mt-32 mx-16 justify-center  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  sm:mx-8 lg:mx-16 xl:mx-96  ">
  {/* Item 1 */}
  <div className="bg-white cursor-pointer hover:shadow-lg transition duration-300">
    <Image src={firstpic} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Fresh Lime</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$38.00</p>
      <p className="text-gray-400 line-through">$45.00</p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="bg-white cursor-pointer">
    <Image src={seconpic} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Chocolate Muffin</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$28.00</p>
      <p className="text-gray-400 line-through">$28.00</p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="bg-white cursor-pointer">
    <Image src={third} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Burger</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$21.00</p>
      <p className="text-gray-400 line-through">$45.00</p>
    </div>
  </div>

  {/* Item 4 */}
  <div className="bg-white cursor-pointer">
    <Image src={fourth} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Fresh Lime</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$38.00</p>
      <p className="text-gray-400 line-through">$45.00</p>
    </div>
  </div>

  {/* Item 5 */}
  <div className="bg-white cursor-pointer">
    <Image src={sixth} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Country Burger</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$45.00</p>
    
    </div>
  </div>

  {/* Item 6 */}
  <div className="bg-white cursor-pointer">
    <Image src={sixth} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Drink</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$23.00</p>
      <p className="text-gray-400 line-through">$45.00</p>
    </div>
  </div>
  <div className="bg-white cursor-pointer">
    <Image src={seventh} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Pizza</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$43.00</p>
      
    </div>
  </div>

  {/* Item 7*/}
  <div className="bg-white cursor-pointer">
    <Image src={eight} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Cheese Butter</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$10.00</p>
     
    </div>
  </div>

  {/* Item 8 */}
  <div className="bg-white cursor-pointer">
    <Image src={nine} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Sandwiches</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$25.00</p>
    
    </div>
  </div>

  {/* Item 9 */}
  <div className="bg-white cursor-pointer">
    <Image src={ten} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Chicken Chup</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$12.00</p>
    
    </div>
  </div>

  {/* Item 10 */}
  <div className="bg-white cursor-pointer">
    <Image src={firstpic} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Country Burger</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$45.00</p>
      
    </div>
  </div>

  {/* Item 6 */}
  <div className="bg-white cursor-pointer">
    <Image src={firstpic} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Drink</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$23.00</p>
      <p className="text-gray-400 line-through">$45.00</p>
    </div>
  </div>
  <div className="bg-white cursor-pointer">
    <Image src={eight} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Cheese Butter</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$10.00</p>
     
    </div>
  </div>

  {/* Item 8 */}
  <div className="bg-white cursor-pointer">
    <Image src={nine} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Sandwiches</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$25.00</p>
    
    </div>
  </div>

  {/* Item 9 */}
  <div className="bg-white cursor-pointer">
    <Image src={ten} alt="Fresh Lime" width={312} height={267} />
    <h1 className="font-bold text-2xl mt-4">Chicken Chup</h1>
    <div className="flex gap-3 text-[1.2rem] mt-2">
      <p className="text-[#FF9F0D]">$12.00</p>
    
    </div>
  </div>
</div>
</div>

<div className="absolute top-[480px] right-10 transform translate-x-[-20%] hidden xl:block">
  <div className="border-2 w-[312px] h-[1489px] p-4 mt-11 relative">
    {/* Search Bar Inside the Box */}
    <div className="flex items-center space-x-6">
      <form className="md:w-[310px] w-full">
        <div className="relative border-2 border-[#FF9F0D]">
          <input
            type="search"
            placeholder="Search Product"
            className="w-full h-[50px] p-4 bg-white text-black focus:outline-none"
          />
          <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2">
            <div className="w-[80px] h-[54px] flex justify-center items-center border-2 border-[#FF9F0D] bg-[#FF9F0D] -mx-16">
              <AiOutlineSearch className="text-white text-2xl" />
            </div>
          </button>
        </div>
      </form>
    </div>
    < div className='mt-5'>
  <h1 className='font-bold'>Category</h1>
  <div className='flex flex-col gap-2'>
  
   <Checkbox><p>Sanwiches</p></Checkbox>  
    <Checkbox><p>Burger</p></Checkbox>
    <Checkbox><p>Chicken Chup</p></Checkbox>
    <Checkbox><p>Drink</p></Checkbox>
    <Checkbox><p>Pizza</p></Checkbox>
    <Checkbox><p>Thai</p></Checkbox>
    <Checkbox><p>Non Veg</p></Checkbox>
    <Checkbox><p>Uncategorized</p></Checkbox>
  </div>
  <div className='mt-10 ml-5'>
  <Image src={shopbox} alt=''/>
 </div>
 <h1 className='mt-5 font-bold text-2xl'>Filter by Price</h1>
 <Slider></Slider>
 <div className='flex flex-row gap-24 text-gray-400'>
 <p>From $0 to $8000</p>
 <p>Filter</p>
 </div>
<div>
 <h1 className='mt-5 font-bold text-2xl'>Latest Products</h1>
 <div className='flex flex-row mt-5'>
  <Image src={cheese}alt="" />
  <div className='flex flex-col ml-5'>
  <h1>Pizza</h1>
  <Image src={star} alt=''/>
  <p>$35.00</p>
  </div>
 </div>

 <div className='flex flex-row  mt-5'>
  <Image src={cheese}alt="" />
  <div className='flex flex-col ml-5'>
  <h1>Cupcake</h1>
  <Image src={star} alt=''/>
  <p>$35.00</p>
  </div>
 </div>

 <div className='flex flex-row  mt-5'>
  <Image src={cheese}alt="" />
  <div className='flex flex-col ml-5'>
  <h1>Cookies</h1>
  <Image src={star} alt=''/>
  <p>$35.00</p>
  </div>
 </div>

 <div className='flex flex-row  mt-5'>
  <Image src={cheese}alt="" />
  <div className='flex flex-col ml-5'>
  <h1>Burger</h1>
  <Image src={star} alt=''/>
  <p>$35.00</p>
  </div>
 </div>
</div>
<div>
<h1 className='mt-5 font-bold text-2xl'>Product Tags</h1>
<div className="flex flex-row gap-10 mt-2">
  <div>
    <p>Services</p>
    <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
  </div>
  <div>
    <p>Our Menu</p>
    <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
  </div>
  <div>
    <p>Pizza</p>
    <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
  </div>
</div>

<div className="flex flex-row gap-10 mt-2">
  <div>
    <p>Cupcake</p>
    <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
  </div>
  <div>
    <p>Burger</p>
    <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
  </div>
  <div>
    <p>Cookies</p>
    <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
  </div>
</div>

<div className="flex flex-row gap-10 mt-2">
  <div>
    <p>Our Shop</p>
    <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
  </div>
  <div>
    <p>Tandoori Chicken</p>
    <hr className="w-3/4 mx-auto border-t-2 border-gray-300" />
  </div>
</div>

</div>
</div>
   </div>
  </div>
 
</div>
<div className=' flex items-center justify-center cursor-pointer pt-10 '>
  <Image src={pagination} alt='' />
</div>

</div>

    )
}