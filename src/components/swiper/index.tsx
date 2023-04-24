// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";
//import db
import { imageUrls } from "../../helper/helper";

const SwiperContainer = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          395: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageUrls?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <picture>
                {/* //!max.witdh 650 ise bunu göster */}
                <source media="(max-width:650px)" srcSet={item?.imageUrl} />
                {/* //!min.witdh 650 ise bunu göster */}
                <source media="(min-width:650px)" srcSet={item?.imageUrl} />
                <img src="img_orange_flowers.jpg" alt="Flowers" />
              </picture>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperContainer;
