import { Link, useParams } from 'react-router-dom';
import { BiArea, BiBath, BiBed } from 'react-icons/bi';
import Image from '../assets/img/houses/house1lg.png';
import Image1 from '../assets/img/houses/house2lg.png';
import Image2 from '../assets/img/houses/house3lg.png';
import Agent from '../assets/img/agents/agent1.png';
import Form from '../components/Form/Form';
import Maps from '../ui/Maps';
import WhatsAppButton from '../ui/WhatsAppButton';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PropertyDetails() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const { id } = useParams();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollToTop = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    scrollToTop();
  }, []);
  const [images, setImages] = useState([Image, Image1, Image2]);
  return (
    <section className='container mx-auto py-10' ref={scrollRef}>
      <div className='grid grid-cols-1 lg:grid-cols-2 p-1 bg-white rounded-lg shadow-lg'>
        {/* Left Column */}
        <div className='p-4'>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>
            Hermosa Casa Familiar
          </h2>
          <h3 className='text-xl mb-4 text-gray-500'>
            1234 Calle Palermo, Buenos Aires, Argentina{' '}
          </h3>
          <div className='flex gap-x-2 text-sm mb-4'>
            <span className='bg-green-500 text-white px-3 py-1 rounded-full'>
              Venta
            </span>
            <span className='bg-violet-500 text-white px-3 py-1 rounded-full'>
              Argentina
            </span>
          </div>
          <div className='flex items-center mb-4'>
            <div className='text-4xl font-bold text-violet-600'>$500,000</div>
          </div>
          <div className='flex gap-x-6 text-violet-500 mb-6'>
            <div className='flex items-center gap-x-2'>
              <BiBed className='text-2xl' />
              <span className='text-lg'>3</span>
            </div>
            <div className='flex items-center gap-x-2'>
              <BiBath className='text-2xl' />
              <span className='text-lg'>3 </span>
            </div>
            <div className='flex items-center gap-x-2'>
              <BiArea className='text-2xl' />
              <span className='text-lg'>1200 m2</span>
            </div>
          </div>
          <p className='text-gray-700 leading-relaxed'>
            Welcome to this beautiful family house located in a serene
            neighborhood. The property features modern amenities and spacious
            rooms, perfect for a growing family. Enjoy the large backyard and
            the convenient location near schools and parks.
          </p>

          <WhatsAppButton />
        </div>

        {/* Right Column */}
        <div className='col-span-2 lg:col-span-1 '>
          <div className='w-[45rem]'>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property ${index + 1}`}
                  className='w-full  rounded-lg shadow-md'
                />
              ))}
            </Slider>
          </div>
        </div>

        {/* Bottom Image */}
        <div className='p-4 mt-5'>
          <div className='border border-gray-300 rounded-lg p-6 shadow-md bg-white'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-16 h-16 overflow-hidden rounded-full'>
                <img
                  src={Agent}
                  alt='Agent'
                  className='w-full h-full object-cover'
                />
              </div>
              {/* <div>
                <div className='font-bold text-lg'>Enzo Bua</div>
                <Link
                  to='/listings'
                  className='text-violet-500 hover:underline'
                >
                  View Listings
                </Link>
              </div> */}
            </div>
            <Form />
          </div>
        </div>
        <div className='p-4 z-10 mt-4 '>
          <h2 className='font-semibold text-center mb-4 text-xl'>LOCATION</h2>
          <Maps
            location={{
              center: [-34.5733558, -58.4622152], // Centro del mapa
              markerPosition: [-34.5780655, -58.4265317], // Posición del marcador
            }}
          />
        </div>
      </div>
    </section>
  );
}
