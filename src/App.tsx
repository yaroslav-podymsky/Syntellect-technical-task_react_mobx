import React from 'react';
import './App.css';
import ButtonMapper from './components/button-mapper/button-mapper';
import ElementSearch from './components/element-search/element-search';

function App() {
  return (
    <div className="app">
      <ButtonMapper
        buttons={[
          {
            title: 'clear',
            callback: (ref: React.RefObject<HTMLInputElement>) => {
              if (!ref.current) return;
              ref.current.value = '';
            },
            position: 'right',
          },
          {
            title: 'change text',
            callback: (ref: React.RefObject<HTMLInputElement>) => {
              if (!ref.current) return;
              ref.current.value = 'Hello world!';
            },
            position: 'right',
          },
        ]}
      />
      <ButtonMapper
        buttons={[
          {
            title: 'alert number',
            callback: (ref: React.RefObject<HTMLInputElement>) => {
              if (!ref.current?.value) return;
              if (!isNaN(Number(ref.current?.value))) {
                alert(ref.current?.value);
              }
            },
            position: 'left',
          },
          {
            title: 'alert',
            callback: (ref: React.RefObject<HTMLInputElement>) => {
              alert(ref.current?.value);
            },
            position: 'right',
          },
        ]}
      />
      <div className="app__element-search-block">
        <ElementSearch elementSearchKey={0} maxElCount={3} />
        <ElementSearch elementSearchKey={1} maxElCount={10} />
      </div>
    </div>
  );
}

export default App;
