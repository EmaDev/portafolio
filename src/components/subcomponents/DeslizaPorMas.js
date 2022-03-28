import React from 'react';
import styled from '@emotion/styled';
import {GoArrowSmallDown} from 'react-icons/go'

const Container = styled.div`
   width: 80%;
   max-width: 300px;
   position: absolute;
   bottom: 1rem;
   left: 0; 
   right:0;
   margin: auto;
   text-align: center;
   align-items: center;
   display: flex;
   justify-content: center;
   color: ${props => `var(--${props.color})`};
   font-weight: 600;

   @media(min-width: 678px){
       display: none;
   }
`
export const DeslizaPorMas = ({color}) => {
  return (
    <Container color={color}>
        <GoArrowSmallDown size={'3.5rem'}/>
        <p>Desliza para ver mas</p>
        <GoArrowSmallDown size={'3.5rem'}/>
    </Container>
  )
}
