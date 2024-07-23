import Header from '../../components/AdminBakerHeader';
import AdminNav from '../../components/AdminNav';
import Footer from '../../components/Footer';
import AdminDashBoard from '../../layouts/AdminDashBoard';

const DashBoard = () => {
  return (
    <>
      <Header />
      <AdminNav />
      <main>
        <AdminDashBoard />
      </main>
      <Footer />
    </>
  );
};

export default DashBoard;
