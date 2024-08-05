import { useContext } from 'react';
import { HouseContext } from '../context/HouseContext';

export const useHouses = () => {
  const context = useContext(HouseContext);
  if (context === undefined) {
    throw new Error('Cart no longer exists');
  }

  return context;
};
