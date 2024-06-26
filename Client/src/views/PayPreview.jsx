import { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { updateDeliveryMethod } from "../Redux/Actions/payActions";

export const PayPreview = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const theme = useSelector((state) => state.themes.theme); //todo
  const user = useSelector((state) => state.auth.user)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundColor = theme === "dark" ? "#212121" : "#F3F4F6"; //todo
  const cartBackGround = theme === "dark" ? "#171717" : "#FFFFFF";
  // const letrasFondoClaro = theme === "dark" ? "#b3b3b3" : "#FFFFFF";
  const textColor = theme === "dark" ? "#ECECEC" : "#2b2b2b";
  const bordesPlomos = theme === "dark" ? "#4a4a4a" : "#DDDDDD";
  const orangeIntense = theme === "dark" ? "#D67C32" : "#FF8200";
  const { t, i18n } = useTranslation();

  const total = cart.reduce(
    (acc, product) => acc + parseFloat(product.price) * product.cartQuantity,
    0
  );

  // Estado para el método de envío
  const [deliveryMethod, setDeliveryMethod] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Función para manejar el cambio en los checkboxes
  const handleCheckboxChange = (method) => {
    setDeliveryMethod(method);
    dispatch(updateDeliveryMethod(method));
  };

  const handleContinue = () => {
    if (!user.name) {
      toast.error("User not logged in");
    } else {
      navigate("/pay");
    }
  };

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div
      className="min-h-screen text-center bg-gray-100 gap-4"
      style={{ background: backgroundColor, borderColor: bordesPlomos }}
    >
      <div className="shadow-sm">
        <Nav color={"primary"} />
      </div>
      <div className="flex justify-between mt-8">
        <div className="w-1/3 mr-2 ml-10 mt-4">
          <div className="bg-white rounded-lg p-4 shadow-md" style={{ background: cartBackGround, color: textColor }}>
            <p className="font-bold text-lg">{t('payPreview.delivery')}</p>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={deliveryMethod === "Standard"}
                onChange={() => handleCheckboxChange("Standard")}
              />
              {t('payPreview.standar')}
            </label>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
              onClick={() => (location.href = "/adress")}
            >
              {t('payPreview.edit')}
            </button>
          </div>
          <div className="mt-4 bg-white rounded-lg p-4 shadow-md hover:bg-gray-100"
            style={{ background: cartBackGround, color: textColor }}>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={deliveryMethod === "Seller"}
                onChange={() => handleCheckboxChange("Seller")}
              />
              {t('payPreview.arrange')}
            </label>
          </div>
        </div>
        <div className="w-1/3 justify-center mt-10">
          <div className="bg-white rounded-lg p-4 shadow-md mr-10 mt-4 text-lg"
            style={{ background: cartBackGround, color: textColor }}>
            <strong>{t("payPreview.summary")}</strong>
            <div className="h-auto w-1/2 my-2 bg-gray-300 mx-auto"></div>
            {cart.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4 m-4"
              >
                <div>
                  <img
                    className="rounded-full border border-gray-500 w-10 h-10"
                    src={product.img_product}
                    alt=""
                  />
                </div>
                <span className="text-sm">{product.name}</span>
                <span>{product.cartQuantity}</span>
              </div>
            ))}
            <div className="line h-px w-1/2 my-2 bg-gray-300 mx-auto"></div>
            <div className="text-center">Total ${total.toFixed(2)}</div>
          </div>
          <div className="flex justify-end mx-16">
            <button
              className="mt-8 mb-8 ml-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-lg flex items-center gap-2 justify-between"
              onClick={handleContinue}
            >
              {t("payPreview.continue")}{" "}
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};