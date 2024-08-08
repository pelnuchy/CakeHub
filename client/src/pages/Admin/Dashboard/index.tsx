import Header from '../../../components/AdminBakerHeader';
import AdminNav from '../../../components/AdminNav';
import Footer from '../../../components/Footer';
import Dasboard from '../../../layouts/Admin/Dashboard';

const AdminDashBoard = () => {
  return (
    <>
      <Header />
      <AdminNav />
      <main className='mt-10'>
        <Dasboard />
      </main>
      <Footer />
    </>
  );
};

export default AdminDashBoard;
