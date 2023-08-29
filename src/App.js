import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RepairForm from './components/RepairForm';
import ConfirmationPage from './components/ConfirmationPage';
import StatusPage from './components/StatusPage';
import AdminPage from './components/AdminPage';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { lightTheme, darkTheme } from './theme';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' });
  }

  render() {
    return (
      <Router>
        <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <div className="App">
            <Navbar toggleTheme={this.toggleTheme} />
            <Route exact path="/" component={RepairForm} />
            <Route path="/confirmation" component={ConfirmationPage} />
            <Route path="/status" component={StatusPage} />
            <Route path="/admin" component={AdminPage} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
