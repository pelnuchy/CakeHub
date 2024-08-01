import { useEffect, useState } from 'react';

export const useUser = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<{ username: string; avatar: string | null } | null>(null);

  useEffect(() => {
    try {
      const userInfoString = sessionStorage.getItem('userInfo');
      if (userInfoString) {
        const user = JSON.parse(userInfoString);
        setUserLoggedIn(true);
        setUserInfo(user);
      } else {
        setUserLoggedIn(false);
        setUserInfo(null);
      }
    } catch (error) {
      console.error('Failed to parse user info from sessionStorage', error);
      setUserLoggedIn(false);
      setUserInfo(null);
    }
  }, []);

  return { userLoggedIn, userInfo, setUserLoggedIn, setUserInfo };
};
