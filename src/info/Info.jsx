import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    padding: 1vw;
    line-height: 5vh;
    color: #fff;
`;

const DateTitle = styled.h1`
    font-size: 10pt;
`;

const CityTitle = styled.h2`
    font-size: 25pt;
    padding-top: 1vh;
`;

const TempImage = styled.img`
    width: 40vw;
`;

const Temperature = styled.h3`
    font-size: 26pt;
`;

const Desc = styled.span`
    text-transform: capitalize;
    font-size: 15pt;
`;

const MinMax = styled.div`
    display: flex;
    font-size: 15pt;
    padding-top: 1vh;
    justify-content: space-between;
`;

const Climate = styled.div`
    display: flex;
    font-size: 12pt;
    padding-top: 1vh;
    justify-content: space-between;
`;

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
