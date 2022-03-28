import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import { HiMenu } from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa';


const Container = styled.div`
   height: 100vh;
   width: 200px;
   position: absolute;
   right: 0;
`;

const ContenedorNavBar = styled.div`
   position: fixed;   
   background-color: var(--backgroundPrimaryDark);
   width: 200px;
   height: 100vh;
   top:0;
   padding: 0;
   transition: all 200ms linear;
   z-index: 999;
   ul{
    margin-top: 5rem;
   }
   li{
    list-style:none;
    color: rgba(230,230,230, .9);
    text-align: center;
    padding: 15px 10px;
    border-bottom: 1px solid rgba(100,100,100, .3);
   }
`;

const DivToggle = styled.div`
   padding: 1rem;
   cursor: pointer;
   position: absolute;
   right: 200px;
   div{
       display: flex;
       padding: .7rem 1.3rem;
       align-items:center;
       border-radius: 8px;
       background-color: var(--yellow);
       box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);

       p{
           margin: 0;
           padding: 0;
           font-weight: 600;
           margin-right: .3rem;
           color: white;
           text-transform: uppercase;
       }
    }
`;

const ContainerBigScreen = styled.div`
   width: 100%;
   padding: 1.5rem 10rem;
   background-color: var(--backgroundPrimaryDark);
   position: fixed;
   z-index: 999;
`;
const ContainerIconosHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
const ItemsNav = styled.div`
   a{
    font-size: 1.8rem;
    color: var(--secondary);
    margin: 0 2rem;
    padding: 0;
    font-weight: 800;
    text-transform: uppercase;
    cursor: pointer;
   }
   a:hover{
       color: var(--yellow);
   }
   a:active {
    color: var(--yellow);
   }
`;

export const Navbar = () => {

    const btnRef = useRef(null);

    const handleOcultar = () => {
        btnRef.current.classList.toggle('activeNav');
    }
    const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' });
    return (
        <>
            {(isBigScreen) ?
                <ContainerBigScreen>
                    <ContainerIconosHeader>
                        <a href="#"><FaLaptopCode size="4rem" color="white" style={{marginLeft: '2rem'}}/></a>
                        <ItemsNav>
                            <a href="#conocimientos">Conocimientos</a>
                            <a href="#proyectos">Proyectos</a>
                            <a href="#actualidad">Actualidad</a>
                            <a href="#contacto">Contacto</a>
                        </ItemsNav>
                    </ContainerIconosHeader>
                </ContainerBigScreen>
                :
                (<Container>
                    <ContenedorNavBar ref={btnRef} className="navInicial">
                        <DivToggle onClick={handleOcultar}>
                            <div>
                                <p>Menu</p>
                                <HiMenu size='2rem' color='white' />
                            </div>
                        </DivToggle>

                        <ul>
                            <li><a href='#conocimientos' onClick={handleOcultar}>Conocimientos</a></li>
                            <li><a href='#proyectos' onClick={handleOcultar}>Proyectos</a></li>
                            <li><a href='#actualidad' onClick={handleOcultar}>Actualidad</a></li>
                            <li><a href='#contacto' onClick={handleOcultar}>Contacto</a></li>
                        </ul>
                    </ContenedorNavBar>
                </Container>)
            }
        </>
    )
}