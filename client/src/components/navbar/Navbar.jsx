import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <div className='logo'>
          <img
            className='logoImage'
            src='https://cdn.pixabay.com/photo/2022/08/10/03/30/cat-7376274_960_720.png'
          />
          <span className='orgName'>Forever Home</span>
        </div>
        <div className='menu'>
          <span>ABOUT US</span>
          <span>ADOPT</span>
          <span>VOLUNTEER</span>
          <span>GIVE</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
