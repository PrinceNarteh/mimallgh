import { createContext, ReactNode, useContext, useReducer } from "react";

interface ICart {
  id: string;
  name: string;
  qty: 0;
}

interface IState {
  cart: ICart[];
}

interface ICartReducer {
  state: IState;
  action: { type: string; payload: any };
}

export const cartReducer = ({
  state,
  action,
}: ICartReducer): { cart: ICart[] } => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

const CartContext = createContext<IState>({
  cart: [],
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, );
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export const useCartContext = () => useContext(CartContext);
