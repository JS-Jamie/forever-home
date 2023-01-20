import './navbar.css';
import { menuItems } from './menuItems';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <div className='logo'>
          <img
            className='logoImage'
            src='https://o.remove.bg/downloads/e3804c11-c010-40d5-b0b4-7bda801c47b1/cat-7376274_960_720-removebg-preview.png'
          />
          <div className='orgName'>
            <span className='orgNameText'>Forever Home</span>
          </div>
        </div>
        <div className='menu'>
          <ul className='menuItems'>
            {menuItems.map((menu, index) => {
              return (
                <li className='menuItemList' key={index}>
                  <a href={menu.url} className='menuItemListText'>
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
