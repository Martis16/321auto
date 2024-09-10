import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

const Slider = ({ images }) => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      hashNavigation: {
        watchState: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Cleanup swiper instance on unmount
    return () => swiper.destroy();
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div
            className="swiper-slide"
            key={index}
            data-hash={`slide-${index}`}
          >
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;
