import React from 'react';
import './App.css';
import Main from './Components/Main';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
