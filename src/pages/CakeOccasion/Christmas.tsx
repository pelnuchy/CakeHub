import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CakeChristmas from '../../layouts/Occasion/CakeChristmas';

const Christmas = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <CakeChristmas />
      </main>
      <Footer />
    </>
  );
};

export default Christmas;
