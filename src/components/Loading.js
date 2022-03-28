import React from 'react';

export const Loading = ({color}) => {
    return (
        <div className="containerSpinner" >
            <div className="spinner">
                <div className={`dot1 ${color}`}></div>
                <div className={`dot2 ${color}`}></div>
            </div>
        </div>
    )
}
