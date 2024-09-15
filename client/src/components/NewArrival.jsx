import React, { useState } from 'react';
import Filter from './Filter';
import { NewArrivalData } from '../Data/NewArrivalData';
import NewArrivalBrief from './NewArrivalBrief';

const NewArrival = () => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [appliedPrice, setAppliedPrice] = useState('');
  const [appliedStyles, setAppliedStyles] = useState([]);
  const [appliedColors, setAppliedColors] = useState([]);

  const handleApplyChanges = () => {
    setAppliedPrice(selectedPrice);
    setAppliedStyles(selectedStyles);
    setAppliedColors(selectedColors);
  };

  const convertPrice = (priceString) => {
    return parseInt(priceString.replace('₹', '').replace(',', ''));
  };

  const filteredNewArrivalItems = NewArrivalData.filter((data) => {
    const priceNumber = convertPrice(data.price);

    const matchesPrice = (() => {
      switch (appliedPrice) {
        case 'low':
          return priceNumber >= 0 && priceNumber <= 100;
        case 'mid':
          return priceNumber > 100 && priceNumber <= 200;
        case 'high':
          return priceNumber > 200 && priceNumber <= 300;
        case 'highest':
          return priceNumber > 300;
        default:
          return true;
      }
    })();

    const matchesStyle =
      appliedStyles.length === 0 ||
      appliedStyles.some((style) => data.style?.includes(style) ?? false);

    const matchesColor =
      appliedColors.length === 0 ||
      appliedColors.some((color) => data.color?.includes(color) ?? false);

    return matchesPrice && matchesStyle && matchesColor;
  });

  return (
    <div className="flex">
      <Filter
        setSelectedPrice={setSelectedPrice}
        setSelectedStyles={setSelectedStyles}
        setSelectedColors={setSelectedColors}
        onApply={handleApplyChanges}
        category="NewArrival"
      />
      <div className='flex flex-wrap justify-evenly gap-5 ml-[310px] mt-8'>
        {filteredNewArrivalItems.length > 0 ? (
          filteredNewArrivalItems.map((data, index) => (
            <NewArrivalBrief key={index} data={data} />
          ))
        ) : (
          <div className='w-full ml-[310px] flex items-center justify-center text-center text-xl text-gray-500'>
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
