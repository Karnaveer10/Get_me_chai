'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { useEffect } from 'react';
const Navbar = () => {
    const router = useRouter();
    const { data: session, status } = useSession()
    
    return (

        < div >


            <nav className="bg-orange-300 w-full ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className='flex items-center space-x-2 rtl:space-x-reverse'>
                        <img src="tea.gif" width={30} alt="" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-950">Get Me a Chai!</span>
                    </div>
                    {session && <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3">
                        <button type="button"  onClick={() => router.push(`/${session.user.name}`)} className="text-white focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-400 hover:bg-red-500 cursor-pointer">Welcome {session.user.email}</button>

                        <Link href={'/dashboard'}>
                            <button onClick={signOut} type="button" className="text-white focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-400 hover:bg-red-500 cursor-pointer">SignOut</button>
                        </Link>
                    </div>}
                    {!session &&
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <Link href={'/login'}>
                                <button type="button" className="text-white focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-400 hover:bg-red-500 cursor-pointer">Login</button>
                            </Link>
                        </div>
                    }

                </div>
            </nav>


        </div >
    )
}

export default Navbar
