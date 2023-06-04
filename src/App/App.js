import React from 'react';
import Pages from '../Components/Pages/Pages';
import './App.css';
import { Provider } from 'react-redux';
import store from '../Controller/store';

function App() {
  return (
  <>
    <Provider store={store}>
      <Pages />
    </Provider>
  </>
  );
}

export default App;
