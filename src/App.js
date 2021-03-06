import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactModal from './components/ContactModal'
import MobileMenu from './components/MobileMenu'
import PDFModal from './components/PDFModal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

function App() {

  return (
    <MainContainer>
      <Hero />
      <Skills />
      <Projects />
      <MobileMenu />
      <Contact />
      <ContactModal />
      <PDFModal /> 
      <ToastContainer />    
    </MainContainer>
  );
}

export default App;
