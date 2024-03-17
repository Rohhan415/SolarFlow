import "hero-slider/dist/index.css";
import HeroSlider, { Slide, Nav, SideNav, AutoplayButton } from "hero-slider";

import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";

export default function StartingPageSlider() {
  return (
    <HeroSlider
      animations={{ slidingAnimation: "fade" }}
      autoplay={{ autoplayDuration: 6500 }}
      height={"100vh"}
      style={{ backgroundColor: "#eeee" }}
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
      <AutoplayButton />

      <Slide
        background={{
          backgroundColor: "rgba(0,0,0,0.3)",
          backgroundImageBlendMode: "color",
          backgroundImageSrc: img1,
          backgroundAnimation: "zoom",
          backgroundAnimationDuration: "3500",
        }}
      >
        <div className="flex items-center justify-center h-full text-9xl ">
          XXXXXXX
        </div>
      </Slide>

      <Slide
        background={{
          backgroundColor: "rgba(0,0,0,0.3)",
          backgroundImageBlendMode: "color",
          backgroundImageSrc: img2,
          backgroundAnimation: "zoom",
          backgroundAnimationDuration: "3500",
        }}
      >
        <div className="flex items-center justify-center h-full text-9xl ">
          XXXXXXXXXXX
        </div>
      </Slide>

      <Slide
        background={{
          backgroundColor: "rgba(0,0,0,0.3)",
          backgroundImageBlendMode: "color",
          backgroundImageSrc: img3,
          backgroundAnimation: "zoom",
          backgroundAnimationDuration: "3500",
        }}
      >
        <div className="flex items-center justify-center h-full text-9xl ">
          XXXXXXXX
        </div>
      </Slide>
    </HeroSlider>
  );
}
