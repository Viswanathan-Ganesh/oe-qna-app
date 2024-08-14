import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage.tsx";
import ThankyouPage from "./ThankyouPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
