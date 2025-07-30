import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <ThemeProvider>
      <HelmetProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </HelmetProvider>
    </ThemeProvider>
  </Router>
);
