import React from 'react';

const Age = (props) => {

  
  return (
    <div>
      <p>Hoy tengo {props.age} años de edad</p>
      <button type="button" onClick={props.getAge}>
        Hazme más viejo
      </button>
      <p>Hoy tengo {props.gift} regalos</p>
      <button type="button" onClick={props.getGift}>
        Dame regalos
      </button>
    </div>
  );
};
export default Age;
