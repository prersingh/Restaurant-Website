import Modal from '../UI/Modal';
import classes from './cart.module.css';
import { useContext } from "react";
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';



const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({ ...item, amount: 1 });
    };
  
    const cartItems = (
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.key}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
    );
  
    return (
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    );
  };
  
  export default Cart;