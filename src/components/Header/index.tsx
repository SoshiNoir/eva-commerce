
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png';
import Search from '../../assets/search.svg';
import DropdownMenu from "./Dropdown";
import { HeaderContainer } from './styles';

export function Header() {
  const categories = ['Smartphones', 'Laptops', 'Tops', 'Skincare'];

  return (
    <HeaderContainer>
      <nav>
        <NavLink to='/' title='Eva Commerce'>
          <img src={Logo} />
        </NavLink>
        <div className="category-and-search">
          <DropdownMenu title="Categorias" options={categories} />
          <div className="search-bar">
            <input type="text" />
            <button><img src={Search} alt="Pesquisar" /></button>
          </div>
        </div>

        <div className="customer-portal">
          <div className="account">
            <p>Minha Conta</p>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_101_66)">
                <path d="M7 8C9.20937 8 11 6.20937 11 4C11 1.79063 9.20937 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8812 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8812 12.1188 9 9.8 9Z" fill="#FDFDFD" />
              </g>
              <defs>
                <clipPath id="clip0_101_66">
                  <rect width="14" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="cart">
            <p>Carrinho</p>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_101_74)">
                <path d="M16.5037 9.41622L17.981 2.91622C18.0877 2.44691 17.731 2 17.2497 2H4.97525L4.68881 0.599688C4.61744 0.250656 4.31031 0 3.95403 0H0.75C0.335781 0 0 0.335781 0 0.75V1.25C0 1.66422 0.335781 2 0.75 2H2.93384L5.12909 12.7323C4.60391 13.0344 4.25 13.6007 4.25 14.25C4.25 15.2165 5.0335 16 6 16C6.9665 16 7.75 15.2165 7.75 14.25C7.75 13.7602 7.54853 13.3177 7.22425 13H13.7757C13.4515 13.3177 13.25 13.7602 13.25 14.25C13.25 15.2165 14.0335 16 15 16C15.9665 16 16.75 15.2165 16.75 14.25C16.75 13.5571 16.3472 12.9584 15.7632 12.6748L15.9356 11.9162C16.0422 11.4469 15.6855 11 15.2042 11H6.81616L6.61163 10H15.7724C16.1226 10 16.4262 9.75769 16.5037 9.41622Z" fill="#FDFDFD" />
              </g>
              <defs>
                <clipPath id="clip0_101_74">
                  <rect width="18" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

        </div>
      </nav>
    </HeaderContainer>
  );
}