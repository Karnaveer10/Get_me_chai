import Image from "next/image";

export default function Home() {

  return (

    <div className="relative h-[82.5vh]">

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-200 to-yellow-200" />

      {/* Centered Content */}
      <div className="flex flex-col items-center h-full">
        <div className="first w-2/3 h-1/3 flex flex-col gap-5 items-center justify-center mt-7 p-4">
          <div className="flex items-center justify-center gap-5  p-2">
            <Image src="/tea.gif" width={60} height={30} alt="Tea" />
            <span className="self-center text-5xl font-bold whitespace-nowrap font-semibold text-blue-950">
              Buy Me a Chai!
            </span>
          </div>
          <h2 className="mt-4 text-center">
            A crowdfunding platform for creators. Get funded by fans and followers. Start now!
          </h2>
          <div className="flex gap-2">
            <button type="button" className="text-blue-950 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
            <button type="button" className="text-blue-950  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

          </div>
        </div>


        <div className="divide w-screen bg-red-300 h-1.5 mt-16 mb-10"></div>

        <div className="second flex flex-col gap-5 items-center justify-center">
          <h2 className="font-bold text-2xl text-blue-950">Your fans can buy u a chai</h2>
          <div className="flex justify-center items-center gap-36">
            <div className="list flex flex-col items-center justify-center gap-1 text-blue-950 font-semibold" >
              <Image src="/man.gif" alt="" width={100} height={100} className="bg-red-500 rounded-full p-3" />
              <h3>Fans want to help</h3>
              <h3>Your fans are available for your help</h3>
            </div>
            <div className="list flex flex-col items-center justify-center gap-1 text-blue-950 font-semibold" >
              <Image src="/coin.gif" alt="" width={100} height ={100} className="bg-red-500 rounded-full p-3" />
              <h3>Fans want to help</h3>
              <h3>Your fans are available for your help</h3>
            </div>
            <div className="list flex flex-col items-center justify-center gap-1 text-blue-950 font-semibold" >
              <Image src="/group.gif" alt="" width={100} height={100} className="bg-red-500 rounded-full p-3" />
              <h3>Fans want to help</h3>
              <h3>Your fans are available for your help</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
