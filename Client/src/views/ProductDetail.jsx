import React, { useState, useEffect } from 'react';
import "./ProductDetail.css";

const product = {
  name: "Smartphone XYZ",
  brand: "MotoMoto",
  description: "Diseño sofisticado con protección IP68 y colores PANTONE™ El MotoMoto Smartphone XYZ es un smartphone de última generación con pantalla OLED, 12gb de RAM y 512GB de almacenamiento interno.",
  images: [
    "https://armoto.vtexassets.com/arquivos/ids/165511-1200-auto?v=638439555713970000&width=1200&height=auto&aspect=true",
    "https://armoto.vtexassets.com/arquivos/ids/165512-1200-auto?v=638439555801270000&width=1200&height=auto&aspect=true",
    "https://armoto.vtexassets.com/arquivos/ids/165513-1200-auto?v=638439555874570000&width=1200&height=auto&aspect=true",
    "https://armoto.vtexassets.com/arquivos/ids/165515-1200-auto?v=638439556108800000&width=1200&height=auto&aspect=true",
    "https://armoto.vtexassets.com/arquivos/ids/165519-1200-auto?v=638439556650800000&width=1200&height=auto&aspect=true",
  ],
  date: "28/05/2024", 
  price: 699.99,
  quantity: 25,
  available: true,
  average_mark: 4.5,
  status: "Nuevo",
  specifics: {
    screen: 'OLED 6,33" 1080x1920 Full HD',
    cpu: 'Snapdragon 8 gen 1',
    ram: '12gb',
    storage: '512gb',
    weight: '150gr',
    size: '160x50x10',
    cameras: '50mp + 10mp',
    battery: '2000mAh',
    android: '14',
    connections: '5G, Wifi 6, Bluetooth 4.0',
  }
};

const seller = {
  name: "MotoMoto",
  image: "https://lojarcell.vteximg.com.br/arquivos/ids/162373/banner-marcas-motorola-mobile-min.png?v=637493652503570000",
  ventas: 11000,
  average_mark: 4.5,
};

const reviews = [
  'Marcos: "Me encantó" 5 / 5',
  'Juan: "Muy buen producto" 4 / 5',
  'Candela: "Es casi perfecto!" 4.5 / 5',
  'María: "Excelente!" 5 / 5',
];

const ProductDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [customQuantity, setCustomQuantity] = useState('');
  const [isCustomQuantity, setIsCustomQuantity] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (value === "more") {
      setIsCustomQuantity(true);
      setSelectedQuantity('');
    } else {
      setIsCustomQuantity(false);
      setSelectedQuantity(Number(value));
    }
  };

  const handleCustomQuantityChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value > 0 && value <= product.quantity) {
      setCustomQuantity(Number(value));
      setSelectedQuantity(Number(value));
    } else if (value === '') {
      setCustomQuantity('');
      setSelectedQuantity('');
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const formatVentasText = (ventas) => {
    return ventas >= 10000 ? 'más de 10 mil ventas' : `${ventas} ventas`;
  };

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div>
          <div className="image-container">
            <button onClick={handlePrevImage}>&lt;</button>
            <img src={product.images[currentImageIndex]} alt={`Product Image ${currentImageIndex + 1}`} />
            <button onClick={handleNextImage}>&gt;</button>
          </div>
          <div className="thumbnail-container">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${currentImageIndex === index ? 'selected' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
          <div className="description-container">
            <p className="product-description">{product.description}</p>
            <ul className="specifications-list">
            <p className='spec-title'>Características</p>
              {Object.entries(product.specifics).map(([key, value]) => (
                <li key={key}>
                  <span className="spec-name">{key}:</span> <span className="spec-value">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="info-container">
          <p className="product-date">publicado: {product.date}</p>
          <h1 className="product-name">{product.name}</h1>
          <p className="brand">de: {product.brand}</p>
          <div className="content-flex">
            <p className="product-average-mark">{product.average_mark} / 5</p>
            <p className="product-status">{product.status}</p>
            <p className={`product-availability ${product.available ? 'available' : 'not-available'}`}>
              {product.available ? 'Disponible' : 'No disponible'}
            </p>
          </div>
          <p className="product-price">${product.price}</p>
          <div>
          <div className="product-quantity">
            <label htmlFor="quantity-select">Cantidad: </label>
            <select id="quantity-select" value={isCustomQuantity ? "more" : selectedQuantity} onChange={handleQuantityChange}>
              {[...Array(Math.min(10, product.quantity)).keys()].map(i => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
              {product.quantity > 10 && <option value="more">Más de 10</option>}
            </select>
            <span className="total-available">({product.quantity} disponibles)</span>
          </div>
          {isCustomQuantity && (
              <input
                className='product-quantity-custom'
                type="number"
                value={customQuantity}
                onChange={handleCustomQuantityChange}
                min="1"
                max={product.quantity}
                placeholder={`Máx ${product.quantity}`}
              />
            )}
          </div>
          <button className='buy-button'>Comprar</button>
          <p className='brand'>Vendedor:</p>
          <div className='seller-container'>
            <img className='seller-image' src={seller.image} alt={`Imagen del vendedor ${seller.name}`} />
            <p className='seller-name'>{seller.name}</p>
            <div className='seller-stats'>
              <p className='seller-stats-text'>{formatVentasText(seller.ventas)}</p>
              <p className='seller-stats-text'>reputación: {seller.average_mark} / 5</p>
            </div>
            <button className='seller-button'>Ir a la tienda</button>
          </div>
          <div className="review-container">
            <p className="review-text">{reviews[currentReviewIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;