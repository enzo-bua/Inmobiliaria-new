import { useState, useEffect, createContext } from 'react';
import { housesData } from '../data/data';

export const HouseContext = createContext();

export default function HouseContextProvider({ children }) {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location any');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property any');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range any');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);

    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const onClickSearch = () => {
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
    });

    return newHouses;
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        loading,
        setLoading,
        houses,
        setHouses,
        onClickSearch,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
}
