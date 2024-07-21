import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import ShoppingCart from '../../layouts/ShoppingCart';

const Cart = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <ShoppingCart />
      </main>
      <Footer />
    </>
  );
};

export default Cart;
