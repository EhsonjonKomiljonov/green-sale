import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import './assets/styles/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
