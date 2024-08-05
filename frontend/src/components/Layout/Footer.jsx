import { FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
export default function Footer() {
  return (
    <div className='w-full bg-slate-700 text-gray-300 py-y px-2'>
      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white'>
        <p className='py-4'>Buasys Solutions. Software & Production</p>
        <p className='py-4'>Buasys Solutions &copy; 2023</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <a href='https://www.buasys.com.ar' target='_blank' rel='noreferrer'>
            <FaGlobe />
          </a>
          <a href='mailto:buasys22@gmail.com' target='_blank' rel='noreferrer'>
            <SiGmail />
          </a>
          <a
            href='https://www.linkedin.com/in/buasys-solutions-7a179527a'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://www.instagram.com/buasys_solutions/'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
