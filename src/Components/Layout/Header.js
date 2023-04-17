import React, { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>BurgerMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/> 
        </header>
        <div className={classes['main-image']}>
            <img src='https://www.zastavki.com/pictures/2560x1600/2012/Food_Bread_rolls_croissants_Fast_Food_Hamburger_034633_.jpg' alt='A table full of delicious food!'/>
        </div>
      
    </Fragment>
  )
}

export default Header
