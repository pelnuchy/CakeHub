import Header from '../../../components/AdminBakerHeader';
import AdminNav from '../../../components/AdminNav';
import Footer from '../../../components/Footer';
import InventoryTable from '../../../layouts/Baker/MangeIngredient';

const BakerIngredient = () => {
  return (
    <>
      <Header />
      <AdminNav />
      <main className="mt-10">
        <InventoryTable />
      </main>
      <Footer />
    </>
  );
};

export default BakerIngredient;
