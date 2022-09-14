import React, { useState } from 'react';
import { SearchBar, ButtonIcon, Input} from '../../style/styled';

export default function BarraBusca() {
  const [city, setCity] = useState('São Paulo');

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleSearch = async () => {
    await fetch(`http://api.weatherapi.com/v1/current.json?key=b7d66cec720941688a4222434221409&q=${city}&lang=pt`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      else throw new Error('Não foi possível obter os dados');
    })
    .then((data) => {
      console.log(data);
    })
    
  }

  return (
    <SearchBar>
      <Input onChange={handleChange}className='search-input' type='text' placeholder='Buscar' />
      <ButtonIcon onClick={() => handleSearch()}><i className='fa-solid fa-magnifying-glass'></i></ButtonIcon>
    </SearchBar>
  );
}
