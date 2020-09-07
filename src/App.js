import React from 'react';
import './App.css';
import { BasicGrid } from './examples/01-basic/Basic';
import { FractionUnitGrid } from './examples/02-fr-unit-grid/FractionUnitGrid';
import { RepeatGrid } from './examples/03-repeat-grid/RepeatGrid';
import { SpanningItemsGrid } from './examples/04-spanning-items-grid/SpanningItemsGrid';
import { Exercise1 } from './exercises/Exercise1/Exercise1';
import { MinMaxGrid } from './examples/05-min-max-grid/MinMaxGrid';
import { TemplateAreasGrid } from './examples/06-template-areas-grid/TemplateAreasGrid';
import { AlignmentGrid } from './examples/07-alignment-grid/AlignmentGrid';
import { Exercise2 } from './exercises/Exercise2/Exercise2';
import { Exercise25 } from './exercises/Exercise2.5/Exercise25';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CSS GRID WORKSHOP <span role='img' aria-label='fire'>🔥</span></h1>
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

        {/* <TemplateAreasGrid /> */}

        {/* <AlignmentGrid /> */}

        {/* <Exercise2 /> */}

        {/* <Exercise25 /> */}
      </main>
    </div>
  );
}

export default App;
