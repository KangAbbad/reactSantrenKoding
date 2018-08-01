import React, { Component } from 'react';

import Body from './component/body';
import Navigasi from "./component/Navigasi";
import Hero from "./component/hero";
import Kajian from  './component/kajian';
import Kilat from  './component/kilat';
import Kegiatan from  './component/kegiatan';
import Mondok from  './component/mondok';
import Sponsor from  './component/sponsor';
import Kontak from  './component/kontak';
import Footer from  './component/footer';

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
