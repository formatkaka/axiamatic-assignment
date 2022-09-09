import { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className='onboarding'>
      <SelectedProducts products={products} />
      <div className='search__container'>
        <div className='search__inner'>
          <p>1 of 3</p>
          <h2>Let's add your internal tools</h2>
          <p>
            Search to quickly add products your team uses today. You'll be able
            to add as many as you need later but for now let's add four.
          </p>
          <Dropdown />
          <button className='next-btn'>Next</button>
        </div>
      </div>
    </div>
  );
}

function SelectedProducts(props) {
  const { products } = props;

  return (
    <div className='products__container'>
      {products.map((product) => (
        <div className='product'>
          <img
            className='product__logo'
            src={product.logo}
            alt={`${product.name} Logo`}
          />
          <p className='product__name'>{product.name}</p>
          <button className='remove'>
            <img
              className='remove__logo'
              src='./icons8-close.svg'
              alt='close'
            />
            <p className='remove__text'>Remove</p>
          </button>
        </div>
      ))}
      {new Array(4 - products.length).fill(null).map(() => (
        <div className='product fbca'>
          <div className='product__placeholder'>
            <img
              className='product__placeholder-img'
              src='./icons8-plus.svg'
              alt='Add Logo'
            />
          </div>
        </div>
      ))}
    </div>
  );
}
