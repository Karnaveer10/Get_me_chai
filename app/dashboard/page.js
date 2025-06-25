'use client';
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const Page = () => {
  const { data: session } = useSession()
  const router = useRouter();

  if (!session) {
    router.push('/login');
  }

  return (
    <>
      <div>hello from dashboard</div>
    </>

  );
};
export default Page;
