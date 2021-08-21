/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const banners = ["/banner-1.jpg", "/banner-2.jpg", "/banner-3.jpg"];

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {banners.map((banner) => (
          <div key={banner}>
            <img src={banner} alt="" loading="lazy" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
