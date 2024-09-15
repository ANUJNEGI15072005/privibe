import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { FaHeart, FaTruck } from 'react-icons/fa';
import { useManifest } from '../context/ManifestContext';
import { EarringsData } from '../Data/EarringsData';
import { NeckpieceData } from '../Data/NeckpieceData';
import { BraceletData } from '../Data/BraceletData';

const ProductDetail = () => {
  const { id } = useParams();
  const { productType } = useLoaderData();
  const { manifestList, addToManifest, removeFromManifest } = useManifest();

  // Find the product data based on the productType
  let productData;
  switch (productType) {
    case 'Earrings':
      productData = EarringsData.find((item) => item.id === id);
      break;
    case 'Neckpiece':
      productData = NeckpieceData.find((item) => item.id === id);
      break;
    case 'Bracelet':
      productData = BraceletData.find((item) => item.id === id);
      break;
    default:
      productData = null;
  }

  if (!productData) {
    return <div>Product not found</div>;
  }

  const isItemInManifest = manifestList.some((item) => item.id === productData.id);
  
  const toggleManifestItem = () => {
    if (isItemInManifest) {
      console.log(`Removing item with id ${productData.id} from manifest`);
      removeFromManifest(productData.id);
    } else {
      console.log(`Adding item with id ${productData.id} to manifest`);
      addToManifest(productData);
    }
  };

  return (
    <div>
      <div className='flex'>
        <div className="flex items-center p-2 mx-6">
          <div className="w-[470px] h-[470px]">
            <img className="w-full h-full object-cover" src={productData.image} alt={productData.title} />
          </div>
        </div>
        <div className="p-4 h-[470px]">
          <h1 className="text-5xl font-bold mb-3">{productData.title}</h1>
          <p className="text-5xl text-gray-800 mb-3">{productData.price}</p>
          <p className="text-lg text-gray-600 text-justify mb-3">{productData.description}</p>

          <div className='mb-1'>
            <span className="text-base text-gray-600 font-semibold mr-2">MATERIAL :</span>
            <span className="text-base text-gray-600">{productData.material?.toUpperCase() || 'N/A'}</span>
          </div>

          <div className='mb-6'>
            <span className="text-base text-gray-600 font-semibold mr-2">COLOR :</span>
            <span className="text-base text-gray-600">{productData.color.map(color => color.toUpperCase()).join(', ')}</span>
          </div>

          <div className="mb-4">
            <button className="border-black border-2 text-xl w-96 text-black px-6 py-3 rounded-lg" onClick={toggleManifestItem}>
              {isItemInManifest ? 'REMOVE FROM MANIFEST LIST' : 'ADD TO MANIFEST LIST'}
            </button>
          </div>
          
          <div className="mb-6">
            {productData.status === 'Available' ? (
              <button className="bg-green-600 w-96 text-xl text-white px-6 py-3 rounded-lg hover:bg-green-700">
                ADD TO CART
              </button>
            ) : (
              <button className="bg-red-600 w-96 text-xl text-white px-6 py-3 rounded-lg cursor-not-allowed" disabled>
                OUT OF STOCK
              </button>
            )}
          </div>

          <div className="flex items-center text-lg text-gray-600">
            <FaTruck className="mr-2 text-2xl text-gray-700" />
            Delivered within 7 days
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-6 m-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cancel Order Policy</h2>
        <div className="mb-3">
          <h3 className="text-xl font-medium mb-1 text-gray-700">Order Cancellation Before Shipment :</h3>
          <p className="text-gray-600 text-base text-justify">
            You may cancel your order for any reason as long as it has not been shipped. To cancel your order, visit our website and click on 'Cancel Order'. We will confirm your cancellation and process a full refund to your original payment method.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-1 text-gray-700">Order Cancellation After Shipment :</h3>
          <p className="text-gray-600 text-base text-justify">
            Once an order has been shipped, it cannot be canceled.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-1 text-gray-700">Custom Orders Cancellation :</h3>
          <p className="text-gray-600 text-base text-justify">
            Custom or personalized orders cannot be canceled once production has started. We recommend reviewing all details carefully before finalizing your custom order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
