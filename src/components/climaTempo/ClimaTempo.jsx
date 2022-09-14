import React from 'react';
import Info from '../info/Info';
import BarraBusca from '../barraBusca/BarraBusca';
import { WeatherCard } from '../../style/styled';

export default function ClimaTempo() {
  return (
    <WeatherCard>
      <BarraBusca />
      <Info />
    </WeatherCard>
  );
}
