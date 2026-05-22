import "bootstrap/dist/css/bootstrap.min.css"; //Global Import (Recommended) main.tsx
import "bootstrap-icons/font/bootstrap-icons.css";
import "@flaticon/flaticon-uicons/css/all/all.css"; // Global Import (Recommended) main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@/assets/css/custom.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
