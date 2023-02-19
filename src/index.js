import React from 'react';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from "react-dom";

const SNAP = (
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(SNAP, rootElement);
} else {
  render(SNAP, rootElement);
}