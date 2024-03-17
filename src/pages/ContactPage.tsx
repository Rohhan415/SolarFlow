import BackgroundTop from "../components/ContactPageSection/BackgroundTop";
import PageNav from "../components/Navigation/NavigationBar";
import StartingLoadingScreen from "../ui/StartingLoadingScreen";

function ContactPage() {
  return (
    <>
      <PageNav />
      <StartingLoadingScreen />
      <BackgroundTop />
    </>
  );
}

export default ContactPage;
