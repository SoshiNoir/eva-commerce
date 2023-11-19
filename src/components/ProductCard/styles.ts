import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  div {
    border-radius: 4px;
    background-color: ${props => props.theme.colors['white-500']};
  }

  img {
    border-radius: 4px 4px 0 0;
    width: 236px;
    height: 236px;
  }

  .product-info {
    margin: 8px 0 8px 0;
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .product-info h1 {
    font-size: ${props => props.theme.textSizes['s']};
    font-weight: 300;
    text-decoration: center;

  }


  .product-price {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 8px;

    p:first-child {
      text-align: end;
      margin-right: 74px;
      text-decoration: line-through;
      color: ${props => props.theme.colors['black-300']};
      font-size: ${props => props.theme.textSizes['xs']};
}
    h1 {
      color: ${props => props.theme.colors['primary']};
      font-weight: 800;
      font-size: ${props => props.theme.textSizes['xxxl']};
  }
}
`;
