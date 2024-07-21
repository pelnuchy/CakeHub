import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Checkout from '../../layouts/Checkout';

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Checkout />
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
