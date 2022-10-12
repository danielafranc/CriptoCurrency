import react, {useState, useEffect} from 'react';
import  axios  from 'axios';
import { Coin } from './Coin';
import './index.css';
import './App.css';
import 'animate.css';




function App() {

const [coins, setCoins] = useState([]);
const [search, setSearch] = useState('');
  useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => alert('Youve catched an error'))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value) 
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
   <div className="coin-app">
     <div className="div-search">
       <h1 className="coin-search">Search your currency</h1>
       <form>
         <input type="text" placeholder='Type your currency' className='coin-input' onChange={handleChange}/>
       </form>
     </div>
     {
       filteredCoins.map(coin => {
         return(
           <Coin 
           key={coin.id} 
           name={coin.name} 
           image={coin.image}
           symbol={coin.symbol}
           market_cap={coin.market_cap}
           price={coin.current_price}
           priceChange={coin.price_change_percentage_24h}
           volume={coin.total_volume}
           />
         )
       } )
     }

   </div>
  );
}

export default App
