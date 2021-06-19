import React from 'react';
import PropTypes from 'prop-types';

export const ButtonToggle = ({ onChange }) => {
    return (
        <>
            <div className="container">
                <div className="switch">
                    <label htmlFor="toggle">
                        <input
                            id="toggle"
                            name="toggle"
                            className="toggle-switch"
                            type="checkbox"
                            onChange={onChange}
                        />
                        <div className="sun-moon">
                            <div className="dots" />
                        </div>
                        <div className="background" />
                    </label>
                </div>
            </div>
        </>
    );
};

ButtonToggle.propTypes = {
    onChange: PropTypes.func.isRequired,
}
