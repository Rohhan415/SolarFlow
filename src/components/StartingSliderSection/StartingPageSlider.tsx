import "hero-slider/dist/index.css";
import HeroSlider, { Slide, Nav, SideNav, AutoplayButton } from "hero-slider";

import img1 from "../../assets/image1.jpg";
import img10 from "../../assets/image10.jpg";
import img8 from "../../assets/image8.jpg";

import FirstSlide from "./Slides/FirstSlide";
import SecondSlide from "./Slides/SecondSlide";
import ThirdSlide from "./Slides/ThirdSlide";

export default function StartingPageSlider() {
  return (
    <section>
      <HeroSlider
        animations={{ slidingAnimation: "fade" }}
        autoplay={{ autoplayDuration: 6000 }}
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
          <FirstSlide />
        </Slide>

        <Slide
          background={{
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundImageBlendMode: "color",
            backgroundImageSrc: img10,
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "3500",
          }}
        >
          <SecondSlide />
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
          <ThirdSlide />
        </Slide>
      </HeroSlider>
    </section>
  );
}
