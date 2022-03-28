import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ImageCarousel } from './subcomponents/ImageCarousel';
import { getProyectos } from '../firebase/funciones';
import { Loading } from './Loading';

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding-bottom: 6rem;

  @media(min-width: 678px){
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 2rem;
  }
`;


export const CarouselProyectos = () => {

    const [stateProyectos, setStateProyectos] = useState([]);

    useEffect(() => {
        const getProyectosFirebase = async () => {
            const resp = await getProyectos();
            setStateProyectos(resp);
        }
        getProyectosFirebase();
    }, []);

    
    return (
        <Container>
            {
                (stateProyectos.length > 0) ?
                    <>
                        {
                            stateProyectos.map((proyecto) => (
                                <ImageCarousel key={proyecto.nombre} 
                                data={proyecto}/>
                            ))
                        }
                    </>
                    :
                    <Loading color="dotsColorSecondary"/>
            }
        </Container>
    )
}
