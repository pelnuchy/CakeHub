import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CakeTrendingPage from '../../layouts/Occasion/CakeTrending';

const Trending = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <CakeTrendingPage />
      </main>
      <Footer />
    </>
  );
};

export default Trending;
