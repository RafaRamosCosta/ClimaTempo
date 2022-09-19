import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .alt-icon {
    position: absolute;
    right: 3.5vw;
    top: 5.4vh;
  }
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
        color: white;
    }
`;

export const Icon = styled.i`
    position: absolute;
    top: 4.3vh;
    right: 3.5vw;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const WeatherCard = styled.div`
  backdrop-filter: blur(20px);
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
    width: 6vw;
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

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;