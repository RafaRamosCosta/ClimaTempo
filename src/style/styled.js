import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
    width: 30vw;
    height: 5vh;
    border-radius: 5px;
    border: none;
    outline: none;
    margin: 2vh 2vw 0 2vw;
    padding: 0 0.5vw;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.2);
    ::placeholder {
        color: #C3C2C8 ;
    }
`;

export const Icon = styled.i`
    position: absolute;
    top: 28.5vh;
    right: 80vh;
`;

export const WeatherCard = styled.div`
  background-color: #3F26B9;
  height: auto;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  text-align: center;
`;

export const MainContainer = styled.div`
    padding: 1vw;
    line-height: 5vh;
    color: #fff;
`;

export const DateTitle = styled.h1`
    font-size: 10pt;
`;

export const CityTitle = styled.h2`
    font-size: 25pt;
    padding-top: 1vh;
`;

export const TempImage = styled.img`
    width: 40vw;
`;

export const Temperature = styled.h3`
    font-size: 26pt;
`;

export const Desc = styled.span`
    text-transform: capitalize;
    font-size: 15pt;
`;

export const MinMax = styled.div`
    display: flex;
    font-size: 15pt;
    padding-top: 1vh;
    justify-content: space-between;
`;

export const Climate = styled.div`
    display: flex;
    font-size: 12pt;
    padding-top: 1vh;
    justify-content: space-between;
`;