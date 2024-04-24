import {
  createContext,
  useState,
  useEffect,
  FunctionComponent,
  ReactNode,
} from "react";

interface ScrollWatcher {
  y: number;
  lastY: number;
}

interface NavBarProviderProps {
  children: ReactNode;
}

interface NavBarContextProps {
  scrollWatcher: ScrollWatcher;
  showNavigation: boolean;
  isMobile: boolean;
  activeMobileNavBar: boolean;
  toggleOpen: () => void;
}

export const NavBarContext = createContext<NavBarContextProps | null>(null);

export const NavBarProvider: FunctionComponent<NavBarProviderProps> = ({
  children,
}) => {
  const [scrollWatcher, setScrollWatcher] = useState<ScrollWatcher>({
    y: 0,
    lastY: 0,
  });
  const [showNavigation, setShowNavigation] = useState<boolean>(true);
  const [activeMobileNavBar, setActiveMobileNavBar] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleOpen = () => {
    setActiveMobileNavBar(!activeMobileNavBar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1024) {
        setScrollWatcher((prevState) => {
          return {
            y: window.scrollY,
            lastY: prevState.y,
          };
        });
        setShowNavigation(window.scrollY > 1 || scrollWatcher.y > 1);
      } else {
        setShowNavigation(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollWatcher.y]);

  return (
    <NavBarContext.Provider
      value={{
        scrollWatcher,
        showNavigation,
        activeMobileNavBar,
        isMobile,
        toggleOpen,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
