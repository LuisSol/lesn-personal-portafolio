import React, { useState} from 'react';
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
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  
  return (
    <MainContainer>
      <Hero 
        toggleModal={toggleModal}         
      />
      <Skills />
      <Projects />
      <Contact 
        toggleModal={toggleModal}  
      />
      <ContactModal 
        modalOpen={modalOpen} 
        toggleModal={toggleModal}
      />
    </MainContainer>
  );
}

export default App;
