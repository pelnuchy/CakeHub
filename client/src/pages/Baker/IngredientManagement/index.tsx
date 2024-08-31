import BakerNav from '../../../components/AdminBaker/BakerNav';
import Header from '../../../components/AdminBaker/Header';
import InventoryTable from '../../../layouts/Baker/ManageIngredient';

const BakerIngredient = () => {
  return (
    <>
      <Header />
      <BakerNav />
      <main>
        <InventoryTable />
      </main>
    </>
  );
};

export default BakerIngredient;
