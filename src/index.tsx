import React from "react";
import ReactDOM from "react-dom/client";
import { ScreenSizeProvider } from "/providers/ScreenSizeProvider";
import { PopupProvider } from "/providers/PopupProvider";
import { App } from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </ScreenSizeProvider>
  </React.StrictMode>,
);
