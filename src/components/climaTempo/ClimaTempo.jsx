import React, { useState } from 'react';
import {
  WeatherCard,
  MainContainer,
  DateTitle,
  CityTitle,
  TempImage,
  Temperature,
  Desc,
  MinMax,
  Climate,
  SearchBar,
  Input,
  Icon,
  Main,
} from '../../style/styled';

export default function ClimaTempo() {
  const [city, setCity] = useState('São Paulo');
  const [weatherValue, setWeather] = useState({});

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (evt) => {
    const api = {
      key: '3cc95f454e8397a9578b2ce43cc94c6c',
      base: 'https://api.openweathermap.org/data/2.5/',
    };

    if (evt.key === 'Enter') {
      fetch(
        `${api.base}weather?q=${city}&units=metric&APPID=${api.key}&lang=pt_br`
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else throw new Error('Não foi possível obter os dados');
        })
        .then((data) => {
          setWeather(data);
          setCity('');
        });
    }
  };

  const iconMaker = (iconId) => {
    let icon = `https://openweathermap.org/img/w/${iconId}.png`;
    return icon;
  };

  return (
    <WeatherCard>
      {typeof weatherValue.main !== 'undefined' ? (
        <MainContainer className='main-container'>
          <SearchBar>
            <Input
              onChange={handleChange}
              className='search-input'
              type='text'
              onKeyPress={handleSearch}
              placeholder='Buscar'
            />
            <Icon>
              <i className='fa-solid fa-magnifying-glass'></i>
            </Icon>
          </SearchBar>
          <CityTitle className='city'>
            {weatherValue.name}, {weatherValue.sys.country}
          </CityTitle>
          <DateTitle className='date'>
            {new Date().toLocaleDateString('pt-BR', { dateStyle: 'full' })}
          </DateTitle>
          <div className='image-div'>
            <TempImage
              src={iconMaker(weatherValue.weather[0].icon)}
              alt='ícone do clima'
            />
          </div>
          <div className='temp-div'>
            <Temperature className='temp'>
              {Math.round(weatherValue.main.temp)}°C
            </Temperature>
          </div>
          <div className='description-div'>
            <Desc>{weatherValue.weather[0].description}</Desc>
          </div>
          <MinMax className='max-min-temps'>
            <span className='min-temp'>
              Mín: {Math.round(weatherValue.main.temp_min)}°C
            </span>
            <span className='max-temp'>
              Máx: {Math.round(weatherValue.main.temp_max)}°C
            </span>
          </MinMax>
          <Climate className='umidity-wind'>
            <span className='umidity'>
              Umidade: {weatherValue.main.humidity}%
            </span>
            <span className='wind'>
              Vel. Vento: {weatherValue.wind.speed}m/s
            </span>
          </Climate>
        </MainContainer>
      ) : (
        <MainContainer>
          <SearchBar>
            <Input
              onChange={handleChange}
              className='search-input'
              type='text'
              onKeyPress={handleSearch}
              placeholder='Buscar'></Input>
              <i className='fa-solid fa-magnifying-glass alt-icon'></i>
          </SearchBar>
          <Main>
            <h3>Pesquise uma cidade...</h3>
          </Main>
        </MainContainer>
      )}
    </WeatherCard>
  );
}
