import Image from "next/image";
import menu from '../public/menu.png';
import menu1 from '../public/menu1.png';
import menuburger from '../public/menuburger.png';
import clients from '../public/Client & customers.png';
import cupcake from '../public/cupcake.png';
import juice from '../public/juice.png';
import logo from '../public/Logo.png';


export default function Menu() {
  return (
    <div className="bg-white text-black relative">
      {/* Image */}
      <Image src={menu} alt="Our Menu" className="w-full h-auto" />

      {/* Content overlay */}
      <div className="-mt-20 flex flex-col items-center justify-center text-center space-y-2">
        {/* Heading */}
        <h1 className="text-white text-2xl md:text-4xl font-bold">Our Menu</h1>

        {/* Breadcrumb */}
        <nav className="text-white text-sm md:text-base">
          <span className="text-gray-400">Home</span>
          <span className="mx-2">{'>'}</span>
          <span className="font-bold">Menu</span>
        </nav>
      </div>

      {/* Menu Sections */}
      <div className="pt-20 px-4 md:px-10">
        {/* Starter Menu */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-8">Starter Menu</h2>
          <div className="flex flex-col md:flex-row items-center space-x-10 space-y-8 md:space-y-0">
            <div className="flex-1">
              <Image src={menu1} alt="Starter Menu" className="w-full h-auto object-cover" />
            </div>

            <div className="flex-1 space-y-8">
              {/* Item 1 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
                  <p className="text-[#FF9F0D] text-2xl">32$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Toasted French bread with romano, cheddar</p>
                <p className="text-[#828282] pt-3">560 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3" />
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl text-[#FF9F0D]">Berries and Creme Tart</p>
                  <p className="text-[#FF9F0D] text-2xl">43$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-[#828282] pt-3">700 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3" />
              </div>

              {/* Item 3 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">Tormentoso Bush Pizza Pintoage</p>
                  <p className="text-[#FF9F0D] text-2xl">14$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-[#828282] pt-3">1000 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3" />
              </div>

              {/* Item 4 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">Spicy Vegan Potato Curry</p>
                  <p className="text-[#FF9F0D] text-2xl">35$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-[#828282] pt-3">560 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Course Menu */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-8">Main Course</h2>
          <div className="flex flex-col md:flex-row items-center space-x-10 space-y-8 md:space-y-0">
            <div className="flex-1">
              <Image src={menuburger} alt="Main Course Menu" className="w-full h-auto object-cover" />
            </div>

            <div className="flex-1 space-y-8">
              {/* Item 1 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
                  <p className="text-[#FF9F0D] text-2xl">32$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Toasted French bread with romano, cheddar</p>
                <p className="text-[#828282] pt-3">560 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/2" />
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl text-[#FF9F0D]">Berries and Creme Tart</p>
                  <p className="text-[#FF9F0D] text-2xl">43$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-[#828282] pt-3">700 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/2" />
              </div>

              {/* Item 3 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">Tormentoso Bush Pizza Pintoage</p>
                  <p className="text-[#FF9F0D] text-2xl">14$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-[#828282] pt-3">1000 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/2" />
              </div>

              {/* Item 4 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">Spicy Vegan Potato Curry</p>
                  <p className="text-[#FF9F0D] text-2xl">35$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-[#828282] pt-3">560 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3" />
              </div>
            </div>
          </div>
        </section>

        {/* Desserts */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-8">Desserts</h2>
          <div className="flex flex-col md:flex-row items-center space-x-10 space-y-8 md:space-y-0">
            <div className="flex-1">
              <Image src={cupcake} alt="Desserts" className="w-full h-auto object-cover" />
            </div>

            <div className="flex-1 space-y-8">
              {/* Item 1 */}
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
                  <p className="text-[#FF9F0D] text-2xl">32$</p>
                </div>
                <p className="text-[#4F4F4F] pt-3">Toasted French bread with romano, cheddar</p>
                <p className="text-[#828282] pt-3">560 CAL</p>
                <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/2" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
