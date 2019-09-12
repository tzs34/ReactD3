import React from 'react';
import Header from './components/header'
import useD3Color from  './components/hooks/useD3Color'
import Swatch from './components/swatch'
import { FlexRow } from './components/layout/grid'
import './App.css';


function App() {

  const [ColoredCompnent] = useD3Color(500, Swatch)
  return (
    <>
      <div className="App">
      <Header title='Simple React D3' />
      </div>
      <FlexRow alignItems='center' justifyContent='space-evenly'>
        <div>
          <Header title='Swatch using d3.schemeTableau10' />
        </div>
        <div>
          <ColoredCompnent />
        </div>
      </FlexRow>
    </>
  );
}

export default App;
