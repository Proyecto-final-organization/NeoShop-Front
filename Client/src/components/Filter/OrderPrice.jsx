import { useDispatch } from "react-redux";
import { useState } from "react";
import { orderProductsPrice, renderCondition } from "../../Redux/Actions/productActions";

export const OrderPrice = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("menor");
  const [dropdown, setDropdown] = useState(false);

  const handlePrice = (price) => {
    setSelectedOption(price);
    setDropdown(false);

    dispatch(orderProductsPrice(price));
    dispatch(renderCondition("filteredProducts"));
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="relative mb-3">
      <button
        type="button"
        className="flex min-h-[3rem] items-center justify-between rounded-md bg-stone-100 px-4 py-2 text-stone-800"
        onClick={toggleDropdown}
      >
        {selectedOption === "menor" ? "Menor precio" : "Mayor precio"}
        <i className="fas fa-angle-down pl-3 text-stone-700"></i>
      </button>
      {dropdown && (
        <div className="absolute z-10 mt-1 left-full top-0 ml-2 w-48 rounded-md bg-white shadow-lg">
          <ul className="text-gray-700 dropdown-list">
            <li>
              <button
                type="button"
                className={`flex w-full items-center justify-between px-2 py-2 hover:bg-stone-500 hover:text-gray-300 ${selectedOption === "menor" ? "text-white bg-secondary" : ""}`}
                onClick={() => handlePrice("menor")}
              >
                Min Price
                {selectedOption === "menor" && (
                  <i className="fas fa-check pl-4 text-green-400"></i>
                )}
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`flex w-full items-center bg-gray-100 justify-between px-4 py-2 hover:bg-stone-500 hover:text-stone-300 ${selectedOption === "mayor" ? "text-white bg-secondary" : ""}`}
                onClick={() => handlePrice("mayor")}
              >
                Max Price
                {selectedOption === "mayor" && (
                  <i className="fas fa-check pl-4 text-green-400"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
