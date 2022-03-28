import React from 'react';
import Carousel from 'react-elastic-carousel';
import { ItemCarousel } from './ItemCarousel';

export const ImageCarousel = ({data}) => {
    
    const {imagenes} = data;
    return (

        <Carousel>
            {
                imagenes.map((item, i) => (
                    <ItemCarousel key={i} img={item.source}
                        item1={(i === 0) ? true : false}
                        data={data}
                    />
                ))
            }
        </Carousel>
    )
}
