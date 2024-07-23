import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Purchased from '../../layouts/Purchase';

const Purchase = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Purchased />
      </main>
      <Footer />
    </>
  );
};

export default Purchase;
