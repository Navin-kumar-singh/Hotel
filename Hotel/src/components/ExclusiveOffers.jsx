import React from 'react';
import Title from './Title';
import { assets, exclusiveOffers } from '../assets/assets';

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-white">
      {/* Title & Button Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />

        <button className="flex items-center gap-2 cursor-pointer text-white bg-gray-600 px-6 py-3 rounded-full group hover:bg-gray-800 transition-all">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-end gap-3 h-72 px-6 py-6 rounded-xl text-white bg-no-repeat bg-cover bg-center shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff}% OFF
            </p>
            <div className="z-10">
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p className="text-sm">{item.description}</p>
              <p className="text-xs text-white/70 mt-2">Expires {item.expiryDate}</p>

              <button className="flex items-center gap-2 font-medium cursor-pointer mt-3">
                View Offer
                <img
                  className="invert group-hover:translate-x-1 transition-transform"
                  src={assets.arrowIcon}
                  alt="arrow-icon"
                />
              </button>
            </div>

            {/* Overlay (optional for better readability) */}
            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
