import React from 'react';

export const Digits = ({ operation }) => {
    const calcBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.', '%'];
    return (
        <div className="digits flex">
            {calcBtns.map((item) => {
                return (
                    <div key={item}>
                        <button onClick={operation} value={item} key={item} className="c-white">
                            {item}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
