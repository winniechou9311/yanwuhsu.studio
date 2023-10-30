import React, {useState} from "react";
import Header from "../components/Layouts/Header";
import Meals from "src/components/Meals/Meals";
import Cart from "src/components/Cart/Cart";
import CartProvider from "src/store/CartProvider";
import WeatherTest from "src/components/Weather/WeatherTest";

const Booking = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
    {/* <WeatherTest/> */}
    <CartProvider>
      {cartIsShown &&<Cart onClose={hideCartHandler}/>}
      <Header onShownCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    </>
  );
};

export default Booking;
