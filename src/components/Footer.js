import React from 'react';
import styled from '@emotion/styled';
import {AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';

const Container = styled.div`
  padding: 3rem 1rem;
  background-color: var(--backgroundPrimaryDark);
  margin:auto;
`
const IconosContacto = styled.div`
   width: 90%;
   max-width: 400px;
   margin: auto;
   display: flex;
   justify-content: center;
   
   a{
       margin: 1rem;
   }
`;

const Texto = styled.p`
  max-width: 400px;
  margin:auto;
  text-align: center;
  color: var(--secondary);
  font-size: 2rem;
  font-weight: 600;
  span{
      color: red;
  }
`;
const Copyright = styled.p`
  max-width: 400px;
  margin:auto;
  text-align: center;
  color: var(--secondary);
  font-size: 1.8rem;
`;

export const Footer = () => {
  return (
    <Container>

        <IconosContacto>
            <a href='https://github.com/EmaDev' target="_blank"><AiFillGithub size="6rem" color="white"/></a>
            <a href='https://www.instagram.com/emacisterna/' target='_blank'><AiOutlineInstagram size="6rem" color="white"/></a>
        </IconosContacto>
        <Texto>Creado con <span>❤️</span> por Emanuel Cisterna</Texto>
        <Copyright>Todos los derechos reservados 2022 © </Copyright>
    </Container>
  )
}
