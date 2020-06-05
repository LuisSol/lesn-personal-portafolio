import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero'

const MainContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
`;


function App() {
  return (
    <MainContainer>
      <Hero />
    </MainContainer>
  );
}

export default App;
