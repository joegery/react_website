// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Membership from './components/Membership';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollUp from './components/Scroll-up';
import Chat from './components/Chat';  

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Membership />
        <Newsletter />
        <Footer />
        <ScrollUp />
        <Chat />  
      </main>
    </>
  );
}

export default App;
