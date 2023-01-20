import './navbar.css';
import { menuItems } from './menuItems';
import MenuItemList from '../menuItemList/MenuItemList';

const Navbar = () => {
  const logoImg = require('../../img/foreverHomeLogo-removebg-preview.png');

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <div className='logo'>
          <img className='logoImage' src={logoImg} alt='animal logo' />
          <div className='orgName'>
            <span className='orgNameText'>Forever Home</span>
          </div>
        </div>
        <div className='menu'>
          <nav>
            <ul className='menuItemSection'>
              {menuItems.map((menu, index) => {
                return <MenuItemList items={menu} key={index} />;
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
