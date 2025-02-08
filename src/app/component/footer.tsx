
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa'; // Import FA icons
export default function Footer() {
  return (
    <div className="w-full ">
      <div className="flex flex-col items-center p-6 md:p-20">
        {/* Container for Heading and Email */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-6">
          {/* Heading */}
          <div className="px-4 md:px-40 md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">
              <span className="text-[#FF9F0D]">Sti</span>
              <span className="text-white">ll You Need Our Support?</span>
            </h1>
            <p className="text-white mt-4">
              Dont wait, make a smart & logical quote here. Its pretty easy.
            </p>
          </div>

          {/* Email Input and Subscribe Button */}
          <div className="w-full max-w-[459px] flex mt-4 md:mt-0 md:ml-8">
            <div className="w-full flex border-2 border-[#FF9F0D]">
              <form className="flex w-full">
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 p-4 border-r border-[#FF9F0D] rounded-l-md"
                />
                {/* Subscribe Button */}
                <button className="w-[163px] h-[56px] bg-[#FF9F0D] text-white rounded-r-md">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-white">About Us</h3>
            <p className="mt-2 text-gray-300">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable service across major cities worldwide.
            </p>
            <p className="mt-4 text-sm">
              <strong className="text-white">Opening Hours:</strong><br />
              Mon-Sat: 6:00 AM - 6:00 PM<br />
              Sunday: Closed
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-white">Useful Links</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">News</a></li>
              <li><a href="#" className="hover:text-orange-500">Partners</a></li>
              <li><a href="#" className="hover:text-orange-500">Team</a></li>
              <li><a href="#" className="hover:text-orange-500">Menu</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-bold text-white">Help?</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500">Reporting</a></li>
              <li><a href="#" className="hover:text-orange-500">Documentation</a></li>
              <li><a href="#" className="hover:text-orange-500">Support Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold text-white">Recent Posts</h3>
            <ul className="mt-2 space-y-4">
              <li>
                <h4 className="text-gray-300 font-semibold hover:text-orange-500 cursor-pointer">
                  Is fast food good for your body?
                </h4>
                <p className="text-sm text-gray-400">February 28, 2022</p>
              </li>
              <li>
                <h4 className="text-gray-300 font-semibold hover:text-orange-500 cursor-pointer">
                  Change your food habit with organic food
                </h4>
                <p className="text-sm text-gray-400">February 28, 2022</p>
              </li>
              <li>
                <h4 className="text-gray-300 font-semibold hover:text-orange-500 cursor-pointer">
                  Do you like fast food for your life?
                </h4>
                <p className="text-sm text-gray-400">February 28, 2022</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
       
        </div>
        <div className="bg-gray-800 w-full py-4  px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
  <p className="flex  items-center justify-center  text-center w-full md:w-auto">Copyright © 2022 by Aymen. All Rights Reserved.</p>
  <div className="flex flex-row gap-5 justify-center w-full md:w-auto">
    <Link href="#" className="hover:text-orange-500">
      <FaFacebookF size={50} className='border-2 border-[#FF9F0D] bg-white rounded-full p-3' />
    </Link>

    <Link href="#" className="hover:text-orange-500">
      <FaTwitter size={50} className='border-2 border-[#FF9F0D] bg-white rounded-full p-3' />
    </Link>

    <Link href="#" className="hover:text-orange-500">
      <FaInstagram size={50} className='border-2 border-[#FF9F0D] bg-white rounded-full p-3' />
    </Link>

    <Link href="#" className="hover:text-orange-500">
      <FaYoutube size={50} className='border-2 border-[#FF9F0D] text-[#FF9F0D] bg-white rounded-full p-3' />
    </Link>

    <Link href="#" className="hover:text-orange-500">
      <FaPinterestP size={50} className='border-2 border-[#FF9F0D] bg-white rounded-full p-3' />
    </Link>
  </div>
</div>
</div>
  );
}

