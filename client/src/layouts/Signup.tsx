import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import ToastComponent from '../components/ToastComponent';

const SignupForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = { username, password, rePassword };
    try {
      if (auth.password !== auth.rePassword) {
        toast.error('Mật khẩu không khớp. Vui lòng kiểm tra lại.');
        return;
      }
      axios.post('http://localhost:8000/signup', auth);
      toast.success('Đăng ký thành công');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      toast.error('Đăng ký thất bại. Vui lòng thử lại.');
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-3/5 overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="w-1/2">
          <img src={'../../assets/cake/signup.jpg'} alt="Signup" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-black">Nhập thông tin đăng ký</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Tên đăng nhập</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tên đăng nhập"
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
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Nhập lại mật khẩu</label>
              <input
                type="password"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Nhập lại mật khẩu"
                required
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="mt-4 w-full rounded-lg bg-bgr-gradient py-2 font-semibold text-black hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              ĐĂNG KÝ
            </Button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Đã có tài khoản?{' '}
              <a href="/login" className="text-primary-500">
                Đăng nhập
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastComponent />
    </div>
  );
};

export default SignupForm;
