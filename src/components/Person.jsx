import React from 'react';

const Person = (props) => {
    console.log(props);
      return (<div>
                <span>Nombre: {props.name},</span>
                <span> Apellido: {props.surname},</span>
                <span> edad: {props.age} </span>
              </div>);
  };

  export default Person;