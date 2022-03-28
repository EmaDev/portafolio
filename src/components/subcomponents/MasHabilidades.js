import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import { getHabilidadesExtra } from '../../firebase/funciones';

const Container = styled.div`
   width: 90%;
   max-width: 600px;
   margin: auto;
   padding-bottom: 6rem;
   h2{
    text-align: center;
    text-transform: uppercase;
    color: var(--primary);
    font-size: 1.9rem;
    font-weight: 800;
    }
`;
const ArrowsSlide = styled.div`
  margin: auto;
`;
const ContainerIconos = styled.div`
   padding: 1rem;
   display: flex;
   align-items: center;
   overflow-x: auto;
`;

const Icono = styled.div`
   margin: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   
   p{
       text-align: center;
       margin: .5rem;
       display: inline-block;
       white-space: nowrap;
       font-size: 1.5rem;
       color: var(--primary);
       font-weight: 600;
   }
   img{
       max-width: 100px;
   }
`;


export const MasHabilidades = () => {

    const [stateHabilidades, setStateHabilidades] = useState([]);

    useEffect( async() => {
        const getHabilidades = async() => {
            const resp = await getHabilidadesExtra();
            setStateHabilidades(resp);
        }

        getHabilidades();
    },[]);

  return (
    <Container>
        <h2>otros conocimientos</h2>
        {
            (stateHabilidades.length > 0) ?
            
            
            <ContainerIconos>
            <ArrowsSlide><IoIosArrowBack size='3rem' color="black"/></ArrowsSlide>
            {
                stateHabilidades.map( icono => (
                    <Icono key={icono.nombre}>
                        <img src={icono.source}/>
                        <p>{icono.nombre}</p>
                    </Icono>
                ))
            }
            <ArrowsSlide><IoIosArrowForward size='3rem' color="black"/></ArrowsSlide>
            </ContainerIconos>
            
            :
            <h1>Casrgond....</h1>
        }
    </Container>
  )
}
