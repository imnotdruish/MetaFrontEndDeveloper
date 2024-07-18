import Footer from './common/Footer/Footer';
import Header from './common/Header/Header';
import Main from './components/Main';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Reservation from './components/Reservation/Reservation';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { MenuProvider } from './common/MenuContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
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
            path="/about"
            element={<About />}
          />
          <Route
            exact
            path="/menu"
            element={<Menu />}
          />
          <Route
            exact
            path="/reservation"
            element={<Reservation />}
          />
          <Route
            exact
            path="/order"
            element={<Order />}
          />
          <Route
            exact
            path="/login"
            element={<Login />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;