import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CakeInfo from '../../layouts/CakeDetail/CakeInfo';

const CakeDetail = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <CakeInfo />
      </main>
      <Footer />
    </>
  );
};

export default CakeDetail;
