import Burger from './Burger';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
      <Link href='/'>
          <a className='logo'>Rifki.</a>
        </Link>
        <Burger />
      </div>
    </nav>
  );
};

export default Navbar;
