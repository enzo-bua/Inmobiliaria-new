import { useState } from 'react';
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome2Line,
  RiMapPinLine,
} from 'react-icons/ri';

export default function UseFilter({
  selected,
  onChange,
  list = [],
  icono,
  title,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const IconoFilter = icono === 'country' ? RiMapPinLine : RiHome2Line;

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left flex items-center'
      >
        <IconoFilter className='mr-2 text-violet-700' />
        <div className='flex-1'>
          <div className='text-[15px] font-medium leading-tight'>
            {selected}
          </div>
          <div className='text-[13px]'>Select your {title}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='ml-auto text-violet-600' />
        ) : (
          <RiArrowDownSLine className='ml-auto text-violet-600' />
        )}
      </button>

      {isOpen && (
        <div className='absolute w-full mt-1 py-1 bg-white border border-gray-200 shadow-lg rounded-md z-10'>
          {list.map((countryItem, index) => (
            <div
              key={index}
              className='px-3 text-black py-2 text-sm cursor-pointer hover:bg-gray-100'
              onClick={() => {
                onChange(countryItem);
                setIsOpen(false);
              }}
            >
              {countryItem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
