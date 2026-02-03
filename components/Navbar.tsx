"use client";

import Link from "next/link";
import Image from "next/image";
import { login } from "@/lib/auth-actions";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link href="/">
          <Image src="/Ulendo.png" alt="logo" width={140} height={140} />
        </Link>

        <div className="flex items-center gap-6 text-lg">
          <Link href="/about" className="text-slate-900 hover:text-green-500">
            About
          </Link>
          <Link href="/trips" className="text-slate-900 hover:text-green-500">
            Trips
          </Link>
          <Link href="/region" className="text-slate-900 hover:text-green-500">
            Region
          </Link>

          <button
            onClick={login}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Sign In
            <svg className="w-6 h-6 ml-2" 
                    viewBox="-3 0 262 262" 
                    xmlns="http://www.w3.org/2000/svg" 
                    preserveAspectRatio="xMidYMid" fill="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                        <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#ffffff"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#ffffff"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#ffffff"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#ffffff"></path></g>
                    </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
