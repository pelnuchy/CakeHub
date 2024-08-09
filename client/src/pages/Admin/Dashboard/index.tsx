import Header from '../../../components/AdminBaker/Header';
import AdminNav from '../../../components/AdminBaker/AdminNav';
import Footer from '../../../components/Footer';
import Dasboard from '../../../layouts/Admin/Dashboard';

const AdminDashBoard = () => {
  return (
    <>
      <Header />
      <AdminNav />
      <main>
        <Dasboard />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default AdminDashBoard;
