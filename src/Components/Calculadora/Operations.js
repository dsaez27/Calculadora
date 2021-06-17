import React from 'react';

export const Operations = ({ operation, result }) => {
    const operator = ['+', '-', '*', '/'];

    return (
        <div className="operations subgrid">
            {operator.map((item) => {
                return (
                    <div key={item}>
                        <button
                            onClick={operation}
                            value={item}
                            key={item + '.a'}
                            className="c-red-light">
                            {item}
                        </button>
                    </div>
                );
            })}
            <button onClick={result} value="=" className="c-red-light t">
                =
            </button>
        </div>
    );
};
