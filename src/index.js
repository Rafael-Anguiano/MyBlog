import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
// import { hydrate, render } from "react-dom";

// const SNAP = (
//   <React.StrictMode>
//     <BrowserRouter>
//       <App/>
//     </BrowserRouter>
//   </React.StrictMode>
// )

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(SNAP, rootElement);
// } else {
//   render(SNAP, rootElement);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);