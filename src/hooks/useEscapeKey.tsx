import { useEffect } from "react";

function useEscapeKey(onEscape: () => void) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscape();
      }
    };

    document.addEventListener("keydown", handleEsc);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onEscape]);
}

export default useEscapeKey;
