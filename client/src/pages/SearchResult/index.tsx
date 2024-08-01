import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import SearchResults from '../../layouts/SearchResult';

const SearchResult = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <SearchResults />
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
