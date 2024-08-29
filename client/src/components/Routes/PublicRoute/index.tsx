import { Navigate } from 'react-router-dom';
import { auth } from '../../../utils/auth-service';

const PublicRoute = ({ children }: { children: any }) => {
  if (auth.isUser) return <Navigate to={'/'} />;
  return children;
};

export default PublicRoute;
