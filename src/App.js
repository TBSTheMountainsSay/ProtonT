import React from 'react';
import './css/reset.scss';
import './css/global.scss';
import './App.css';
import Header from './feauters/Header/Header';
import Services from './feauters/Services/Services';
import About from './feauters/About/About';
import Contacts from './feauters/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Contacts />
    </div>
  );
}

export default App;
