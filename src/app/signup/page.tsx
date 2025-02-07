'use client'
import { useState } from 'react';
import Link from 'next/link';
import { LuUserRound } from 'react-icons/lu';
import { MdOutlineMail } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/Firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log('User Created:', res?.user);
      setEmail('');
      setPassword('');
    } catch (e: any) {
      console.error('Sign Up Error:', e.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider); // ✅ Use popup-based login
      console.log('Google User:', result.user);
    } catch (e: any) {
      console.error('Google Sign-In Error:', e.message);
      alert(`Error: ${e.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/home-pic-1.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Sign Up</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">Home</Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Sign Up</span>
          </div>
        </div>
      </div>

      <div className="flex mt-10 mb-10 items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-start">Sign Up</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="relative">
              <LuUserRound className="absolute left-3 top-2 text-gray-400 h-[20px] w-[20px]" />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full pl-10 py-2 border focus:ring-2 focus:ring-[#ff9f0d]" />
            </div>
            <div className="relative">
              <MdOutlineMail className="absolute left-3 top-2 text-gray-400 h-[25px] w-[20px]" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full pl-10 py-2 border focus:ring-2 focus:ring-[#ff9f0d]" />
            </div>
            <div className="relative">
              <TbLockPassword className="absolute left-3 top-2 text-gray-400 h-[25px] w-[20px]" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full pl-10 py-2 border focus:ring-2 focus:ring-[#ff9f0d]" autoComplete="new-password" />
            </div>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="accent-[#ff9f0d]" />
                <span className="ml-2 text-sm text-gray-600">Remember me?</span>
              </label>
            </div>
            <button type="submit" className="w-full py-2 text-white bg-[#ff9f0d] hover:bg-orange-600">Sign Up</button>
            <div className="flex items-center justify-end">
              <Link href="/signin" className="text-sm text-gray-600 hover:text-[#ff9f0d] hover:underline">Already have an account? Sign In</Link>
            </div>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-600">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="space-y-4">
            <button type="button" onClick={handleGoogleSignIn} className="flex items-start justify-start w-full py-2 border hover:bg-gray-100">
              <FcGoogle className="text-2xl ml-4 mr-24" /> Sign up with Google
            </button>
            <button type="button" className="flex items-start justify-start w-full py-2 border hover:bg-gray-100">
              <FaApple className="text-2xl ml-4 mr-24" /> Sign up with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
