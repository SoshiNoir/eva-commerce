import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "..";
import NextArrow from '../../../assets/next-arrow.png';
import PrevArrow from '../../../assets/prev-arrow.png';
import { Container, NextContainer, PrevContainer } from "./styles";

interface Product {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
}

export function ProductSlider() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Container>
      <PrevContainer className="prev-arrow"><button><img src={PrevArrow} alt="" /></button></PrevContainer>
      <Swiper
        slidesPerView={4}
        speed={500}
        loop={true}
        navigation={{
          prevEl: ".prev-arrow",
          nextEl: ".next-arrow",
        }}
        modules={[Navigation]}
        spaceBetween={100}
        autoplay={true}
      >
        {products.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NextContainer className="next-arrow"><button><img src={NextArrow} alt="" /></button></NextContainer>
    </Container>
  );
}
