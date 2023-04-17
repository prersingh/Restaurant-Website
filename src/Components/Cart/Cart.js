import Modal from '../UI/Modal';
import classes from './cart.module.css';

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>
        { [{id: 'c1', name: 'Chilli Burger With Pepper Relish', amount: 2, price: 12.99},
].map((item) => <li>{item.name}</li>)}</ul>;
    
  
    
  return (
    <Modal>
        {cartItems}
        <div>
            <span className={classes.total}>Total Amount:</span>
            <span className={classes.total}>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>

        </div>
      
    </Modal>
  );
};


export default Cart