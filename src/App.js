import React from 'react';
import Character from './components/Character'
import styled from 'styled-components';

const StyleApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyleApp className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </StyleApp>
  );
}

export default App;
