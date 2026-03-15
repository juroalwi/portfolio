import React from "react";
import ReactDOM from "react-dom/client";
import { ScreenSizeProvider } from "/providers/screen-size-provider";
import { PopupProvider } from "/providers/popup-provider";
import { App } from "/App";
import "/index.css";

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
