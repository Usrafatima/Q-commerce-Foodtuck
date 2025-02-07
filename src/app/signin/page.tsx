'use client'
import { useState } from 'react';
import Link from 'next/link';
import { LuUserRound } from 'react-icons/lu';
import { MdOutlineMail } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import menu from "../public/menu.png"
import Image from 'next/image';
export default function SignInPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({ name, email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div>
      <Image src={menu} alt="Our Menu" className="w-full h-auto" />
      </div>
      <div className="-mt-20 flex flex-col items-center justify-center text-center space-y-2">
        {/* Heading */}
        <h1 className="text-white text-2xl md:text-4xl font-bold">Sign in </h1>

        {/* Breadcrumb */}
        <nav className="text-white text-sm md:text-base">
          <Link href={'/'}>
          <span className="text-gray-400">Home</span>
          </Link>
          <span className="mx-2">{'>'}</span>
          <span className="font-bold">Sign in</span>
        </nav>
      </div>
     

      {/* Sign In Form Section */}
      <div className="flex mt-10 mb-10 items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white shadow-md">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 text-start">Sign In</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name Field */}
            <div>
              <div className="relative mt-1">
                <i className="absolute left-3 top-2 text-gray-400">
                  <LuUserRound className="h-[20px] w-[20px]" />
                </i>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full pl-10 py-2 top-3 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <div className="relative mt-1">
                <i className="absolute left-3 top-2 text-gray-400">
                  <MdOutlineMail className="h-[25px] w-[20px]" />
                </i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full pl-10 py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="relative mt-1">
                <i className="absolute left-3 top-2 text-gray-400">
                  <TbLockPassword className="h-[25px] w-[20px]" />
                </i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-10 py-2 border focus:outline-none focus:ring-2 focus:ring-[#ff9f0d]"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="accent-[#ff9f0d]"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me?</span>
              </label>
            </div>

            {/* Sign in Button */}
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#ff9f0d] hover:bg-orange-600"
            >
              Sign In
            </button>
            <div className="flex items-center justify-end">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#ff9f0d] hover:underline"
              >
                Forget password?
              </a>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-600">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Sign-In Options */}
          <div className="space-y-4">
            <button
              type="button"
              className="flex items-start justify-start w-full py-2 border hover:bg-gray-100"
            >
              <FcGoogle className="text-2xl ml-4 mr-24" />
              Sign up with Google
            </button>
            <button
              type="button"
              className="flex items-start justify-start w-full py-2 border hover:bg-gray-100"
            >
              <FaApple className="text-2xl ml-4 mr-24" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
