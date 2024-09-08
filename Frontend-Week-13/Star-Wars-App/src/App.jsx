import './App.css'
import Ship from './components/Ship';

function App() {

  return (
    <>
      <h1>Star Wars</h1>
      <div className='search'>
        <input type="text" placeholder='Name/Model' />
        <button>Search</button>
      </div>
      <Ship/>
    </>
  );
}

export default App
