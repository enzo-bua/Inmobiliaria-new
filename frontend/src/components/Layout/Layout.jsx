import Footer from './Footer';
import NavBar2 from './NavBar2';

export default function Layout({ children }) {
  return (
    <>
      <div className='min-h-screen mb-2'>
        <NavBar2 />
        {children}
      </div>
      <Footer />
    </>
  );
}
