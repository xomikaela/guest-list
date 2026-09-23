import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GuestDetailsProvider } from "./Guests/GuestContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GuestDetailsProvider>
      <App />
    </GuestDetailsProvider>
  </StrictMode>,
);
