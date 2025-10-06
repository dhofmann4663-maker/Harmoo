import React from "react";
import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsWrapper({ children }) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}