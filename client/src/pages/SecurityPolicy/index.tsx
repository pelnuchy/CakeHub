import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import SecurityPolicy from '../../layouts/SecurityPolicy';

const SecurityPolicypage = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <SecurityPolicy/>
      </main>
      <Footer />
    </>
  );
};

export default SecurityPolicypage;
