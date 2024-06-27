import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import LoginForm from '../../layouts/Login';

const Login = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default Login;
