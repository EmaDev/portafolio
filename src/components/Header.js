import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';

import headerImage from '../assets/header-icon.svg';
import { DeslizaPorMas } from './subcomponents/DeslizaPorMas';

const Container = styled.div`
   position: relative;
   padding-top: 8rem;   
   width: 100%;
   max-width: 900px;
   min-height: 90vh;
   display: grid;
   margin: auto;
   background-color: var(--backgroundPrimary);
   
`;
const ContainerTextos = styled.div`
   z-index: 5;
`;
const ContainerImage = styled.div`   
    width: 100%;
    max-width: 500px;
    height: 300px;
    margin: auto;
    img{
        width: 100%;
    }
`;

const ContainerBigScreen = styled.div`
   background-color: var(--backgroundPrimary);
   height: 100vh;
   display:flex;
   justify-content: center;
   align-itmes: center;
`;
const AdaptadorTamano = styled.div`
   background-color: blue;
   height: 100%;
   width: 50%;
   position: relative;
`;
const ContenidoBigScreen = styled.div`
   width: 90%;
   margin: auto;
   display: grid;
   grid-template-columns: 60% 40%;
   position: relative;
   div{
       z-index: 2;
   }
`;
const ImagenBigScreen = styled.img`
   width: 700px;
   height: 500px;
   position: absolute;
   right: -5rem;
   top: 0;
   bottom: 0;
   margin:auto;

   @media(max-width: 790px){
       width: 500px;
       height: 400px;
       right: -10rem;
   };
`;

export const Header = () => {

    const [mostrarTextoSecundario, setMostrarTextoSecundario] = useState(false);
    const refTexto = useRef();
    const isBigScreen = useMediaQuery({ query: '(min-width: 700px)' });
    useEffect(() => {
        setTimeout(() => {
            setMostrarTextoSecundario(true);

            refTexto.current.classList.remove('borderLeft');
        }, 2000)
    }, []);

    return (
        <>
            {
                (isBigScreen) ?
                    (
                        <ContainerBigScreen>
                            
                                <ContenidoBigScreen>
                                    <div>
                                        <h1 className='textos hola'>HOLA,</h1>
                                        <h1 className='textos textoDinamico'>{`SOY EMANUEL   `}&#160;{' ,'}
                                            <span ref={refTexto} className='textoDinamico textoOculto borderLeft'>&#160;</span>
                                        </h1>
                                        {
                                    
                                            (mostrarTextoSecundario) &&
                                            <h1 className='textos textoDinamicoSecondary'>{`PROGRAMADOR`}&#160;{`  .`}
                                                <span className='textoDinamicoSecondary textoOculto'>&#160;</span>
                                            </h1>
                                        }
                                    </div>
                                    <ImagenBigScreen src={headerImage}/>
                                </ContenidoBigScreen>
                                
                            
                        </ContainerBigScreen>
                    )
                    :
                    (
                        <Container>
                            <ContainerTextos>
                                <h1 className='textos hola'>HOLA,</h1>
                                <h1 className='textos textoDinamico'>{`SOY EMANUEL `}&#160;{`,`}
                                    <span ref={refTexto} className='textoDinamico textoOculto borderLeft'>&#160;</span>
                                </h1>
                                {
                                    (mostrarTextoSecundario) &&
                                    <h1 className='textos textoDinamicoSecondary'>{`PROGRAMADOR`}&#160;{`  .`}
                                        <span className='textoDinamicoSecondary textoOculto'>&#160;</span>
                                    </h1>
                                }
                            </ContainerTextos>
                            <ContainerImage>
                                <img src={headerImage} />
                            </ContainerImage>

                            <DeslizaPorMas color="secondary" />
                        </Container>
                    )
            }
        </>
    )
}
