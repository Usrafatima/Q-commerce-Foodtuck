'use client';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { MdOutlineMail } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { MouseEvent } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Add your sign-in logic here (e.g., call API to sign in the user)
    console.log({ email, password });
  }

  function handleGoogleSignIn(event: MouseEvent): void {
    console.log('Google sign-in clicked', event);
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/home-pic-1.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Sign In</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">Home</Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Sign In</span>
          </div>
        </div>
      </div>

      <div className="flex mt-10 mb-10 items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-start">Sign In</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="relative">
              <MdOutlineMail className="absolute left-3 top-2 text-gray-400 h-[25px] w-[20px]" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full pl-10 py-2 border focus:ring-2 focus:ring-[#ff9f0d]" />
            </div>
            <div className="relative">
              <TbLockPassword className="absolute left-3 top-2 text-gray-400 h-[25px] w-[20px]" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full pl-10 py-2 border focus:ring-2 focus:ring-[#ff9f0d]" autoComplete="current-password" />
            </div>
            <button type="submit" className="w-full py-2 text-white bg-[#ff9f0d] hover:bg-orange-600">Sign In</button>
            <div className="flex items-center justify-end">
              <Link href="/signup" className="text-sm text-gray-600 hover:text-[#ff9f0d] hover:underline">Dont have an account? Sign Up</Link>
            </div>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-600">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="space-y-4">
            <button type="button" onClick={handleGoogleSignIn} className="flex items-start justify-start w-full py-2 border hover:bg-gray-100">
              <FcGoogle className="text-2xl ml-4 mr-24" /> Sign in with Google
            </button>
            <button type="button" className="flex items-start justify-start w-full py-2 border hover:bg-gray-100">
              <FaApple className="text-2xl ml-4 mr-24" /> Sign in with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
