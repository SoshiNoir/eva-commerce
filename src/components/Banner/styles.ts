import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: none;
  object-fit: cover;
  overflow: hidden;
  filter: drop-shadow(${props => props.theme.colors['black-300']} 0px 4px 4px);

  .banner-image {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    background: none;
    margin-top: -65px;
  }
`