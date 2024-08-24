import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [money, setMoney] = useState(100000000000);
  const [products, setProducts] = useState([
    { name: 'Big Mac', price: 3, img: '/images/big-mac.jpg', count: 0 },
    { name: 'Book', price: 15, img: '/images/book.jpg', count: 0 },
    { name: 'Drone', price: 350, img: '/images/drone.jpg', count: 0 }
  ]);


  const handleBuy = (index) => {
    const updatedProducts = [...products];
    const productPrice = updatedProducts[index].price;
    if (money >= productPrice) {
      let remainingAmount = productPrice;

      const interval = setInterval(() => {
        setMoney(prev => {
          if (remainingAmount > 0) {
            remainingAmount -= 1;
            return prev - 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, (100/productPrice));
      updatedProducts[index].count += 1;
      setProducts(updatedProducts);
    }
  }

  const handleSell = (index) => {
    const updatedProducts = [...products];
    const productPrice = updatedProducts[index].price;
    
    if (updatedProducts[index].count > 0) {
      const productPrice = updatedProducts[index].price;
      let remainingAmount = productPrice;
  
      const interval = setInterval(() => {
        setMoney(prev => {
          if (remainingAmount > 0) {
            remainingAmount -= 1;
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, (100 / productPrice));
  
      updatedProducts[index].count -= 1;
      setProducts(updatedProducts);
    }
  };
  

  return (
    <>
    <div className='container'>
      <div className='bill-gates-container'>
      <img className='bill-gates' src="/images/billgates.jpg" alt="" />
      <h1>Spend Bill Gates' Money</h1>
      </div>
      <h1 className='money'>${money}</h1>
      <div className='products'>
        {products.map((product,index) => (
          <div key={index} className='product'>
            <img src={product.img} alt="product.name"/>
            <h2 className='product-name'>{product.name}</h2>
            <h3 className='price'>${product.price}</h3>
            <div className='product-controls'>
              <button onClick={() => handleSell(index)}> Sell </button>
              <input type='text' value={product.count} readOnly/>
              <button onClick={() => handleBuy(index)} className='buy'>Buy</button>
            </div>
          </div>

        ))}

      </div>
    </div>
    </>
  )
}

export default App
