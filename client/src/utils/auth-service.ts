let auth = {
  isGuest: true,
  isUser: false,
  isBaker: false,
  isAdmin: false,
};

let authToken = sessionStorage.getItem('authToken');

if (authToken === 'admin_logged') {
  auth = {
    isGuest: false,
    isUser: false,
    isBaker: false,
    isAdmin: true,
  };
}
else if (authToken === 'baker_logged') {
  auth = {
    isGuest: false,
    isUser: false,
    isBaker: true,
    isAdmin: false,
  };
}
else if (authToken === 'user_logged') {
  auth = {
    isGuest: false,
    isUser: true,
    isBaker: false,
    isAdmin: false,
  };
}
export default auth;
