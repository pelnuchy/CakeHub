import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Trending from '../../layouts/CakeList/Trending';
import BestSeller from '../../layouts/CakeList/BestSeller';

const Homepage = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <BestSeller />
        <Trending />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
