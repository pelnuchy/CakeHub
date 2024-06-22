import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './pages/Home';

export default function App() {
  return (
    <div className="h-screen ">
      <Header />
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}
