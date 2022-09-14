import React from 'react';
import { SearchBar, Input, Icon} from '../../style/styled';

export default function BarraBusca() {
  return (
    <SearchBar>
      <Input className='search-input' type='text' placeholder='Buscar' />
      <Icon className='fa-solid fa-magnifying-glass'></Icon>
    </SearchBar>
  );
}
