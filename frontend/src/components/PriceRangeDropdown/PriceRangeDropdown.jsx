import { useState } from 'react';
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
import { useHouses } from '../../hooks/useHouses';

export default function UseFilter() {
  const { price, setPrice } = useHouses();
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Prince range (any)',
    },
    { value: '100.000 - 130.000' },
    { value: '130.000 - 160.000' },
    { value: '160.000 - 200.000' },
    { value: '200.000 - max' },
  ];

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left flex items-center'
      >
        <RiMoneyDollarCircleLine className='mr-2 text-violet-700' />
        <div className='flex-1'>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Select your price</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='ml-auto text-violet-600' />
        ) : (
          <RiArrowDownSLine className='ml-auto text-violet-600' />
        )}
      </button>

      {isOpen && (
        <div className='absolute w-full mt-1 py-1 bg-white border border-gray-200 shadow-lg rounded-md z-10'>
          {prices.map((item, index) => (
            <div
              key={index}
              className='px-3 text-black py-2 text-sm cursor-pointer hover:bg-gray-100'
              onClick={() => {
                setPrice(item.value);
                setIsOpen(false);
              }}
            >
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
