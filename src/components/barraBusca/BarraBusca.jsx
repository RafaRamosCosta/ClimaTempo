import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
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

const Icon = styled.i`
    position: absolute;
    top: 28.5vh;
    right: 80vh;
`;


export default function BarraBusca() {
  return (
    <SearchBar>
      <Input className='search-input' type='text' placeholder='Buscar' />
      <Icon className='fa-solid fa-magnifying-glass'></Icon>
    </SearchBar>
  );
}
