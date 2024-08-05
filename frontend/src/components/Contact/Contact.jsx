import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className='bg-gray-100 py-20'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-3xl mx-auto text-center mb-12' data-aos='fade-up'>
          <h2 className='text-4xl font-bold text-purple-800 mb-4'>
            Contáctanos
          </h2>
          <p className='text-gray-600'>
            Estamos aquí para ayudarte. Ponte en contacto con nosotros para
            cualquier consulta.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div
            className='bg-white rounded-lg shadow-lg p-6'
            data-aos='fade-up'
            data-aos-delay='100'
          >
            <h3 className='text-2xl font-bold text-purple-800 mb-4'>
              Información de Contacto
            </h3>
            <div className='flex items-center mb-4'>
              <FaMapMarkerAlt className='text-purple-800 mr-3' />
              <p className='text-gray-600'>Av. Principal 123, Ciudad, País</p>
            </div>
            <div className='flex items-center mb-4'>
              <FaPhone className='text-purple-800 mr-3' />
              <p className='text-gray-600'>+54 123 456789</p>
            </div>
            <div className='flex items-center mb-4'>
              <FaEnvelope className='text-purple-800 mr-3' />
              <p className='text-gray-600'>info@tuinmobiliaria.com</p>
            </div>
            <p className='text-gray-600'>
              Horario de Atención: Lunes a Viernes, 9:00 am - 5:00 pm
            </p>
          </div>
          <div
            className='bg-white rounded-lg shadow-lg p-6'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <h3 className='text-2xl font-bold text-purple-800 mb-4'>
              Envíanos un Mensaje
            </h3>
            <form>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Nombre
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-800 focus:ring focus:ring-purple-200'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Correo Electrónico
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-800 focus:ring focus:ring-purple-200'
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Mensaje
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-800 focus:ring focus:ring-purple-200'
                ></textarea>
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  className='bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-purple-900 transition duration-300'
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
