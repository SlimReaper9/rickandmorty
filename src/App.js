import { Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import Home from './pages/Home/Home';
import CharacterPage from './pages/CharacterPage/CharacterPage';

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="character/:id" element={<CharacterPage />}></Route>
      </Routes>
    </section>
  );
};

export default App;
