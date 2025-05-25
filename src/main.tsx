import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


import { BrowserRouter } from 'react-router-dom';
// ... other imports

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/YOUR-REPO-NAME"> {/* <-- Add/Update this */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);