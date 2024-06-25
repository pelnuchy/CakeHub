import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CakeAnniversary from '../../layouts/Occasion/CakeAnniversary';

const Anniversary = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <CakeAnniversary />
      </main>
      <Footer />
    </>
  );
};

export default Anniversary;
