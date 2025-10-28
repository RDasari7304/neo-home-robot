"use client";
import Image from "next/image";

const CONTRACT_ADDRESS = "8fdBKZq7wo9fJbsZEZhq6omCgvKzLt97HY9XaGgqpump";
const DEX_URL = "https://dexscreener.com/solana/2ggvmk4sxcfyumuwtmre6sxwwtnptryaaxlvmaueauav" // replace with your DEX link
const TWITTER_Page_URL = "https://x.com/Neo1xCompanion";
const TWITTER_URL = "https://x.com/i/communities/1983261337410298211"

export default function Home() {
  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    alert("Contract address copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-dark100 text-gray-900 :from-black font-sans">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center overflow-hidden">
            <Image
              src="/neo.png"
              alt="NEO logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-wide">NEO</h1>
            <p className="text-xs text-gray-500">1x companion — Your future home robot</p>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm text-gray-600 ">

          <a href="#how" className="hover:underline">
            How to Buy
          </a>
          <a href="#token" className="hover:underline">
            Token
          </a>
        </nav>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold leading-tight ">
              NEO — your future companion
            </h2>
            <p className="text-gray-600  max-w-xl">
              NEO 1x Companion: Your personal home assistant—intelligent, autonomous, and ready to handle the everyday so you don’t have to.</p>

            <div className="flex items-center gap-4">
              <a
                href={DEX_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-medium shadow hover:opacity-90"
              >
                Buy NEO
              </a>

              <button
                onClick={copyAddress}
                className="px-4 py-2 border border-gray-300  rounded-md text-sm hover:bg-gray-100 "
              >
                Copy Contract
              </button>
            </div>

            <div className="flex gap-4 pt-4 text-sm shadow-m">
              <a href={TWITTER_URL} className="text-gray-500 hover:underline">
                Twitter Comm
              </a>
              <a href={TWITTER_Page_URL} className="text-gray-500 hover:underline">
                Official Twitter Page
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-white shadow-lg flex items-center justify-center">
              <Image
                src="/neo.png"
                alt="NEO art"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="mt-20 bg-white  rounded-2xl p-8 shadow-sm"
        >

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg ">
              <h4 className="text-sm font-semibold">Max Supply</h4>
              <p className="text-gray-600  mt-1">999,989,989 Tokens</p>
            </div>
            <div className="p-4 border rounded-lg ">
              <h4 className="text-sm font-semibold">Tax / Fees</h4>
              <p className="text-gray-600  mt-1">0% Tax</p>
            </div>
            <div className="p-4 border rounded-lg ">
              <h4 className="text-sm font-semibold">Distribution</h4>
              <p className="text-gray-600 0 mt-1">
                Community / Liquidity / Team
              </p>
            </div>
          </div>
        </section>

        {/* HOW TO BUY */}
        <section id="how" className="mt-12">
          <h3 className="text-xl font-semibold ">
            How to Buy
          </h3>
          <ol className="mt-3 list-decimal list-inside text-gray-700  space-y-2">
            <li>Install a crypto wallet (MetaMask, Phantom, etc.).</li>
            <li>Copy the contract address using the button above.</li>
            <li>Paste it into your DEX and select NEO token.</li>
            <li>Set slippage (if needed) and confirm swap.</li>
          </ol>
        </section>

        {/* TOKEN DETAILS */}
        <section
          id="token"
          className="mt-12 bg-white  p-6 rounded-2xl shadow-sm flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold ">
            Token Details
          </h3>
          <div className="mt-4  justify-center ml-auto mr-auto">
            <div className="p-4 border rounded ">
              <h4 className="text-sm font-medium text-gray-700 ">
                Contract Address
              </h4>
              <p className="text-sm mt-2 break-all text-gray-900 ">
                {CONTRACT_ADDRESS}
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 text-center text-gray-500 text-sm ">
          <p>
            © {new Date().getFullYear()} NEO — Built with ♥ by the NEO team.
          </p>
        </footer>
      </main>
    </div>
  );
}