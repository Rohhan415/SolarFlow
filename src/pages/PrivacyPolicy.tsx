import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/Navigation/NavigationBar";
import Regulations from "../components/Sections/PrivacyPolicy/Regulations";
import { useTimer } from "../hooks/useTimer";
import StartingLoadingScreen from "../ui/StartingLoadingScreen";

function PrivacyPolicy() {
  const showSection = useTimer({ delay: 500 });

  return (
    <div>
      <StartingLoadingScreen />
      {showSection && (
        <>
          <NavigationBar />
          <Regulations />
          <Footer />
        </>
      )}
    </div>
  );
}

export default PrivacyPolicy;
