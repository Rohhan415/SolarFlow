import AboutUs from "../components/AboutUsSection/AboutUs";
import NavigationBar from "../components/Navigation/NavigationBar";
import StartingPageSlider from "../components/StartingSliderSection/StartingPageSlider";
import ThreeStepsSection from "../components/ThreeStepsSection/ThreeStepsSection";
import { useState, useEffect } from "react";

import StartingLoadingScreen from "../ui/StartingLoadingScreen";
import Footer from "../components/Footer/Footer";

function Homepage() {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSection(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <StartingLoadingScreen />
      <NavigationBar />
      {showSection && <StartingPageSlider />}
      <AboutUs />
      <ThreeStepsSection />
      <Footer />
    </>
  );
}

export default Homepage;
