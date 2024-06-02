import Nav from '../components/Nav/Nav'
import Sidebar from '../components/SideBar/SideBar'
import ProductList from '../components/ProductList/ProductList'
import { useSelector } from 'react-redux'


export const Products = () => {
  const allProducts= useSelector((state) => state.allProducts);
  const filteredProducts= useSelector((state) => state.filteredProducts);
  const condition = useSelector((state) => state.condition);

  const renderProducts = () => {
    switch (condition) {
      case "allProducts":
        return <ProductList allProducts={allProducts} />;
      case "filteredProducts":
        return <ProductList allProducts={filteredProducts} />;

      default:
        return <ProductList allProducts={allProducts}  />; 
    }
  };

  return (
    <div className="max-w-screen text-center gap-4">
    <div className="shadow-sm">
      <Nav />
    </div>
    <div className="flex justify-center text-center mt-4">
      <h1 className="mb-7 text-4xl font-bold pb-2 text-details hover:drop-shadow-[0_35px_35px_rgba(0,0,0,.6)]">
        Products
      </h1>
    </div>
    <div className="flex">
      <div className="relative -mt-24"> 
        <Sidebar />
      </div>
      <div className="ml-44 mr-8"> 
      {renderProducts()}
      </div>
    </div>
  </div>
  )
}