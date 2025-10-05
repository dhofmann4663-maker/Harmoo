import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Liquidity Pool", value: 40 },
  { name: "Charity Wallet", value: 25 },
  { name: "Community Rewards", value: 20 },
  { name: "Team/Development", value: 10 },
  { name: "Marketing", value: 5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-center font-sans p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <img
          src="/harmoo-logo.png"
          alt="HARMOO Logo"
          className="w-16 h-16 rounded-full shadow-md"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          🐾 Welcome to <span className="text-indigo-600">$HARMOO</span> Coin
        </h1>
      </div>

      {/* Mission */}
      <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed mb-10">
        A meme coin with a mission: helping{" "}
        <strong className="text-indigo-600">Noah's Hope Animal Rescue</strong>{" "}
        while celebrating the pampered life of Harmoo, our beloved Pomeranian!
      </p>

      {/* Tokenomics */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">📊 Tokenomics</h2>
         <div className="flex justify-center mb-12 py-8">
          <div className="w-full max-w-md h-[400px]">
           <ResponsiveContainer>
            <PieChart>
             <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
              label
           >
             {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
             ))}
           </Pie>
           <Tooltip />
           <Legend />
         </PieChart>
       </ResponsiveContainer>
      </div>
     </div>  
      </section>

      {/* How to Buy */}
      <section className="max-w-md mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-4 text-center">💡 How to Buy</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Get a Solana wallet (like Phantom).</li>
          <li>Buy SOL from an exchange and transfer it to your wallet.</li>
          <li>Connect your wallet to <strong>pump.fun</strong>.</li>
          <li>Search for <strong>$HARMOO</strong> and swap SOL for it.</li>
        </ol>
      </section>
      
      {/* Donation Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">💰 Support the Mission</h2>
        <p className="text-gray-700 mb-6">
           You can send donations directly to help <strong>Noah's Hope Animal Rescue</strong>.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://solscan.io/account/7khWjgnaXG2o76FKJHXGzJoYSDrARi1jBSFGQXEvy4xv"
            target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Solana Wallet 💎
          </a>

          <a
            href="https://etherscan.io/0xa2626d86B4d81cff416e2E8f375C7C7207543fc3"
            target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
         >
            Ethereum Wallet ⚡
          </a>

          <a
            href="https://bscscan.com/0xa2626d86B4d81cff416e2E8f375C7C7207543fc3"
            target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition"
         >
            BNB Wallet 🟡
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Always double-check wallet addresses before sending funds.
        </p>
      </section>

      {/* --- Social / CTA --- */}
      <section className="mt-12">
       <h2 className="text-2xl font-semibold mb-4">🌐 Join the Harmoonians</h2>
       <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
         Follow Harmoo, get updates, and jump into the community. We’re live—let’s take over the Harmooniverse!
       </p>

       <div className="flex flex-wrap items-center justify-center gap-3">
         {/* X / Twitter */}
         <a
          href="https://x.com/HARMOOLIFE"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
          aria-label="Follow on X (Twitter)"
         >
          <span className="text-xl">𝕏</span>
          <span>@your_handle</span>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/https://t.me/HarmooLife"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
          aria-label="Join our Telegram"
        >
          <span className="text-xl">📣</span>
          <span>Telegram</span>
        </a>

        {/* Pump.fun token */}
        <a
          href="https://pump.fun/coin/6in3JdM9QcWwgmo5cehucn36a1K6pfttCoLymfZ4pump"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
          aria-label="Buy on pump.fun"
        >
          <span className="text-xl">🚀</span>
          <span>Buy on pump.fun</span>
        </a>

        {/* DexScreener */}
        <a
          href="https://dexscreener.com/solana/coming_soon"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
          aria-label="View chart on DexScreener"
        >
          <span className="text-xl">📈</span>
          <span>Chart</span>
        </a>
      </div>

      {/* Charity note / secondary CTA */}
      <p className="text-sm text-gray-500 mt-6">
          A portion of proceeds supports <strong>Noah&apos;s Hope Animal Rescue</strong>. 🐾
      </p>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-300 pt-6 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} HARMOO Coin | Built with ❤️ for Harmoo & Noah’s Hope Animal Rescue
        </p>
        <p className="mt-2">
          We use <strong>Vercel Analytics</strong> to improve user experience and site performance.
          No personal data is collected beyond anonymized usage metrics.  
          Learn more at{' '}
          <a
            href="https://vercel.com/docs/analytics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            vercel.com/analytics
          </a>.
        </p>
      </footer>
    </div>
  )
}