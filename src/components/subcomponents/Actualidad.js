import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getInfoActualidad } from '../../firebase/funciones';
import { Titulo } from '../Seccion';
import { Loading } from '../Loading';

const Container = styled.div`
   width: 90%;
   max-width: 800px;
   min-height: 70vh;
   background-color: var(--backgroundSecondary);
   margin: auto;
   border-radius: 6px;
`;
const ContainerIconos = styled.div`
   width: 90%;
   max-width: 400px;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   img{
       width: 110px;
       margin: 1rem;
   }
`;

const Descripcion = styled.p`
   width: 80%;
   margin: auto;
   font-size: 1.8rem;
   color: var(--primary);
   text-align: center;
`;


export const Actualidad = () => {

    const [stateInfoActualidad, setStateInfoActualidad] = useState({});

    useEffect(async () => {
        
        const getInfo = async() => {
            const resp = await getInfoActualidad();
            setStateInfoActualidad(resp);
        }
        getInfo();

    }, []);

    return (
        <Container>
            <Titulo textColor="primary">Actualidad</Titulo>
            <h1>Hello world</h1>
            {
                (Object.keys(stateInfoActualidad).length != 0) ?
                    <>
                        
                        <Descripcion>{stateInfoActualidad.descripcion}</Descripcion>
                        <ContainerIconos>
                            {
                                stateInfoActualidad.imagenes.map((logo, i) => (
                                    <img key={i} src={logo} alt="leguaje de programacion" />
                                ))
                            }
                        </ContainerIconos>
                    </>
                :
                <Loading color="dotsColorPrimary"/>
            }
        </Container>
    )
}
