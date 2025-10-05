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
          <li>Charity Wallett 7khWjgnaXG2o76FKJHXGzJoYSDrARi1jBSFGQXEvy4xv</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm border-t border-gray-300 pt-4">
        © 2025 HARMOO Coin | Built with ❤️ for Harmoo & Noah’s Hope Animal Rescue
      </footer>
    </div>
  )
}