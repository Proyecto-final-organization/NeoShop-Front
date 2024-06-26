import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  removeFromCart,
  updateCartItemQuantity,
} from "../../../Redux/Actions/cartActions";

function CartItem({ product }) {
  const [cartQuantity, setCartQuantity] = useState(product?.cartQuantity || 1);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themes.theme);//todo

  const backgroundColor = theme === "dark" ? "#171717" : "#F3F4F6";//todo
  const letrasFondoClaro = theme === "dark" ? "#b3b3b3" : "#FFFFFF";
  const textColor = theme === "dark" ? "#b3b3b3" : "#2b2b2b";
  const bordesPlomos = theme === "dark" ? "#4a4a4a" : "#DDDDDD";

  // Función para manejar cambios en la cantidad del carrito
  const handleChangeQuantity = (event) => {
    const newCartQuantity = parseInt(event.target.value, 10);
    setCartQuantity(newCartQuantity);
    dispatch(updateCartItemQuantity(product?.id_product, newCartQuantity));
  };

  // Función para eliminar el producto del carrito
  const handleRemove = (id_product) => {
    dispatch(removeFromCart(id_product));
    if (user) {
      dispatch(deleteCartItem(user.id_user, id_product));
    }
  };

  // Calcular el subtotal del producto
  const subtotal = (parseFloat(product?.price) * cartQuantity).toFixed(2);

  return (
    <div className="flex items-center gap-2 border rounded-lg px-2 py-2" style={{borderColor: bordesPlomos}}>
      <img
        src={product?.img_product}
        alt={product?.name}
        className="w-16 h-16 mr-4"
        style={{color: textColor}}
      />
      <div className="flex-1">
        <h3 className="text-sm font-semibold" style={{color: textColor}}>{product?.name}</h3>
        <p className="text-gray-500">${product?.price}</p>
      </div>
      <input
        type="number"
        value={cartQuantity}
        onChange={handleChangeQuantity}
        className="w-9 justify-center border rounded-md p-1 text-center mr-4"
        min="1"
        style={{ background: backgroundColor, color: textColor, borderColor: bordesPlomos}}
      />
      <div className="flex-col">
        <p className="text-gray-500 text-sm" >Subtotal: </p>
        <span style={{color: textColor}}>${subtotal}</span>
      </div>
      <button
        onClick={() => handleRemove(product.id_product)}
        className="text-red-500 hover:border hover:rounded-full hover:border-gray-200 p-2 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,.6)] hover:text-red-400"
      >
        {/* Icono para eliminar producto */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
