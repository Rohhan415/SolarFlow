import PageNotFoundSection from "../components/PageNotFoundSection/PageNotFoundSection";
import StartingLoadingScreen from "../ui/StartingLoadingScreen";
import useTimer from "../hooks/useTimer";

function PageNotFound() {
  const showSection = useTimer({ delay: 500 });

  return (
    <>
      <StartingLoadingScreen />
      {showSection && <PageNotFoundSection />}
    </>
  );
}

export default PageNotFound;
