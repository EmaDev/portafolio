import React, { useState } from 'react';
import styled from '@emotion/styled';

const Formulario = styled.form`
   width: 90%;
   max-width: 600px;
   margin: auto;
   margin-top: -2rem;
   margin-bottom: 2rem;
`;
const Input = styled.input`
   width: 100%;
   padding: 1.5rem;
   background-color: var(--backgroundSecondary);
   font-size: 2rem;
   color: var(--primary);
   border-radius: 6px;
   margin: 1rem 0;
`;
const TextArea = styled.textarea`
   width: 100%;
   min-height: 350px;
   padding: 1.5rem;
   background-color: var(--backgroundSecondary);
   font-size: 2rem;
   color: var(--primary);
   border-radius: 6px;
   margin: 1rem 0;
`;

const BotonSubmit = styled.input`
   width: 100%;
   padding: 1.5rem;
   background-color: #1e2428;
   font-size: 2rem;
   border-radius: 6px;
   color: var(--secondary);
`;

export const FormularioContacto = () => {

  const [formValues, setFormValues] = useState({name: '', email: '',message: ''});
  
  const {name, email, message} = formValues;

  const onInputStateChange = ({target}) => {
      
    setFormValues({
        ...formValues,
        [target.name]: target.value
    });
  }
  return (
    <Formulario action="https://formsubmit.co/emanuel00developer@gmail.com" method="POST">
        <Input
        type="text"
        placeholder='Nombre'
        name='name'
        value={name}
        onChange={onInputStateChange}
        />
        <Input
        type="email"
        name="email"
        placeholder='Correo electronico'
        value={email}
        onChange={onInputStateChange}
        />
        <TextArea placeholder='Mensaje'
        name="message"
        value={message}
        onChange={onInputStateChange}
        />
        <BotonSubmit type="submit" value="Enviar mensaje"/>
    </Formulario>
  )
}
