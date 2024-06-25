import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CakeBirthday from '../../layouts/Occasion/CakeBirthday';

const Birthday = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <CakeBirthday />
      </main>
      <Footer />
    </>
  );
};

export default Birthday;
