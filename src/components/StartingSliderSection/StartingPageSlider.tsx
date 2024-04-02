import "hero-slider/dist/index.css";
import HeroSlider, { Slide, Nav, SideNav, AutoplayButton } from "hero-slider";
import styles from "./StartingPageSlider.module.css";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img8 from "../../assets/image8.jpg";

export default function StartingPageSlider() {
  return (
    <section>
      <HeroSlider
        animations={{ slidingAnimation: "fade" }}
        // autoplay={{ autoplayDuration: 6000 }}
        height={"100vh"}
        style={{ backgroundColor: "#eee" }}
        accessibility={{
          shouldDisplayButtons: false,
        }}
        controller={{
          initialSlide: 1,
          slidingDuration: 400,
          slidingDelay: 100,
        }}
      >
        <Nav />
        <SideNav />
        <SideNav isPositionedRight={false} />
        <AutoplayButton style={{ color: "#eee" }} />

        <Slide
          background={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundImageBlendMode: "color",
            backgroundImageSrc: img1,
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "3500",
          }}
        >
          <div className={styles.container}>
            <h2 className={styles.slideTitle}>
              Twoja Droga do Odnawialnej Energii Zaczyna Się Tutaj
            </h2>
            <h1 className={styles.slideMainTitle}>
              EKOLOGICZNA ENERGIA <br /> DLA TWOJEGO DOMU
            </h1>
            <p className={styles.slideInformation}>
              Oferujemy instalację paneli fotowoltaicznych, profesjonalne
              doradztwo oraz kompleksową obsługę klienta. Skontaktuj się z nami
              już dziś!
            </p>
          </div>
        </Slide>

        <Slide
          background={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundImageBlendMode: "color",
            backgroundImageSrc: img2,
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "3500",
          }}
        >
          <div className="flex items-center justify-center h-full text-white text-9xl ">
            XXXXXXXXXXX
          </div>
        </Slide>

        <Slide
          background={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundImageBlendMode: "color",
            backgroundImageSrc: img8,
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "3500",
          }}
        >
          <div className="flex items-center justify-center h-full text-white text-9xl ">
            XXXXXXXX
          </div>
        </Slide>
      </HeroSlider>
    </section>
  );
}
