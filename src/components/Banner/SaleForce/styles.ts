import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  gap: 64px;
  margin: 64px 0 64px 0;



    div {
      gap: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 256px;
    }


  img {
    color: ${props => props.theme.colors['primary']};
    display: flex;
    max-width: 50px;
    max-height: 50px;
    background: none;
  }

  p {
    color: ${props => props.theme.colors['primary']};
  }

  .lock-container {
    border-right: solid 1px ${props => props.theme.colors['white-300']};
    right: 100%;

  }

  .card-container {
    border-right: solid 1px ${props => props.theme.colors['white-300']};
    right: 100%;
  }

  .truck-container {
    display: flex;
    flex-direction: column;
    right: 100%;
  }
`