import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import HandlePayment from '../../layouts/HandlePaymentMomo';

const HandlePaymentMomo = () => {
    return (
        <>
            <Header />
            <Nav />
            <main>
                <HandlePayment />
            </main>
            <Footer />
        </>
    );
};

export default HandlePaymentMomo;
