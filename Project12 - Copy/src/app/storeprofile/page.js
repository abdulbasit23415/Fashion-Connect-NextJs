import React from 'react';

const StoreProfile = () => {
  return (
    <div className="font-sans p-5">
      {/* Store Header */}
      <div className="flex items-center mb-5">
        <img
          src="/KhaadiLogo-22.png"
          alt="Store Logo"
          className="w-12 h-12 mr-4 rounded-full"
        />
        <h2 className="text-black text-2xl font-semibold m-0">Khaadi</h2>
      </div>

      {/* Featured Banner */}
      <div className="mb-5">
        <img
          src="/user(1).jpg"
          alt="Featured Product"
          className="w-[200px] rounded-lg shadow-md"
        />
      </div>

      {/* New Arrivals Section */}
      <div>
        <h3 className="text-xl font-semibold mb-3">New Arrivals</h3>
        <div className="flex overflow-x-auto pb-4 gap-4">
          {/* Product Card 1 */}
          <div className="flex-shrink-0 w-36 border border-gray-200 rounded-lg p-3 text-center">
            <img
              src="/sale1.jpeg"
              alt="Product 1"
              className="w-full h-auto mb-2 rounded"
            />
            <p className="text-sm mb-1">Product Title 1</p>
            <p className="text-xs text-gray-600 mb-2">20000 RS</p>
            <a
              href="https://pk.khaadi.com/tailored-3-piece/BCS240207ST-VG_OLIVE.html"
              className="text-black text-xs border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
            >
              View
            </a>
          </div>

          {/* Product Card 2 */}
          <div className="flex-shrink-0 w-36 border border-gray-200 rounded-lg p-3 text-center">
            <img
              src="/sale2.jpeg"
              alt="Product 2"
              className="w-full h-auto mb-2 rounded"
            />
            <p className="text-sm mb-1">Product Title 2</p>
            <p className="text-xs text-gray-600 mb-2">35000 RS</p>
            <a
              href="https://saraclothes.com/products/khaadi-jacquard-printed-fabrics-3-piece-bco240402-purple-signature-collection-2024"
              className="text-black text-xs border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition"
            >
              View
            </a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default StoreProfile;
