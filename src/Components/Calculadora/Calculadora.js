import React, { useState } from 'react';
import { Digits } from 'Components/Calculadora/Digits';
import { Modifier } from 'Components/Calculadora/Modifier';
import { Operations } from 'Components/Calculadora/Operations';
import { ButtonToggle } from 'Components/Calculadora/ButtonToggle'

export const Calculadora = () => {
    /* eslint no-eval: 0 */
    const [input, setInput] = useState('');
    const [isDarkLight, setIsDarkLight] = useState(false);

    const onChange = (e) => {
        setIsDarkLight(e.target.checked);
    };

    const c = () => {
        setInput(input.substr(0, input.length - 1));
    };
    const ca = () => {
        setInput('');
    };
    const operation = (e) => {
        setInput(input + e.target.value);
    };
    const result = () => {
        try {
            setInput(
                String(eval(input)).length > 3 && String(eval(input)).includes('.')
                    ? String(eval(input).toFixed(4))
                    : String(eval(input))
            );
        } catch (err) {
            setInput('Error');
        }
    };

    return (
        <>
            <ButtonToggle onChange={onChange} />
            <div className={isDarkLight ? 'grid-container-active' : 'grid-container-disabled'}>
                <div className="show-input">
                    <span>{input}</span>
                </div>
                <div className="keyboard">
                    <div className="panel_a">
                        <Modifier c={c} ca={ca} />
                        <Digits operation={operation} />
                    </div>
                    <div className="panel_b">
                        <Operations operation={operation} result={result} />
                    </div>
                    <div className="panel_c">
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
};
