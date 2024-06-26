import AboutUs from "../components/Sections/AboutUsSection/AboutUs";
import NavigationBar from "../components/Navigation/NavigationBar";
import StartingPageSlider from "../components/Sections/StartingSliderSection/StartingPageSlider";
import InstallationStepsSection from "../components/Sections/InstallationStepsSection/InstallationStepsSection";
import StartingLoadingScreen from "../ui/StartingLoadingScreen";
import Footer from "../components/Footer/Footer";
import { useTimer } from "../hooks/useTimer";
import EnergySolutionsSection from "../components/Sections/EnergySolutionsSection/EnergySolutionsSection";

function Homepage() {
  const showSection = useTimer({ delay: 500 });

  return (
    <>
      <NavigationBar />
      {showSection && (
        <>
          <StartingPageSlider />
          <AboutUs />
          <InstallationStepsSection />
          <EnergySolutionsSection />
          <Footer />
        </>
      )}
      <StartingLoadingScreen />
    </>
  );
}

export default Homepage;
