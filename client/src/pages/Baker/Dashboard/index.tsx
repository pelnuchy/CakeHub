import BakerNav from '../../../components/AdminBaker/BakerNav';
import Header from '../../../components/AdminBaker/Header';
import Footer from '../../../components/Footer';
import Dashboard from '../../../layouts/Baker/Dashboard';

const BakerDashboard = () => {
  return (
    <>
      <Header />
      <BakerNav />
      <main>
        <Dashboard />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default BakerDashboard;
