import Header from '../../../components/AdminBakerHeader';
import AdminNav from '../../../components/AdminNav';
import Footer from '../../../components/Footer';
import ManageDevice from '../../../layouts/Admin/ManageDevice';

const AdminDashBoard = () => {
  return (
    <>
      <Header />
      <AdminNav />
      <main>
        <ManageDevice />
      </main>
      <Footer />
    </>
  );
};

export default AdminDashBoard;
