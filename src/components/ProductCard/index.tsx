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

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Container>
    <div>
      <img src={product.thumbnail} alt="" />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.rating}</p>
      </div>
      <div className="product-price">
        <p>R$-{product.discountPercentage}</p>
        <h1>R${product.price}</h1>
        <p>Ou X com 10% off no boleto</p>
      </div>
    </div>
  </Container>
);
