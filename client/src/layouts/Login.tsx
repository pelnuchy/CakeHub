import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = { username, password };

    try {
      await axios.post('http://localhost:8000/login', auth);
      alert('Đăng nhập thành công');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-3/5 overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="w-1/2">
          <img src={'../../assets/cake/login.jpg'} alt="Login" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-black">Đăng nhập</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Tên đăng nhập</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tên đăng nhập"
                name="username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Mật khẩu</label>
              <input
                type="password"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Mật khẩu"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="mt-4 w-full">
              ĐĂNG NHẬP
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Chưa có tài khoản?{' '}
              <a href="/signup" className="text-primary-500">
                Đăng ký
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
