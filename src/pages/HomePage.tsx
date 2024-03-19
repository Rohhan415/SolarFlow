import AboutUs from "../components/AboutUsSection/AboutUs";
import NavigationBar from "../components/Navigation/NavigationBar";
import StartingPageSlider from "../components/StartingSliderSection/StartingPageSlider";
import ThreeStepsSection from "../components/ThreeStepsSection/ThreeStepsSection";
import StartingLoadingScreen from "../ui/StartingLoadingScreen";
import Footer from "../components/Footer/Footer";
import useTimer from "../hooks/useTimer";

function Homepage() {
  const showSection = useTimer({ delay: 500 });

  return (
    <>
      <StartingLoadingScreen />
      <NavigationBar />
      {showSection && (
        <>
          <StartingPageSlider />
          <AboutUs />
          <ThreeStepsSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default Homepage;
