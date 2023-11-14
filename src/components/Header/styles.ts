import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;


  align-items: center;
  justify-content: center;
  background-color:  ${props => props.theme.colors['black-700']};

nav {
  width: 100%;
  display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin: 10rem;
}

input {
  width: 28.125rem;
  height: 2rem;
}

.customer-portal {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  color: ${props => props.theme.colors['white-700']};
}

.account, .cart {
  display: flex;
  flex-direction: row;
  gap: .5rem;
}

`;