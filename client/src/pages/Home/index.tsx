import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Trending from '../../layouts/CakeList/Trending';
import BestSeller from '../../layouts/CakeList/BestSeller';

const Homepage = () => {
  const userInfo = sessionStorage.getItem('userInfo');
  const sessionStorageData = userInfo ? JSON.parse(userInfo) : null;
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
