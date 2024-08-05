import React, { useEffect } from 'react';
import { FaHome, FaDollarSign, FaHandsHelping } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className='bg-purple-50 py-16 px-4'>
      <div className='container mx-auto text-center'>
        <h2
          className='text-4xl font-bold text-purple-800 mb-12'
          data-aos='fade-up'
        >
          Nuestros Servicios
        </h2>
        <div className='flex flex-wrap justify-center'>
          <div
            className='w-full md:w-1/3 px-4 mb-8'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <FaHome className='text-purple-800 text-5xl mb-4 mx-auto' />
              <h3 className='text-2xl font-bold text-purple-800 mb-4'>
                Compra de Propiedades
              </h3>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Te ayudamos a encontrar y comprar la propiedad perfecta,
                ajustada a tus necesidades y presupuesto.
              </p>
              <button className='bg-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-900 transition duration-300'>
                Más Información
              </button>
            </div>
          </div>
          <div
            className='w-full md:w-1/3 px-4 mb-8'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <FaDollarSign className='text-purple-800 text-5xl mb-4 mx-auto' />
              <h3 className='text-2xl font-bold text-purple-800 mb-4'>
                Venta de Propiedades
              </h3>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Ofrecemos un servicio completo para vender tu propiedad de
                manera rápida y efectiva.
              </p>
              <button className='bg-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-900 transition duration-300'>
                Más Información
              </button>
            </div>
          </div>
          <div
            className='w-full md:w-1/3 px-4 mb-8'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <FaHandsHelping className='text-purple-800 text-5xl mb-4 mx-auto' />
              <h3 className='text-2xl font-bold text-purple-800 mb-4'>
                Asesoramiento Personalizado
              </h3>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Nuestro equipo de expertos te brinda asesoramiento personalizado
                en cada paso del proceso inmobiliario.
              </p>
              <button className='bg-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-900 transition duration-300'>
                Más Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
