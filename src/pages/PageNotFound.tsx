import PageNotFoundSection from "../components/PageNotFoundSection/PageNotFoundSection";
import StartingLoadingScreen from "../ui/StartingLoadingScreen";
import { useState, useEffect } from "react";

function PageNotFound() {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSection(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <StartingLoadingScreen />
      {showSection && <PageNotFoundSection />}
    </>
  );
}

export default PageNotFound;
