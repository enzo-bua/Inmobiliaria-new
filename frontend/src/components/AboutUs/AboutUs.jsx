const AboutUs = () => {
  return (
    <section className='bg-white py-16 px-4'>
      <div className='container mx-auto flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 mb-8 md:mb-0 px-4' data-aos='fade-right'>
          <img
            src='https://img.freepik.com/foto-gratis/mano-que-presenta-casa-modelo-campana-prestamos-hipotecarios_53876-104970.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1719273600&semt=sph'
            alt='Nuestra Inmobiliaria'
            className='rounded-lg shadow-lg w-full'
          />
        </div>
        <div className='md:w-1/2 px-4' data-aos='fade-left'>
          <h2 className='text-4xl font-bold text-purple-800 mb-6'>
            Sobre Nosotros
          </h2>
          <p className='text-gray-600 mb-4 leading-relaxed'>
            Somos una inmobiliaria dedicada a ayudar a nuestros clientes a
            encontrar la propiedad de sus sueños. Con años de experiencia en el
            mercado, ofrecemos un servicio personalizado y profesional para
            asegurar que cada cliente tenga una experiencia satisfactoria.
          </p>
          <p className='text-gray-600 mb-4 leading-relaxed'>
            Ya sea que estés buscando comprar, vender o alquilar, nuestro equipo
            de expertos está aquí para ayudarte en cada paso del camino. Confía
            en nosotros para hacer realidad tus metas inmobiliarias.
          </p>
          <p className='text-purple-800 font-semibold mb-6'>
            ¡Estamos aquí para ayudarte a encontrar tu hogar ideal!
          </p>
          <button className='bg-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-900 transition duration-300'>
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
