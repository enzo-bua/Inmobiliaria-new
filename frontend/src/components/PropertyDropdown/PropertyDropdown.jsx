import { useHouses } from '../../hooks/useHouses';
import UseFilter from '../../ui/Filter';

export default function PropertyDropdown() {
  const { property, setProperty, properties } = useHouses();

  const handlePropertyChange = (selectedProperty) => {
    setProperty(selectedProperty);
  };
  return (
    <UseFilter
      list={properties}
      onChange={handlePropertyChange}
      selected={property}
      icono='property'
      title='type'
    />
  );
}
