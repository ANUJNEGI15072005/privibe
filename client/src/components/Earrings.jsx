// src/components/Earrings.jsx
import React, { useState } from 'react';
import { useManifest } from '../context/ManifestContext'; // Make sure this path is correct
import Filter from './Filter';
import { EarringsData } from '../Data/EarringsData';
import EarringsBrief from './EarringsBrief';

const Earrings = () => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [appliedPrice, setAppliedPrice] = useState('');
  const [appliedStyles, setAppliedStyles] = useState([]);
  const [appliedColors, setAppliedColors] = useState([]);

  const { manifestList, addToManifest, removeFromManifest } = useManifest();

  const handleApplyChanges = () => {
    setAppliedPrice(selectedPrice);
    setAppliedStyles(selectedStyles);
    setAppliedColors(selectedColors);
    console.log('Applied Price:', selectedPrice);
    console.log('Applied Styles:', selectedStyles);
    console.log('Applied Colors:', selectedColors);
  };

  const convertPrice = (priceString) => {
    return parseInt(priceString.replace('₹', '').replace(',', ''));
  };

  const filteredEarrings = EarringsData.filter((data) => {
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

  console.log('Filtered Earrings:', filteredEarrings);

  return (
    <div className="flex">
      <Filter
        setSelectedPrice={setSelectedPrice}
        setSelectedStyles={setSelectedStyles}
        setSelectedColors={setSelectedColors}
        onApply={handleApplyChanges}
      />
      <div className='flex flex-wrap justify-evenly gap-5 ml-[310px] mt-8'>
        {filteredEarrings.length > 0 ? (
          filteredEarrings.map((data, index) => (
            <EarringsBrief key={index} data={data} />
          ))
        ) : (
          <div className='w-full ml-[310px] h-32 flex items-center justify-center'>
            <p className='text-3xl font-semibold'>No earrings match the selected criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Earrings;
