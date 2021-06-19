import React from 'react';
import PropTypes from 'prop-types';

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
            <button onClick={result} value="=" className="c-red-light">
                =
            </button>
        </div>
    );
};

Operations.propTypes = {
    operation: PropTypes.func.isRequired,
    result: PropTypes.func.isRequired,
}
