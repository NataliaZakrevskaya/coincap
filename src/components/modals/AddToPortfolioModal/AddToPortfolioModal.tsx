import React, { ChangeEvent, useState } from 'react';
import { AddToPortfolioModalPropsType } from './types';
import style from './AddToPortfolioModal.module.scss';

const AddToPortfolioModal = ( { name, price }: AddToPortfolioModalPropsType ) => {
  const [ value, setValue ] = useState<number>( 0 );
  const [ currencySize, setCurrencySize ] = useState<number>( 0 );
  const onInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    if ( +e.currentTarget.value >= 1 ) setValue( +e.currentTarget.value );
    setCurrencySize(value / +price);
  };
  return (
    <div className={ style.modalInner }>
      <label>
        <div>
          <p>You have</p>
          <input type="number" value={ value } onChange={ onInputChange }/>
        </div>
      </label>
      <div>
        <p>You will get:</p>
        <p>{currencySize} {name}</p>
      </div>
      <button onClick={() => alert(`добавить в стор ${currencySize}`)}>get</button>
    </div>
  );
};

export default AddToPortfolioModal;