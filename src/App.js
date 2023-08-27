import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Navbar from './components/Navbar';
import RepairForm from './components/RepairForm';
import './styles.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <RepairForm />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
