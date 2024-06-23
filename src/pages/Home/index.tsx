import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CakeTrending from '../../layouts/CakeTrending';
import CakeBestSeller from '../../layouts/CakeBestSeller';

const Homepage = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>

          <CakeBestSeller />
          <CakeTrending />

      </main>
      <Footer />
    </>
  );
};

export default Homepage;
