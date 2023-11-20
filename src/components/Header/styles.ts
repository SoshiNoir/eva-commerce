import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  z-index: 1;


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

.category-and-search {
  display: flex;
  gap: 16px;
}

.search-bar {
  position: relative;
  width: 28.125rem;
  height: 2rem;
  max-width: 100%;


input {
  width: 100%;
  height: 2rem;
  border-radius: 4px;
  box-shadow: none;
  border: none;

}

input:focus {
  outline: none;
}

button {
  height: 100%;
  aspect-ratio: 1;
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  border: none;
}
}

.customer-portal {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  color: ${props => props.theme.colors['white-700']};
  font-weight: 300;
}

.account, .cart {
  display: flex;
  flex-direction: row;
  gap: .5rem;
}

`;