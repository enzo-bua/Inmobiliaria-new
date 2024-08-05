'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  // const navigation = [
  //   { name: 'ABOUT US', href: '/about-us' },
  //   { name: 'SERVICE', href: '/service' },
  //   { name: 'CONTACT', href: '/contact' },
  // ];
  const navigation = [
    { name: 'SOBRE NOSOTROS', href: '/about-us' },
    { name: 'SERVICIOS', href: '/service' },
    { name: 'CONTACTOS', href: '/contact' },
  ];

  return (
    <header className='bg-gradient-to-r from-violet-950 to-slate-600 text-gray-100 inset-x-0 z-50 sticky top-0 drop-shadow-lg border-y-black'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5 flex items-center space-x-2'>
            <div className='flex flex-col items-center text-center'>
              <h1 className='xl:text-3xl text-gray-300 font-normal'>REALTY</h1>
              <h3 className='xl:text-lg font-extralight'>REAL STATE</h3>
            </div>
          </Link>
        </div>
        {/* <div className='flex lg:flex-1'>
          <h1 className='hidden text-center lg:block text-3xl  text-gray-300 font-extralight'>
            UMO
          </h1>
        </div> */}

        <div className='flex lg:hidden '>
          <div
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='ml-4'
          >
            {!mobileMenuOpen ? (
              <FaBars className='w-8 text-black ' size='24px' />
            ) : (
              <FaTimes
                className='w-8 text-black rounded-md border border-black'
                size='24px'
              />
            )}
          </div>
        </div>
        <div className='hidden lg:flex lg:gap-x-8 '>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className='text-lg font-semibold leading-6 text-white'
            >
              <p
                className={` rounded-lg p-2 ${
                  pathname === item.href ? 'bg-slate-400' : 'hover:bg-slate-400'
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </nav>

      <ul
        className={
          !mobileMenuOpen
            ? 'hidden'
            : 'absolute bg-gradient-to-r from-black to-slate-400 text-gray-100 w-full px-4 py-2 gap-y-3'
        }
      >
        <Link to='/nosotros' className='block text-md'>
          <li className='border-b-2 border-gray-300 w-full py-4'>Nosotros</li>
        </Link>
        <li className='border-b-2 border-gray-300 w-full py-4'>
          <Link to='/contacto' className='block  text-md'>
            Contactos
          </Link>
        </li>
      </ul>
    </header>
  );
}
