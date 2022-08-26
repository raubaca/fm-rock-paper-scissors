import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Game from './pages/Game';
import Play from './pages/Play';

const Main = styled.main`
  @media (min-width: 769px) {
    align-self: start;
  }
`;

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <Header score={score} />
      <Main>
        <Routes>
          <Route path="/" element={<Play onChoice={setUserChoice} />} />
          <Route
            path="/game"
            element={
              userChoice ? (
                <Game
                  userChoice={userChoice}
                  score={score}
                  onScore={setScore}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Main>
      <Footer onOpenModal={openModalHandler} />
      <Modal isOpen={showModal} onCloseModal={closeModalHandler} />
    </>
  );
}

export default App;
