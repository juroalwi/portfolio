import { createContext, ReactNode, useEffect, useState } from "react";

type ScreenSizeContextType = {
  screenHeight: number;
  screenWidth: number;
  isSmallScreen: boolean;
};

export const ScreenSizeContext = createContext<null | ScreenSizeContextType>(
  null
);

export const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const SMALL_SCREEN_BREAKPOINT = 1024;
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < SMALL_SCREEN_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
      setIsSmallScreen(window.innerWidth < SMALL_SCREEN_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider
      value={{ screenHeight, screenWidth, isSmallScreen }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
};
