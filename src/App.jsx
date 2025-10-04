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
      {/* Header section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <img
          src="/harmoo-logo.png"
          alt="HARMOO Logo"
          style={{ width: '60px', height: '60px', borderRadius: '50%' }}
        />
        <h1>🐾 Welcome to HARMOO Coin</h1>
      </div>

      {/* Mission section */}
      <p style={{ marginTop: '1.5rem' }}>
        A meme coin with a mission: helping <strong>Noah's Hope Animal Rescue</strong> while
        celebrating the pampered life of Harmoo, our beloved Pomeranian!
      </p>

      {/* Tokenomics section */}
      <h2 style={{ marginTop: '3rem' }}>📊 Tokenomics</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <PieChart width={400} height={400}>
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
      </div>

      {/* How to Buy section */}
      <h2>💡 How to Buy</h2>
      <ol style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <li>Get a Solana wallet (like Phantom).</li>
        <li>Buy SOL from an exchange and transfer it to your wallet.</li>
        <li>Connect your wallet to <strong>pump.fun</strong>.</li>
        <li>Search for <strong>$HARMOO</strong> and swap SOL for it.</li>
      </ol>

      <footer style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
        © 2025 HARMOO Coin | Built with ❤️ for Harmoo & Noah’s Hope Animal Rescue
      </footer>
    </div>
  )
}