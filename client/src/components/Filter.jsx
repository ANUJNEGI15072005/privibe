import React, { useState } from 'react';

const Filter = ({ setSelectedPrice, setSelectedStyles, setSelectedColors, onApply, category }) => {
  const [styles, setStyles] = useState([]);
  const [colors, setColors] = useState([]);

  const handleStyleChange = (style) => {
    setStyles((prevStyles) =>
      prevStyles.includes(style)
        ? prevStyles.filter((s) => s !== style)
        : [...prevStyles, style]
    );
  };

  const handleColorChange = (color) => {
    setColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleApply = () => {
    setSelectedStyles(styles);
    setSelectedColors(colors);
    onApply();
  };

  return (
    <div className='w-[310px] h-screen border-r top-20 fixed bg-white overflow-y-auto'>
      <div className='flex m-4 justify-center items-center'>
        <button
          className='w-4/5 h-10 bg-pink-300 rounded-xl text-2xl text-white'
          onClick={handleApply}
        >
          Apply changes
        </button>
      </div>
      <div className='m-4'>
        <h2 className='text-xl font-semibold mb-2'>Color</h2>
        <div className='grid grid-cols-3 gap-2'>
          {['Red','White', 'Blue', 'Green', 'Golden', 'Silver', 'Pink', 'Yellow','Black'].map((color) => (
            <label key={color} className='flex items-center'>
              <input
                type="checkbox"
                name="color"
                value={color.toLowerCase()}
                className='mr-2'
                id={`color-${color.toLowerCase()}`}
                aria-label={color}
                onChange={() => handleColorChange(color.toLowerCase())}
              />
              {color}
            </label>
          ))}
        </div>
      </div>
      <div className='m-4'>
        <h2 className='text-xl font-semibold mb-2'>Price</h2>
        <div className='flex flex-col'>
          {[
            { value: 'low', label: '₹0 - ₹100' },
            { value: 'mid', label: '₹100 - ₹200' },
            { value: 'high', label: '₹200 - ₹300' },
            { value: 'highest', label: 'More than ₹300' },
          ].map((price) => (
            <label key={price.value} className='mb-1'>
              <input
                type="radio"
                name="price"
                value={price.value}
                className='mr-2'
                onChange={(e) => setSelectedPrice(e.target.value)}
                id={`price-${price.value}`}
                aria-label={price.label}
              />
              {price.label}
            </label>
          ))}
        </div>
      </div>
      <div className='m-4 pb-24'>
        <h2 className='text-xl font-semibold mb-2'>Style</h2>
        <div className=''>
          {['Party', 'Indian', 'Formal', 'Indo Western', 'Western'].map((style) => (
            <label key={style} className='flex items-center'>
              <input
                type="checkbox"
                name="style"
                value={style.toLowerCase()}
                className='mr-2'
                id={`style-${style.toLowerCase()}`}
                aria-label={style}
                onChange={() => handleStyleChange(style.toLowerCase())}
              />
              {style}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
