import React from 'react';
import { MainContainer, DateTitle, CityTitle, TempImage, Temperature, Desc, MinMax, Climate } from '../../style/styled';



export default function Info() {
  return (
    <MainContainer className='main-container'>
      <DateTitle className='date'>Terça, 13/09/2022</DateTitle>
      <CityTitle className='city'>Paris, FR</CityTitle>
      <div className='image-div'>
        <TempImage src='' alt='imagem do clima' />
      </div>
      <div className='temp-div'>
        <Temperature className='temp'>22°C</Temperature>
      </div>
      <div className='description-div'>
        <Desc>Céu limpo</Desc>
      </div>
      <MinMax className='max-min-temps'>
        <span className='min-temp'>Mín: 20°C</span>
        <span className='max-temp'>Máx: 24°C</span>
      </MinMax>
      <Climate className='umidity-wind'>
        <span className='umidity'>Umidade: 70%</span>
        <span className='wind'>Vento: 3km/h</span>
      </Climate>
    </MainContainer>
  );
}
