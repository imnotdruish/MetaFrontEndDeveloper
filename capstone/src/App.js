import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import Menu from './components/Menu/Menu';
import Reservation from './components/Reservation/Reservation';
import Order from './components/Order/Order';
import { MenuProvider } from './common/MenuContext';
import { Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <MenuProvider>
          <Header />
        </MenuProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={<Main />}
          />
          <Route
            exact
            path="/menu"
            element={<Menu />}
          />
          <Route
            exact
            path="/order"
            element={<Order />}
          />
          <Route
            exact
            path="/reservation"
            element={<Reservation />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;