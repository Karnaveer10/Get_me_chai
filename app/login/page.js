'use client';
import React from 'react';
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image'; // ✅ Imported here

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-200 to-yellow-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign in to Your Account</h2>

        <div className="space-y-4">
          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 border border-black rounded-md py-2 px-4 hover:bg-gray-50 transition">
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
          </button>

          {/* GitHub */}
          <button onClick={() => signIn('github')} className="w-full flex items-center justify-center gap-3 border border-black rounded-md py-2 px-4 hover:bg-gray-50 transition">
            <Image
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-gray-700">Sign in with GitHub</span>
          </button>

          {/* Facebook */}
          <button className="w-full flex items-center justify-center gap-3 border border-black rounded-md py-2 px-4 hover:bg-gray-50 transition">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-gray-700">Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
