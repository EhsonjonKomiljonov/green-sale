import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import './assets/styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
