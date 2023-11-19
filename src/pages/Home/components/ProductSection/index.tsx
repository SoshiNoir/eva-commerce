import { ProductSlider } from "../../../../components/ProductCard/ProductSlider";
import { Container } from "./styles";

export function ProductSection() {
  return (
    <Container>
      <h1 className="title">Destaques</h1>
      <ProductSlider />
    </Container>
  )
}