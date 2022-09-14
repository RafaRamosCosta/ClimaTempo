import React from 'react';
import Info from '../../info/Info';
import BarraBusca from '../barraBusca/BarraBusca';
import styled from 'styled-components';
const WeatherCard = styled.div`
  background-color: #3F26B9;
  height: auto;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  text-align: center;
`;
export default function ClimaTempo() {
  return (
    <WeatherCard>
      <BarraBusca />
      <Info />
    </WeatherCard>
  );
}
