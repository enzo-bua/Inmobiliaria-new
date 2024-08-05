import { useHouses } from '../../hooks/useHouses';
import { Link } from 'react-router-dom';
import CardHouse from '../CardHouse/CardHouse';

export default function ListHouse() {
  const { houses } = useHouses();
  return (
    <section className='mb-50'>
      <div className='mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house) => (
            <Link to={`/property/${house.id}`} key={house.id}>
              <CardHouse house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
