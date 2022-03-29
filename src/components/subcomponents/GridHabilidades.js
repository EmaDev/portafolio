import React from 'react';
import styled from '@emotion/styled';
import { ItemHabilidad } from './ItemHabilidad';

const Iconos = require.context('../../source/iconos', true);

const Container = styled.div`
   width: 90%;
   max-width: 500px;
   margin: auto;
   display: grid;
   grid-template-columns: 33% 33% 33%;
   grid-gap: 1rem;
   align-items: center;
   padding-bottom: 6rem;
`;

const teconologias = [
    {icono: 'js-icon', nombre: 'Java Script'},
    {icono: 'ts-icon', nombre: 'Type Script'},
    {icono: 'java-icon', nombre: 'Java'},
    {icono: 'react-icon', nombre: 'React Js y Native'},
    {icono: 'html-icon', nombre: 'HTML 5'},
    {icono: 'css-icon', nombre: 'CSS 3'},
    {icono: 'node-icon', nombre: 'Node JS'},
    {icono: 'npm-icon', nombre: 'NPM'},
    {icono: 'pwa-icon', nombre: 'Progresive Web App'},
    {icono: 'mysql-icon', nombre: 'SQL DataBase'},
    {icono: 'firebase-icon', nombre: 'Firebase Cloud'},
    {icono: 'git-icon', nombre: 'Git'},
];

export const GridHabilidades = () => {
  return (
    <Container>
        {
            teconologias.map(item => (
                <ItemHabilidad key={item.nombre} 
                src={ Iconos(`./${item.icono}.svg`)}
                nombre={item.nombre}
                />
            ))
        }
    </Container>
  )
}
