import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Purchases from '../../layouts/Purchase';

const Purchase = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Purchases />
      </main>
      <Footer />
    </>
  );
};

export default Purchase;
