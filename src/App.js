import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RepairForm from './components/RepairForm';
import ConfirmationPage from './components/ConfirmationPage';
import StatusPage from './components/StatusPage';
import AdminPage from './components/AdminPage';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './global';
import { lightTheme, darkTheme } from './theme';
import Toggle from './components/Toggler';
import './styles.css';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<RepairForm />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
