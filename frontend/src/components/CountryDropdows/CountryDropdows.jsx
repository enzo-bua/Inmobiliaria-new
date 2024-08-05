import { useHouses } from '../../hooks/useHouses';
import UseFilter from '../../ui/Filter';

export default function CountryDropdown() {
  const { country, setCountry, countries } = useHouses();

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };
  return (
    <UseFilter
      list={countries}
      onChange={handleCountryChange}
      selected={country}
      icono='country'
      title='place'
    />
  );
}
