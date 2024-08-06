// components/CakeDetail.tsx
import React from 'react';

const CakeImage = ({ cakeDetail }: { cakeDetail: any }) => (
  <div className="mb-8 lg:mb-0 lg:w-2/3 lg:pr-8">
    <div className="h-[80vh]">
      <img src={cakeDetail.img_url} alt={cakeDetail.cakeName} className="h-full w-full rounded-xl object-cover" />
    </div>
  </div>
);

export default CakeImage;
