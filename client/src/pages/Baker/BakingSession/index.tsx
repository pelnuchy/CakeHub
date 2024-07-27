import Header from '../../../components/AdminBakerHeader';
import AdminNav from '../../../components/AdminNav';
import Footer from '../../../components/Footer';
import BakingSession from '../../../layouts/Baker/BakingSession';

const BakerBakingSession = () => {
  return (
    <>
      <Header />
      <AdminNav />
      <main>
        <BakingSession />
      </main>
      <Footer />
    </>
  );
};

export default BakerBakingSession;
