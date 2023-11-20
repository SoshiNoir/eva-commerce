import { Outlet } from 'react-router-dom';
import { Banner } from '../../components/Banner';
import { SaleForce } from '../../components/Banner/SaleForce';
import { Header } from '../../components/Header';
import { LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Banner />
      <SaleForce />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}