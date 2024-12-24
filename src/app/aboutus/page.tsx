import Image from 'next/image';
import menu from '../public/menu.png';
import component from '../public/Component 1.png';
import about from '../public/aboutpic.png';
import Person from '../public/Person.png';
import Student from '../public/Student.png';
import Coffee from '../public/Coffee.png';
import bg from '../public/Bg.png';
import chef from '../public/chefabout.png';
import ellipse from '../public/Ellipse 6.png';
import quotes from '../public/Quotes.png';
export default function About() {
    return (
      <div>
<div className="bg-white text-black ">
          {/* Image */}
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
              <span className="text-[#FF9F0D] font-bold">About</span>
            </nav>
          </div>
  
          {/* <div className="bg-white text-gray-700 p-6">
    
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      
        <div>
          <Image 
            src="/tacos.jpg" 
            alt="Tacos" 
            width={500} 
            height={300} 
            className="w-full h-64 object-cover rounded-lg shadow-md" 
          />
        </div>
        
       
        <div>
          <Image 
            src="/chicken.jpg" 
            alt="Fried Chicken" 
            width={500} 
            height={300} 
            className="w-full h-64 object-cover rounded-lg shadow-md" 
          />
        </div>
        
       
        <div>
          <Image 
            src="/salad.jpg" 
            alt="Salad" 
            width={500} 
            height={300} 
            className="w-full h-64 object-cover rounded-lg shadow-md" 
          />
        </div>
      </section> */}
<div className="mt-20 pt-10 px-4 sm:px-12 md:px-20">
  {/* Main Content */}
  <div className="flex flex-row items-center justify-center">
    <h1 className="text-[#FF9F0D] font-great-vibes text-center">About us</h1>
    <hr className="border-t-2 border-[#FF9F0D] ml-2 w-1/12" />
  </div>

  <h1 className=" text-3xl font-bold text-center mt-4 sm:w-[500px] xl:w-[500px] mx-auto">
    Food is an important part Of a balanced Diet
  </h1>
  <p className="w-full sm:w-[500px] mx-auto text-center mt-4 ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quod
    possimus cupiditate dicta nulla, ducimus earum officia. Beatae, aspernatur,
    cupiditate facilis rerum dolore omnis quas itaque adipisci eaque, iste totam
    pariatur. Ut, vitae molestiae rerum rem sapiente debitis facere nulla corrupti.
    Possimus, ex iure nisi enim deleniti deserunt tempora eum.
  </p>

  {/* Buttons and Image */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-8">
    <button className="border-2 w-[195px] h-[58px] bg-[#FF9F0D] text-white">
      Show More
    </button>
    <div className="flex items-center">
      <Image src={component} alt="" className="w-12 h-12" />
      <p className="mt-5 ml-2">Watch Video</p>
    </div>
  </div>
</div>

          {/* Why Choose Us Section */}
          <div className="flex flex-col items-center mt-20">
            <h1 className="text-2xl font-bold">Why Choose Us?</h1>
            <p className="w-full sm:w-[450px] lg:w-[600px]text-center mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat quas consequatur voluptatem incidunt ad! Cumque aliquid temporibus consequuntur tempora ratione labore. Ipsum adipisci nam dolorem ut incidunt officia atque.
            </p>
          </div>
          <div className="flex justify-center items-center w-full h-auto p-4">
  <Image 
    src={about} 
    alt="About" 
    className="max-w-full h-auto object-cover md:max-w-[70%] lg:max-w-[50%] rounded-lg"
  />
</div>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 mt-10">
  {/* Card 1 */}
  <div className="flex flex-col items-center text-center max-w-sm">
    <Image src={Student} alt="Student" className="w-32 h-32 object-cover rounded-full" />
    <h1 className="text-xl font-semibold mt-4">Best Chef</h1>
    <p className="text-gray-600 mt-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum id consequuntur reiciendis consectetur quae minus, 
      architecto obcaecati voluptates, ab ut magni 
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center text-center max-w-sm">
    <Image src={Coffee} alt="Coffee" className="w-32 h-32 object-cover rounded-full" />
    <h1 className="text-xl font-semibold mt-4">Best Chef</h1>
    <p className="text-gray-600 mt-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum id consequuntur reiciendis consectetur quae minus, 
      architecto obcaecati voluptates, ab ut magni </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center text-center max-w-sm">
    <Image src={Person} alt="Person" className="w-32 h-32 object-cover rounded-full" />
    <h1 className="text-xl font-semibold mt-4">Best Chef</h1>
    <p className="text-gray-600 mt-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum id consequuntur reiciendis consectetur quae minus, 
      architecto obcaecati voluptates, ab ut magni </p>
  </div>
</div>
<div className="relative pt-10">
  {/* Background Image */}
  <Image 
    src={bg} 
    alt="background image" 
    className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
  />

  {/* Team Member Section - Text over the image */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-20 py-10 ">
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Team Member
    </h1>
    <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, beatae rerum similique molestiae.
    </p>
  </div>
</div>



<div className='flex flex-wrap justify-center gap-5 mt-5'>
  <div className="flex flex-col items-center">
    <Image src={chef} alt='Chef 1' />
    <div className='ml-0 sm:ml-8'>
      <h1 className='text-2xl font-bold'>Mark Henry</h1>
      <p className='text-base sm:text-xl ml-0 sm:ml-8'>Owner</p>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <Image src={chef} alt='Chef 2' />
    <div className='ml-0 sm:ml-8'>
      <h1 className='text-2xl font-bold'>Lucky Helen</h1>
      <p className='text-base sm:text-xl ml-0 sm:ml-8'>Chef</p>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <Image src={chef} alt='Chef 3' />
    <div className='ml-0 sm:ml-8'>
      <h1 className='text-2xl font-bold'>Moon Henry</h1>
      <p className='text-base sm:text-xl ml-0 sm:ml-8'>Founder</p>
    </div>
  </div>

  <div className="flex flex-col items-center">
    <Image src={chef} alt='Chef 4' />
    <div className='ml-0 sm:ml-8'>
      <h1 className='text-2xl font-bold'>Tom Monrow</h1>
      <p className='text-base sm:text-xl ml-0 sm:ml-8'>Specialist</p>
    </div>
  </div>
</div>


<div className="px-4 sm:px-8 lg:px-56 p-12 sm:p-16 lg:p-52 -mt-5">
  <h1 className="text-[#FF9F0D] font-great-vibes text-2xl text-center pt-0">Testimonials</h1>
  <p className="text-3xl font-bold text-black text-center mx-auto">
    What our clients are saying
  </p>

  {/* Testimonial Card */}
  <div className="bg-white text-black rounded-lg shadow-lg p-6 sm:p-8 max-w-xl mx-auto relative mt-12 sm:mt-20 lg:mt-28">
    {/* Avatar */}
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <Image
        src={ellipse}
        alt="Client Avatar"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white"
      />
    </div>

    {/* Card Content */}
    <div className=" text-center">
      {/* Quote Icon */}
      <div className="flex justify-center mb-4">
        <Image src={quotes} alt="Quote Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum."
      </p>

      {/* Client Info */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">Alamin Hasan</h3>
        <p className="text-sm text-gray-500">Food Specialist</p>
      </div>

      {/* Star Ratings */}
      <div className="flex justify-center mt-4">
        <span className="text-orange-500 text-xl">★</span>
        <span className="text-orange-500 text-xl">★</span>
        <span className="text-orange-500 text-xl">★</span>
        <span className="text-orange-500 text-xl">★</span>
        <span className="text-gray-400 text-xl">★</span>
      </div>
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center mt-6 space-x-2">
      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
    </div>
  </div>
</div>
<div className="text-center ">
  <h1 className="text-3xl sm:text-4xl font-bold text-[#333]">Our Food Menu</h1>
  <p className="text-base sm:text-lg mx-auto max-w-xl mt-4 text-[#4F4F4F]">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eveniet quas nulla corrupti voluptatum.
  </p>
  
  <div className="flex flex-wrap justify-center gap-10 text-[#4F4F4F] mt-5">
    <p className="text-center w-full sm:w-auto">Breakfast</p>
    <p className="text-center w-full sm:w-auto">Lunch</p>
    <p className="text-center w-full sm:w-auto">Dinner</p>
    <p className="text-center w-full sm:w-auto">Dessert</p>
    <p className="text-center w-full sm:w-auto">Drink</p>
    <p className="text-center w-full sm:w-auto">Snack</p>
  </div>
</div>


<hr className="w-1/2  mx-auto border-t-2 border-[#E0E0E0] mt-3" />
<div className='ml-96 mt-5 hidden xl:block'>
<div className="flex flex-row space-x-20 pt-5 " >
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/3 " />
            <div className="flex flex-row space-x-20 pt-5 w-1/3">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/3" />
            <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/3" />
            <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
         
</div>
<div className='ml-[1000px] -mt-[560px] hidden xl:block'>
<div className="flex flex-row space-x-20 pt-5 " >
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/3" />
            <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/3" />
            <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/3" />
            <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/3 " />
</div>
      </div>
      
      </div>



    );
  }
  