import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import SignupForm from '../../layouts/Signup';

const Signup = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <SignupForm />
      </main>
      <Footer />
    </>
  );
};

export default Signup;
