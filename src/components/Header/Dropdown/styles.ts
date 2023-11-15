import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';

export const LayoutContainer = styled(Dropdown)`
  .Dropdown-root {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 300;
  }

  .CustomDropdownControl {
    position: relative;
    display: flex;
    align-items: center;
  }


  .Dropdown-control {
    border: none;
    background: transparent;
    color: white;
    padding-right: 30px;

  }

  .Dropdown-menu {
    background: white;
    border-radius: 4px;
    width: 167px;
  }

  .Dropdown-option {
    color: black;
    padding-left: 18px;
    font-weight: 300;
    position: relative;

    &:not(:last-child) {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.colors['white-300']};
      }
    }
  }
`;