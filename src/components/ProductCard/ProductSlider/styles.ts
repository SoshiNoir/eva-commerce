import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;


.next-arrow button {
  background: none;
  border: none;
}

.prev-arrow button {
  background: none;
  border: none;
}

`
export const FilteredSliderContainer = styled.div`
  .section-title-container {
  border-top: solid 4px ${props => props.theme.colors['primary']};
  top: 25%;
  width: 64px;
}
  .section-title {
  font-weight: bold;
  font-size: ${props => props.theme.textSizes['xxl']};
  margin-bottom: 42px;
}
  .section-title:first-letter {
    text-transform: uppercase;
  }

`