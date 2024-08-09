import Header from '../../../components/AdminBaker/Header';
import Footer from '../../../components/Footer';
import BakingSession from '../../../layouts/Baker/BakingSession';
import BakerNav from '../../../components/AdminBaker/BakerNav';

const BakerBakingSession = () => {
  return (
    <>
      <Header />
      <BakerNav />
      <main>
        <BakingSession />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default BakerBakingSession;
