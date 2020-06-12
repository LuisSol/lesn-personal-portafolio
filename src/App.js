import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactModal from './components/ContactModal'

const MainContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  
`;

function App() {
  
  return (
    <MainContainer>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <ContactModal />
    </MainContainer>
  );
}

export default App;
