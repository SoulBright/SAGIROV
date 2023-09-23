import React, { useEffect, useState } from 'react';
import APIService from '../../services/APIService';
import { TypeMenu } from '../../types';

import s from './header.module.scss'


const Header: React.FC = () => {
  const [menuItems, setMenuItems] = useState<TypeMenu[]>([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    fetchMenu();
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 321);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fetchMenu = async (): Promise<void> => {
    try {
      const response = await APIService.getMenu();
      const sortedMenuItems = response.data.sort((a:TypeMenu, b:TypeMenu) => a.serial_number - b.serial_number);
      setMenuItems(sortedMenuItems);
    } catch (error) {
      console.log('Ошибка при получении меню:', error);
    }
  };

  return (
    <header className={s.header}>
      <div className={s.logo_container}>
        {isSmallScreen ? (
          <img className={s.logo} src={process.env.PUBLIC_URL + '/images/logo_phone.png'} alt='Логотип' />
        ) : (
          <img className={s.logo} src={process.env.PUBLIC_URL + '/images/logo.png'} alt='Логотип' />
        )}
      </div>
      <div className={s.menu}>
        {menuItems.map((item) => (
          <div key={item.id} className={s.menu_items}>
            <a href={item.url}>{item.title}</a>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;