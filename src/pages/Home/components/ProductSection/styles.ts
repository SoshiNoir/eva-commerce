import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  gap: 64px;

.title {
  font-weight: bold;
  font-size: ${props => props.theme.textSizes['xxl']};
  margin-bottom: 42px;
}

.title-container {
  border-top: solid 4px ${props => props.theme.colors['primary']};
  top: 25%;
  width: 64px;
}
`;
