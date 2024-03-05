import React from 'react';
import { Header } from '../components/Header/Header';
import  Footer  from '../components/Footer/Footer';
import CompanyBanner from '../pages/CompanyBanner/CompanyBanner';
import Reputation from '../pages/Reputation/Reputation';
import About from '../pages/About/About';
import Service from '../pages/Service/Service';
import Experience from '../pages/Experience/Experience';
import Ads from '../pages/Ads/Ads';
import Projects from '../pages/Projects/Projects';
import EmailBox from '../pages/EmailForm/EmailForm';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <CompanyBanner/>
        <Reputation/>
        <About/>
        <Service/>
        <Experience/>
        <Ads/>
        <Projects/>
        <EmailBox/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
