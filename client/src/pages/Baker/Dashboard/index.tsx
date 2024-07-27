import Header from '../../../components/AdminBakerHeader';
import AdminNav from '../../../components/AdminNav';
import Footer from '../../../components/Footer';
import Dashboard from '../../../layouts/Baker/Dashboard';

const BakerDashboard = () => {
  return (
    <>
      <Header />
      <AdminNav />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
};

export default BakerDashboard;
