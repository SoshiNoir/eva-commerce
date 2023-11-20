import styled from 'styled-components';
import { Swiper } from 'swiper/react';

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
`;

export const CustomSwiper = styled(Swiper)`
  .swiper-pagination {
    bottom: 50px;
  }

  .swiper-pagination-bullet {
    background-color: ${props => props.theme.colors['white-300']}
  }

  .swiper-pagination-bullet-active {
    background-color: ${props => props.theme.colors['primary']}
  }
`;