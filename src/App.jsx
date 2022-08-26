import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Game from './pages/Game';
import Play from './pages/Play';

const Container = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1em;
  padding: 3em;
  @media (min-width: 769px) {
    display: block;
  }
`;

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <Container>
      <Header score={score} />
      <Routes>
        <Route path="/" element={<Play onChoice={setUserChoice} />} />
        <Route
          path="/game"
          element={
            userChoice ? (
              <Game userChoice={userChoice} score={score} onScore={setScore} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <Footer onOpenModal={openModalHandler} />
      <Modal isOpen={showModal} onCloseModal={closeModalHandler} />
    </Container>
  );
}

export default App;
