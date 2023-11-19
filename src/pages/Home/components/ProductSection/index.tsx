import { ProductSlider } from "../../../../components/ProductCard/ProductSlider";
import { Container } from "./styles";

export function ProductSection() {
  return (
    <Container>
      <div className="title-container">
        <h1 className="title">Destaques</h1>
      </div>
      <ProductSlider />
    </Container>
  )
}