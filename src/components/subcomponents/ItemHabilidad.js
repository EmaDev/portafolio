import React, { useRef} from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
   margin-bottom: 1rem;
   cursor: pointer;
   img{
       width: 70px;
   }
   p{
       font-size: 1.5rem;
       font-weight: 600;
       color: var(--primary);
       margin: .5rem 0;
       text-align: center;
   }
`;

export const ItemHabilidad = ({src, nombre}) => {
  
    const textoRef = useRef(null);
   
    const toggleIcon = () => {
        textoRef.current.classList.toggle('ocultar');
    }
    
    return (
    <Container onClick={toggleIcon}>
        <img src={src} style={{width: '70px', height: '70px'}}/>
        <p ref={textoRef} className='ocultar'>{nombre}</p>
    </Container>
  )
}
