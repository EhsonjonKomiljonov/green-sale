import './assets/styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { QueryClientProvider, QueryClient } from 'react-query';
import { VerifyContact } from './pages/VerifyContact/VerifyContact';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setToken } from './redux/token/tokenAction';
import { SellVacancyAdd } from './components/SellVacancyAdd/SellVacancyAdd';
const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  dispatch(setToken(localStorage.getItem('token') || ''));

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/sell-vacancy'
            element={<SellVacancyAdd />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/verify-contact'
            element={<VerifyContact />}
          />
        </Routes>
      </main>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </QueryClientProvider>
  );
}

export default App;
