import BakerNav from '../../../components/AdminBaker/BakerNav';
import Header from '../../../components/AdminBaker/Header';
import CakeModel from '../../../layouts/Baker/ManageCake';

const BakerCake = () => {
  return (
    <>
      <Header />
      <BakerNav />
      <main>
        <CakeModel />
      </main>
    </>
  );
};

export default BakerCake;
