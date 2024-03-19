import BackgroundTop from "../components/ContactPageSection/BackgroundTop";
import PageNav from "../components/Navigation/NavigationBar";
import StartingLoadingScreen from "../ui/StartingLoadingScreen";
import useTimer from "../hooks/useTimer";
import ContactForm from "../components/ContactPageSection/ContactForm";
import Footer from "../components/Footer/Footer";

function ContactPage() {
  const showSection = useTimer({ delay: 500 });
  return (
    <>
      <StartingLoadingScreen />
      {showSection && (
        <>
          <PageNav />
          <BackgroundTop />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}

export default ContactPage;
