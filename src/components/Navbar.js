import React from 'react';

function Navbar({ theme, toggleTheme }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">RepairHub</a>  {/* Note the href change */}
                <button onClick={toggleTheme}>
                    Switch Theme
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
