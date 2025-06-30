import React from 'react'
import Image from 'next/image'
const page = ({ params }) => {
    return (
        <div className=' w-screen bg-gradient-to-r from-red-200 to-yellow-200'>

            <Image
                className="object-cover relative"
                src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8057130/913fd5edf1c540c082ba5e48271cdfab/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/6.png?token-hash=szoUQq-tDxL8xMRnZkXYcJEzn_3GBe1QsO_V4ZjO0Zs%3D&token-time=1751587200"
                alt="Main background"
                width={1600}  // Replace with actual image width if known
                height={900}  // Replace with actual height if known
                priority      // Optional: preload this image
            />

            <Image
                className="absolute top-[55vh] left-[46vw] rounded-2xl border border-white"
                src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8057130/ae1382f14d7944b4a6f41fdcdbb842f8/eyJoIjozNjAsInciOjM2MH0%3D/1.png?token-hash=7vx-Lch0kri5bKfrZ6CnpJo8NQI_GEqgBc9mOaXp2v4%3D&token-time=1752105600"
                alt="Overlay image"
                width={125}
                height={125}
            />
            <div className='mx-auto text-center mt-16'>
                <h3 className='text-xl font-bold text-blue-950'>
                    @{params.username}
                </h3>
                <h4 className='font-medium text-blue-950'>creating Blender tutorials, visual effects - CGI - 3d art</h4>
                <h4 className='font-medium text-blue-950'>209 paid members174 posts</h4>
            </div>
            <div className='w-2/3 mx-auto flex items-center justify-center gap-3 mb-3 mt-10'>
                <div className='w-1/2 min-h-[40vh] bg-red-300 rounded-lg p-5 text-center flex flex-col items-center gap-3'>
                    <h2 className='text-xl font-semibold text-blue-950'>Your Supporters</h2>
                    <ul className='text-blue-950 text-[13px]'>
                        <li className='flex items-center gap-1'>
                            <Image src="avatar.gif" alt="" width={26} height={26} />
                            Shubham donated <span className='font-bold '>$30</span> with a message I support you</li>
                        <li className='flex items-center gap-1'>
                            <Image src="avatar.gif" alt="" width={26} height={26} />
                            Shubham donated <span className='font-bold '>$30</span> with a message I support you</li>
                        <li className='flex items-center gap-1'>
                            <Image src="avatar.gif" alt="" width={26} height={26} />
                            Shubham donated <span className='font-bold '>$30</span> with a message I support you</li>
                    </ul>
                </div>
                <div className='w-1/2 min-h-[40vh] bg-red-300 rounded-lg p-5 flex flex-col items-center gap-3 '>
                    <h2 className='text-xl font-semibold text-blue-950'>Make a payment</h2>
                    <input type="text" name="name" id="" placeholder='Enter Name' className='border border-black p-2 rounded-lg w-[80%] bg-red-200' />
                    <input type="text" name="message" id="" placeholder='Enter Message' className='border border-black p-2 rounded-lg w-[80%] bg-red-200' />
                    <input type="text" name="amount" id="" placeholder='Enter Amount' className='border border-black p-2 rounded-lg w-[80%] bg-red-200' />
                    <button type="button" className=" focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-400 hover:bg-red-500 cursor-pointer">Pay Now</button>

                </div>
            </div>
        </div>
    )
}

export default page
