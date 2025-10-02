import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Liquidity Pool', value: 40 },
  { name: 'Charity Wallet', value: 25 },
  { name: 'Community Rewards', value: 20 },
  { name: 'Team/Development', value: 10 },
  { name: 'Marketing', value: 5 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0']

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
  <img 
    src="/harmoo-logo.png" 
    alt="HARMOO Logo" 
    style={{ width: '60px', height: '60px', borderRadius: '50%' }} 
  />
  <h1>🐾 Welcome to HARMOO Coin</h1>
</div>

      <p>
        A meme coin with a mission: helping <strong>Noah's Hope Animal Rescue</strong> while celebrating the pampered life of Harmoo, our beloved Pomeranian!
      </p>
      
      <h2>📊 Tokenomics</h2>
      <PieChart width={400} height={400} style={{ margin: '0 auto' }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
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

      <h2>🐕 Mission</h2>
      <p>
        HARMOO isn’t just another coin — it’s built with heart. Each transaction supports animal rescue efforts and grows a fun-loving community around Harmoo’s daily adventures.
      </p>

      <h2>💡 How to Buy</h2>
      <ol style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <li>Get a Solana wallet (like Phantom).</li>
        <li>Buy SOL from an exchange and transfer it to your wallet.</li>
        <li>Connect your wallet to <strong>pump.fun</strong>.</li>
        <li>Search for <strong>$HARMOO</strong> and swap SOL for it.</li>
      </ol>

      {/* Charity Transparency Section */}
      <h2>💙 Charity Transparency</h2>
      <p>
        We believe in full transparency. Donations go directly to support <strong>Noah’s Hope Animal Rescue</strong>.
      </p>
      <p style={{ fontFamily: 'monospace', color: '#2563EB', wordBreak: 'break-word' }}>
        YOUR_CHARITY_WALLET_ADDRESS_HERE
      </p>

      {/* Social Links Section */}
      <h2>🌐 Join the Community</h2>
      <p>Follow us and become part of the Harmoonian family 🚀🐾</p>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="https://x.com/HARMOOLIFE" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://t.me/HarmooLife" target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href="https://tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

      <footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
        © 2025 HARMOO Coin | Built with ❤️ for Harmoo & Noah’s Hope Animal Rescue
      </footer>
    </div>
  )
}
