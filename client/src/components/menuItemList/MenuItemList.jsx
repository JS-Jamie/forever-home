import './menuItemList.css';

const MenuItems = ({ items }) => {
  return (
    <li className='menu-items'>
      {items.submenu ? (
        <>
          <button type='button' aria-haspopup='menu'>
            {items.title}{' '}
          </button>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
