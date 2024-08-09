import Header from '../../../components/AdminBaker/Header';
import AdminNav from '../../../components/AdminBaker/AdminNav';
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
      {/* <Footer /> */}
    </>
  );
};

export default AdminDashBoard;
