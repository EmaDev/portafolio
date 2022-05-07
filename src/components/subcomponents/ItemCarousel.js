import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
   width: 400px;
   height: 400px;
   background-color: var(--background-primary);
   margin:auto;
   border-radius: 3px;
   margin: 1rem 2rem;
   position: relative;
   img{
       height: 100%;
   }

   @media(min-width: 678px){
       width: 400px;
       height: 500px;
   }
`;

const ContainerInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(46,60,69,0.85);
`;

const Titulo = styled.h3`
   margin: 1rem 0; 
   font-size: 2.2rem;
   color: var(--secondary);
   font-weight: 800;
   text-align: center;
   text-transform: uppercase;
`;
const Descripcion = styled.div`
   margin:auto;
   overflow-y: auto;
   height: 65%;
   width: 95%;
   padding-bottom: 3rem;
   
   p{
    margin: auto;
    width: 95%;
    max-height: 70%;
    text-align: center;
    font-size: 1.7rem;
    color: var(--secondary);
   }
`;

const BotonOcultar = styled.button`
    margin: .5rem auto;
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--secondary);
    background-color: #4e3f83;
    padding: .7rem;
    border-style: none;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
`;

const ListaBotones = styled.div`
   width: 80%;
   margin: auto;
   position: absolute;
   bottom: 1rem;
   left: 0;
   right: 0;
   margin: auto;
`;



export const ItemCarousel = ({ img, data, item1 }) => {

    const [mostrarInfo, setMostrarInfo] = useState(true);
    const { nombre, descripcion, url } = data;
    return (
        <Container>
            {
                (item1) &&
                <>
                    {
                        (mostrarInfo) ?
                            <>
                                <ContainerInfo>
                                    <Titulo>{nombre}</Titulo>
                                    <Descripcion>
                                        <p>{descripcion}</p>
                                        <div></div>
                                    </Descripcion>
                                </ContainerInfo>
                                <ListaBotones>
                                    <BotonOcultar onClick={ () => {window.location.assign(url);} }>Visitar Web</BotonOcultar>
                                    <BotonOcultar onClick={() => setMostrarInfo(false)}>Ocultar info</BotonOcultar>
                                </ListaBotones>
                            </>
                            :
                            <ListaBotones>
                                <BotonOcultar onClick={() => setMostrarInfo(true)}>Mostrar info</BotonOcultar>
                            </ListaBotones>
                    }
                </>
            }
            <img src={img} alt={nombre} />
        </Container>
    )
}
