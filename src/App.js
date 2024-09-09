import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './mvr/pages/HomePage';
import MoviewWritePage from './mvr/pages/MovieWritePage';

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
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='movie-write' element={<MoviewWritePage />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
