import React from 'react';
import './App.css';
import { BasicGrid } from './examples/01-basic/Basic';
import { FractionUnitGrid } from './examples/02-fr-unit-grid/FractionUnitGrid';
import { RepeatGrid } from './examples/03-repeat-grid/RepeatGrid';
import { SpanningItemsGrid } from './examples/04-spanning-items-grid/SpanningItemsGrid';
import { Exercise1 } from './exercises/Exercise1/Exercise1';
import { MinMaxGrid } from './examples/05-min-max-grid/MinMaxGrid';
import { TemplateAreasGrid } from './examples/06-template-areas-grid/TemplateAreasGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CSS GRID WORKSHOP 🔥</h1>
      </header>
      <main className='main'>
        {/* <BasicGrid style={{
            gridTemplateColumns: '10rem 10rem 10rem 10rem 10rem',
          }} /> */}

        {/* <FractionUnitGrid /> */}

        {/* <RepeatGrid /> */}

        {/* <SpanningItemsGrid /> */}

        {/* <Exercise1 /> */}

        {/* <MinMaxGrid /> */}

        <TemplateAreasGrid />
      </main>
    </div>
  );
}

export default App;
