import "./projectcarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { items } from "../projects/project-constants";

const ProjectCarousel = () => {
  return (
    <>
    <h1 className="project-title">Projects</h1>
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation, Mousewheel]}
        navigation
        mousewheel
        direction="horizontal"
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={false}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
      >
        {items.map((proj) => (
          <SwiperSlide key={proj.id}>
            <div
              className="card"
              style={{ backgroundImage: `url(${proj.img})` }}
            >
              <div className="overlay">
                <span className="category">{proj.tech}</span>
                <h3>{proj.title}</h3>
              </div>
              <button className="plus" onClick={() => window.open(proj.link, "_blank")}>+</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default ProjectCarousel;