import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-1 flex-col items-center justify-center">
          <img src={'../../assets/logo/black-hub-logo.png'} alt="Cake Hub Logo" className="h-20 w-20" />
        </div>
        <div className="flex flex-1 flex-col space-y-2">
          <h4 className="font-semibold">Hỗ trợ</h4>
          <address className="not-italic">
            227 Đ.Nguyễn Văn Cừ, Phường 4,
            <br />
            Quận 5, TP.HCM
            <br />
            <a href="mailto:cakehub18@gmail.com">cakehub18@gmail.com</a>
            <br />
            <a href="tel:+8801588889999">+88015-88888-9999</a>
          </address>
        </div>
        <div className="flex flex-1 flex-col space-y-2">
          <h4 className="font-semibold">Liên kết nhanh</h4>
          <a href="/FAQ" className="hover:underline">
            FAQ
          </a>
          <a href="!#" className="hover:underline">
            Chính sách bảo mật
          </a>
          <a href="!#" className="hover:underline">
            Các điều khoản và điều kiện
          </a>
          <a href="!#" className="hover:underline">
            Liên hệ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
