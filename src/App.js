import React from 'react';
import './App.css';

import Pokedex from './containers/Pokedex';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Pokedex></Pokedex>
      </Layout>
    </div>
  );
}

export default App;
