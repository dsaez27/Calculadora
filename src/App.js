import React from 'react';
import { Calculadora } from 'Components/Calculadora/Calculadora';

export const App = () => {

    return (
        <>
            <div className="text">
                <span className="b c-white f-30">Calculadora</span>
                <br />
                <span className="t c-blue-light f-18 ">Básica</span>
            </div>
            <div>
                <Calculadora />
            </div>
        </>
    );
};
