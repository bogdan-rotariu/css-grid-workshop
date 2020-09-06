import React from 'react';
import './App.css';
import { BasicGrid } from './examples/basic/Basic';
import { FractionUnitGrid } from './examples/fr-unit-grid/FractionUnitGrid';
import { RepeatGrid } from './examples/repeat-grid/RepeatGrid';
import { SpanningItemsGrid } from './examples/spanning-items-grid/SpanningItemsGrid';
import { Exercise1 } from './exercises/Exercise1/Exercise1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CSS GRID WORKSHOP 🔥</h1>
      </header>
      <main className='main'>
        {/* <BasicGrid style={{
            gridTemplateColumns: '10rem 10rem 10rem 10rem 10rem',
          }} />

        <FractionUnitGrid />

        <RepeatGrid />

        <SpanningItemsGrid /> */}

        <Exercise1 />
      </main>
    </div>
  );
}

export default App;
