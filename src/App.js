import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <h2>Moview Review Site</h2>
      </Wrapper>

      </BrowserRouter>
  );
}

export default App;
