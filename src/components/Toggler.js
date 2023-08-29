import React from 'react';

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default Toggle;
