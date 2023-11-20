import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';

import { Pagination } from "swiper/modules";
import BannerImage from '../../assets/banner.png';
import { Container } from "./styles";

export function Banner() {
  return (
    <>
      <Container >
        <Swiper
          pagination={{ clickable: true }}
          slidesPerView={1}
          speed={500}
          loop={true}
          modules={[Pagination]}
        >
          <SwiperSlide><img className="banner-image" src={BannerImage} alt="" /></SwiperSlide>
          <SwiperSlide><img className="banner-image" src={BannerImage} alt="" /></SwiperSlide>
          <SwiperSlide><img className="banner-image" src={BannerImage} alt="" /></SwiperSlide>
          <SwiperSlide><img className="banner-image" src={BannerImage} alt="" /></SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}