import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../../contexts/CartContext';
import CakeDetail from './CakeImage';
import CakeOptionsForm from './CakeOptionsForm';
import Related from '../CakeList/Related';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CakeInfo = () => {
  const { id } = useParams();
  const [cakeDetail, setCakeDetail] = useState<any>(null);
  const { addToCart } = useCart();
  const [selectedNewCakeID, setSelectedNewCakeID] = useState('');
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedFlavor, setSelectedFlavor] = useState('Chanh dây');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedTotalPrice, setSelectedTotalPrice] = useState(0);
  const navigate = useNavigate();

  const fetchCakeDetail = async (id: string) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-details-cake/${id}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const abbreviateFlavor = (flavor: string): string => {
    const flavorAbbreviations: { [key: string]: string } = {
      'Chanh dây': 'CD',
      'Dâu tây': 'DT',
      Socola: 'Soco',
    };
    return flavorAbbreviations[flavor] || flavor;
  };

  const findCakeWithNewCakeID = (cakes: any[], cakeID: string) => {
    return cakes.find((cake) => cake.cakeID === cakeID);
  };

  useEffect(() => {
    const calculateCakeID = () => {
      const abbreviated = abbreviateFlavor(selectedFlavor);
      return `${id}-${abbreviated}-${selectedSize}`;
    };
    const getCakeDetail = async () => {
      const cakes = await fetchCakeDetail(id!);
      if (cakes) {
        const newCakeID = calculateCakeID();
        const cakeNew = findCakeWithNewCakeID(cakes, newCakeID);
        setSelectedNewCakeID(newCakeID);
        setCakeDetail(cakeNew);
        setSelectedTotalPrice(cakeNew.price * selectedQuantity);
      }
    };
    getCakeDetail();
  }, [id, selectedSize, selectedFlavor, selectedQuantity]);

  const userInfo = sessionStorage.getItem('userInfo');

  const handleAddToCart = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userInfo) {
      navigate('/login');
      return;
    }

    if (cakeDetail) {
      addToCart({
        id: cakeDetail.cakeID,
        name: cakeDetail.cakeName,
        price: Number(cakeDetail.price),
        size: selectedSize,
        flavor: selectedFlavor,
        quantity: selectedQuantity,
        image: cakeDetail.img_url,
        total_price: selectedTotalPrice,
      });
      const userInfoParsed = userInfo ? JSON.parse(userInfo) : null;
      const cakeInfo = {
        selectedNewCakeID,
        selectedQuantity,
        selectedTotalPrice,
      };
      try {
        await axios.put(`${process.env.REACT_APP_API_URL}/add-cake-to-cart/${userInfoParsed.userID}`, cakeInfo);
        toast.success(`${cakeDetail.cakeName} đã được thêm vào giỏ hàng.`);
        setTimeout(() => {
          window.location.reload();
        }, 1000); // Delay before reloading to allow the toast to be seen
      } catch (error) {
        console.log(error);
        toast.error('Có lỗi xảy ra khi thêm bánh vào giỏ hàng.');
      }
    }
  };

  if (!cakeDetail) {
    return <div>Cake not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col px-16 lg:flex-row">
        <CakeDetail cakeDetail={cakeDetail} />
        <CakeOptionsForm
          cakeDetail={cakeDetail}
          selectedSize={selectedSize}
          selectedFlavor={selectedFlavor}
          selectedQuantity={selectedQuantity}
          setSelectedSize={setSelectedSize}
          setSelectedFlavor={setSelectedFlavor}
          setSelectedQuantity={setSelectedQuantity}
          handleAddToCart={handleAddToCart}
        />
      </div>

      <Related />
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
};

export default CakeInfo;
