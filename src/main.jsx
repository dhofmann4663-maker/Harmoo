import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Analytics } from '@vercel/analytics/react';
 
export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
