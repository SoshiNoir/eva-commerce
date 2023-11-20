import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "..";
import NextArrow from '../../../assets/next-arrow.png';
import PrevArrow from '../../../assets/prev-arrow.png';
import { Container, FilteredSliderContainer } from "./styles";

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

interface ProductSliderProps {
  category: string;
}

export function ProductSlider({ category }: ProductSliderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, [category]);

  const prevButtonSelector = `.prev-arrow-${category}`;
  const nextButtonSelector = `.next-arrow-${category}`;

  return (
    <Container>
      <div className={`prev-arrow prev-arrow-${category}`}>
        <button><img src={PrevArrow} alt="" /></button>
      </div>
      <Swiper
        slidesPerView={4}
        speed={500}
        loop={true}
        navigation={{
          prevEl: prevButtonSelector,
          nextEl: nextButtonSelector,
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
      <div className={`next-arrow next-arrow-${category}`}>
        <button><img src={NextArrow} alt="" /></button>
      </div>
    </Container>
  );
}

export function FilteredSlider() {
  const categories = ["smartphones", "laptops", "tops", "skincare"];

  return (
    <>
      {categories.map((category) => (
        <FilteredSliderContainer>
          <div className="title-container">
            <h1>{category}</h1>
          </div>
          <ProductSlider key={category} category={category} />
        </FilteredSliderContainer>
      ))}
    </>
  );
}