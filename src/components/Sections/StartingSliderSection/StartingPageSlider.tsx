import "hero-slider/dist/index.css";
import HeroSlider, { Slide, Nav, SideNav, AutoplayButton } from "hero-slider";

import img1 from "../../../assets/image1.jpg";
import img10 from "../../../assets/image10.jpg";
import img8 from "../../../assets/image8.jpg";

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
            shouldLazyLoad: true,
            backgroundImageSrc: img1,
            backgroundImageSrcSet: `${img1} 1920w`,
            backgroundImageAlt: "slider image",
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
            shouldLazyLoad: true,
            backgroundImageSrc: img10,
            backgroundImageSrcSet: `${img10} 1920w`,
            backgroundImageAlt: "slider image",
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
            shouldLazyLoad: true,
            backgroundImageSrc: img8,
            backgroundImageSrcSet: `${img8} 1920w`,
            backgroundImageAlt: "slider image",
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