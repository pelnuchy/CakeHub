import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CakeCard from '../components/Cake/CakeCard';
import { Cake } from '../utils/interfaces';

const SearchResults: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const [searchResults, setSearchResults] = useState<Cake[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/search-cakes?keyword=${keyword}`);
        setSearchResults(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  return (
    <div className="bg-white py-16">
      <div className="container ml-9">
        <div className="mb-4 flex items-center">
          <div className="mr-2 h-8 w-4 bg-bgr-gradient"></div>
          <h2 className="text-3xl font-bold">Kết quả tìm kiếm cho "{keyword}"</h2>
        </div>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResults.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
