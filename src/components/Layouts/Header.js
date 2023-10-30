import React from 'react';
import { useLocation } from 'react-router-dom'; // 引入 useLocation
import bannerImage from '../../assets/bookingBanner.jpg';
import classes from './Header.module.css';
import HeaderCartBtn from './HeaderCartBtn';

const Header = (props) => {
  const location = useLocation(); // 使用 useLocation 來取得當前路徑

  // 檢查路徑是否為 booking，然後決定是否顯示 bannerImage
  const shouldShowBanner = location.pathname === '/booking';

  return (
    <>
    <div className={classes.btn}>
          <HeaderCartBtn className={classes.btn} onClick={props.onShownCart} />
          </div>
        {/* {shouldShowBanner && <img src={bannerImage} alt="booking header" />} */}
    </>
  );
};

export default Header;
