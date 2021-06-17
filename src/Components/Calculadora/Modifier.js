import React from 'react';

export const Modifier = ({ c, ca }) => {
    return (
        <>
            <div className="modifiers subgrid">
                {/* clear button */}
                <button onClick={c} className="w-clear b c-blue-light">
                    C
                </button>
                {/* clear all */}
                <button onClick={ca} className="b c-blue-light">
                    AC
                </button>
            </div>
        </>
    );
};
