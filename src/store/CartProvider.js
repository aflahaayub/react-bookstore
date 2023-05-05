import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer =  (state, action)=>{
  if(action.type === 'ADD'){
    // const updatedItems = state.items.concat(action.item)
    const existItemIndex = state.items.findIndex(item=>item.id === action.item.id)
    const existCartItem = state.items[existItemIndex]

    let updatedItems;

    if(existCartItem){
      const updatedItem = {
        ...existCartItem,
        amount: existCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      console.log(updatedItems)
      updatedItems[existItemIndex] = updatedItem
    }else{
      updatedItems = state.items.concat(action.item)
    }
    const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if(action.type === 'REMOVE'){
    const existItemIndex = state.items.findIndex(item=>item.id === action.id)

    const existItem = state.items[existItemIndex]
    const updatedTotalAmount = state.totalAmount - existItem.price
    let updatedItems;
    if(existItem.amount ===1 ){
      updatedItems = state.items.filter(item=> item.id !== action.id)
    }else{
      const updatedItem = {...existItem, amount: existItem.amount -1}
      updatedItems = [...state.items]
      updatedItems[existItemIndex] = updatedItem
    }

    return{
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState
}

export default function CartProvider(props){
  const [cartState, dispatchCartAct]= useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item =>{
    dispatchCartAct({type: 'ADD', item})
  }
  const removeItemFromCart = id =>{
    dispatchCartAct({type: 'REMOVE', id})
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart
  }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}
