import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = "pk_live_Y2xlcmsubWF0aGV1c3Vyc2luby5naXRodWIuaW8k"

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk publishable key to the .env.local file')
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
