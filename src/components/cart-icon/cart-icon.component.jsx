import React from "react";

import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon  } from '/home/sanjuli/dev/projects/crwn-clothing/src/assets/11.2 shopping-bag.svg';
import { createStructuredSelector } from "reselect";
import './cart-icon.styles.scss';
//import CartItem from "../cart-item/cart-item.component";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>

    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount : selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);