// src/hooks/usePageLoading.ts
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const usePageLoading = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust as needed
    return () => clearTimeout(timer);
  }, [location]);

  return loading;
};

export default usePageLoading;
