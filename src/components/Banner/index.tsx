import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import { Container, CustomSwiper } from './styles';

import { Pagination } from 'swiper/modules';
import BannerImage from '../../assets/banner.png';

export function Banner() {
  return (
    <>
      <Container>
        <CustomSwiper
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
        </CustomSwiper>
      </Container>
    </>
  );
}
