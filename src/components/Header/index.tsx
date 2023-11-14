import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <nav>
        <NavLink to='/' title='Eva Commerce'>
          Title
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}