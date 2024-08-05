import { RiSearch2Line } from 'react-icons/ri';
import CountryDropdows from '../CountryDropdows/CountryDropdows';
import PropertyDropdown from '../PropertyDropdown/PropertyDropdown';
import PriceRangeDropdown from '../PriceRangeDropdown/PriceRangeDropdown';
import { useHouses } from '../../hooks/useHouses';

export default function Search() {
  const { onClickSearch } = useHouses();
  return (
    <div
      className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between
    gap-4 border lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-gray-100 lg:bg-transparen lg:backdrop-blur rounded-lg'
    >
      <CountryDropdows />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        className='bg-violet-700 hover:bg-violet-800 transition duration-300 w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
        onClick={onClickSearch}
      >
        <RiSearch2Line className='text-xl' />
        <span className='ml-2'>Search</span>
      </button>
    </div>
  );
}
