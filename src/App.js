import React, { Component } from 'react';

import Body from './component/Body';
import Navigasi from "./component/Navigasi";
import Hero from "./component/Hero";
import Kajian from  './component/Kajian';
import Kilat from  './component/Kilat';
import Kegiatan from  './component/Kegiatan';
import Mondok from  './component/Mondok';
import Sponsor from  './component/Sponsor';
import Kontak from  './component/Kontak';
import Footer from  './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Body />
        <Navigasi />
        <Hero />
        <Kajian />
        <Kilat />
        <Kegiatan />
        <Mondok />
        <Sponsor />
        <Kontak />
        <Footer />
      </div>
    );
  }
}

export default App;
