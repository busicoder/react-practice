import { useEffect, useState } from 'react'
import Home from './Home';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { GlobalStyles } from './styles/GlobalStyles';
import styled from 'styled-components';

function App() {
  
  return (
    <AppContainer>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App
const AppContainer = styled.div`
  width: 100%;
  background-color: var(--background-primary);
`;
