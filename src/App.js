import React from 'react';
// import { Counter } from './features/counter/Counter';
import Header from './components/Header.Component';
import Content from './components/Content.Component';

function App() {
  return (
    <div className='app_container'>
      {/* Header */}
      <Header />
      {/* Content */}
      <Content />
    </div>
  );
}

export default App;
