import { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css';
import { DROPDOWN_OPTIONS, MAX_PRODUCTS } from './utils/consts';

export default function App() {
  const [products, setProducts] = useState([]);

  function updateProducts(option) {
    setProducts((products) => {
      if (products.indexOf(option) > -1) {
        return products.filter((id) => id !== option);
      }

      if (products.length === MAX_PRODUCTS) return products;

      return [...products, option];
    });
  }

  return (
    <div className='onboarding'>
      <SelectedProducts products={products} updateProducts={updateProducts} />
      <div className='search__container'>
        <div className='search__inner'>
          <p>1 of 3</p>
          <h2>Let's add your internal tools</h2>
          <p>
            Search to quickly add products your team uses today. You'll be able
            to add as many as you need later but for now let's add four.
          </p>
          <Dropdown products={products} updateProducts={updateProducts} />
          <button
            className={`next-btn ${
              products.length === MAX_PRODUCTS ? 'next-btn__active' : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectedProducts(props) {
  const { products, updateProducts } = props;

  function deleteProduct(evt) {
    const { productid } = evt.currentTarget.dataset;

    updateProducts(productid);
  }

  return (
    <div className='products__container'>
      {products.map((productId) => (
        <div key={productId} className='product product--filled fbca'>
          <img
            className='product__logo'
            src={DROPDOWN_OPTIONS[productId].logo}
            alt={`${DROPDOWN_OPTIONS[productId].name} Logo`}
          />
          <p className='product__name'>{DROPDOWN_OPTIONS[productId].name}</p>
          <button
            className='remove'
            data-productId={productId}
            onClick={deleteProduct}
          >
            <img
              className='remove__logo'
              src='./icons8-close.svg'
              alt='close'
            />
            <p className='remove__text'>Remove</p>
          </button>
        </div>
      ))}
      {new Array(MAX_PRODUCTS - products.length)
        .fill(null)
        .map(() => ProductPlaceholder())}
    </div>
  );
}

function ProductPlaceholder() {
  return (
    <div className='product fbca'>
      <div className='product__placeholder'>
        <img
          className='product__placeholder-img'
          src='./icons8-plus.svg'
          alt='Add Logo'
        />
      </div>
    </div>
  );
}
