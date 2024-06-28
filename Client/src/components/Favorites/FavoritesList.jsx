import { FavoriteCard } from "./FavoriteCard";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToFavorites, sendFavorites, removeFromFavorites, deleteFavoriteItem } from "../../Redux/Actions/favoritesActions";
import { useTranslation } from "react-i18next";

export const FavoritesList = ({ favorites }) => {
  const favoriteIds = favorites.map(fav => fav.id_product);
  const user = useSelector((state) => state.auth.user);
  const id_user = user.id_user
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleAddToFav = (product) => {
    const id_product = product.id_product;
    const isFavorite = favoriteIds.includes(id_product);
  
    if (isFavorite) {
      toast.success(t("favorites.removed"));
      dispatch(removeFromFavorites(product));
      dispatch(deleteFavoriteItem(id_product, id_user));
    } else {
      toast.success(t("favorites.added"));
      dispatch(addToFavorites(product));
      dispatch(sendFavorites(id_product, id_user));
    }
  };

  return (
    <div className="items-center text-left p-4 rounded-lg justify-between w-full flex-grow">
      {favorites?.map(product => (
        <FavoriteCard 
          key={product.id_product} 
          id_product={product.id_product}
          name={product.name}
          img_product={product.img_product}
          price={product.price}
          description={product.description}
          onAddToFav={() => handleAddToFav(product)}
        />
      ))}
    </div>
  );
};