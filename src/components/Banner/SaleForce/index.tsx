import Cadeado from '../../../assets/cadeado.svg';
import Caminhao from '../../../assets/caminhao.svg';
import Cartao from '../../../assets/cartao.svg';
import { Container } from './styles';


export function SaleForce() {
  return (
    <Container>
      <div className='lock-container'>
        <img src={Cadeado} alt="" />
        <p>Site Seguro</p>
      </div>
      <div className='card-container'>
        <img src={Cartao} alt="" />
        <p>Até 12X sem juros</p>
      </div>
      <div className='truck-container'>
        <img src={Caminhao} alt="" />
        <p>Entrega para todo o Brasil</p>
      </div>
    </Container>
  );
}