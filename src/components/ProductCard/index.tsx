import React from "react";
import { Container } from "./styles";

interface Product {
  id: number;
  title: string;
  rating: number;
  thumbnail: string;
  discountPercentage: number;
  price: number;
  // Adicione mais propriedades conforme necessário
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Calcula o preço com desconto fixo de 10%
  const discountedPrice = product.price - (product.price * 0.1);

  return (
    <Container>
      <div>
        <img src={product.thumbnail} alt="" />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.rating}</p>
        </div>
        <div className="product-price">
          <p className="price-off">R$-{product.discountPercentage}%</p>
          <h1>R${product.price},00</h1>
          <p>Ou R${discountedPrice.toFixed(2)} com 10% off no boleto</p>
        </div>
      </div>
    </Container>
  );
};
