import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import { MenuProvider } from './common/MenuContext';



function App() {
  return (
    <>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <Main />
      <Footer />
    </>
  );
}

export default App;