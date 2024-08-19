import Header from '../../../components/AdminBaker/Header';
import AdminNav from '../../../components/AdminBaker/AdminNav';
import Footer from '../../../components/Footer';
import Dashboard from '../../../layouts/Admin/Dashboard';

const AdminDashBoard = () => {
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

export default AdminDashBoard;
