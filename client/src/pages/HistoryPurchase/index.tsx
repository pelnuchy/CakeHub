import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import OrderHistory from '../../layouts/OrderHistory';

const HistoryPurchase = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <OrderHistory />
      </main>
      <Footer />
    </>
  );
};

export default HistoryPurchase;
