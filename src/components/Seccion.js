import React from 'react';
import styled from '@emotion/styled';
import { DeslizaPorMas } from './subcomponents/DeslizaPorMas';

const Seccion = styled.section`
   background-color: ${props => `var(--${props.bgColor})`};
   min-height: 90vh;
   position: relative;
`;

const SeccionCentrada = styled.section`
   background-color: ${props => `var(--${props.bgColor})`};
   min-height: 90vh;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-contnet: center;
   align-itmes: center;
`;
const Titulo = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 800;
    color: ${props => `var(--${props.textColor})`};
    text-align: center;
    margin-bottom: 2rem;
    padding: 2rem;
`;

export { Seccion, Titulo, SeccionCentrada };
