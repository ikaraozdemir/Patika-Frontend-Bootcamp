import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [money, setMoney] = useState(100000000000);
  const [products, setProducts] = useState([
    { name: 'Big Mac', price: 3, img: '/images/big-mac.jpg', count: 0 },
    { name: 'Book', price: 15, img: '/images/book.jpg', count: 0 },
    { name: 'Drone', price: 350, img: '/images/drone.jpg', count: 0 },
    { name: 'Amazon Echo', price: 99, img: '/images/amazon-echo.jpg', count: 0 },
    { name: 'Apache Helicopter', price: 31000000, img: '/images/apache-helicopter.jpg', count: 0 },
    { name: 'Boeing 747', price: 148000000, img: '/images/boeing-747.jpg', count: 0 },
    { name: 'Cruise Ship', price: 930000000, img: '/images/cruise-ship.jpg', count: 0 },
    { name: 'Ferrari', price: 250000, img: '/images/ferrari.jpg', count: 0 },
    { name: 'Formula 1 Car', price: 15000000, img:'/images/formula-1-car.jpg', count: 0 },
    { name: 'Gaming Console', price: 299, img: '/images/gaming-console.jpg', count: 0 },
    { name: 'Gold Bar', price: 700000, img: '/images/gold-bar.jpg', count: 0 },
    { name: 'Jet Ski', price: 12000, img: '/images/jet-ski.jpg', count: 0 },
    { name: 'M1 Abrams', price: 8000000, img: '/images/m1-abrams.jpg', count: 0 },
    { name: 'Make a Movie', price: 100000000, img: '/images/make-a-movie.jpg', count: 0 },
    { name: 'NBA Team', price: 2120000000, img: '/images/nba-team.jpg', count: 0 },
    { name: 'Superbowl Ad', price: 5250000, img: '/images/superbowl-ad.jpg', count: 0 },
    { name: 'Single Family Home', price: 300000, img: '/images/single-family-home.jpg', count: 0 },
    { name: 'Video Game', price: 60, img: '/images/video-game.jpg', count: 0 },
    { name: 'Yacht', price: 7500000, img: '/images/yacht.jpg', count: 0 },
    { name: 'Tesla', price: 75000, img: '/images/tesla.jpg', count: 0 },
    { name: 'Monster Truck', price: 150000, img: '/images/monster-truck.jpg', count: 0 },
    { name: 'Mona Lisa', price: 780000000, img: '/images/mona-lisa.jpg', count: 0 },
    { name: 'Skyscraper', price: 850000000, img: '/images/skyscraper.jpg', count: 0 },
    { name: 'Mcdonalds Franchise', price: 1500000, img: '/images/mcdonalds-franchise.jpg', count: 0 },
    { name: 'Mansion', price: 45000000, img: '/images/mansion.jpg', count: 0 },
    { name: 'Movie Ticket', price: 12, img: '/images/movie-ticket.jpg', count: 0 },
    { name: 'Rolex', price: 15000, img: '/images/rolex.jpg', count: 0 },
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
      <h1 className='money'>${money.toLocaleString()}</h1>
      <div className='products'>
        {products.map((product,index) => (
          <div key={index} className='product'>
            <img src={product.img} alt="product.name"/>
            <h2 className='product-name'>{product.name}</h2>
            <h3 className='price'>${product.price.toLocaleString()}</h3>
            <div className='product-controls'>
              <button onClick={() => handleSell(index)} style={{backgroundColor: product.count > 0 ? 'red': 'lightgray',color: product.count > 0 ? 'white': 'black'}}> Sell </button>
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
