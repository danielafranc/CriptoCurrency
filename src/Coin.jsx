import React from 'react'
import './index.css';
import 'animate.css';


export const Coin = ({name, image, symbol, price, volume, priceChange, market_cap}) => {
    return (
        
        <div className="coin-container animate__animated animate__fadeInUp">
            <div className="coin-row">

                <div className="coin">
                    <img src={image} alt='cripto' /> 
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coin-volume">${volume.toLocaleString()}</p>
                </div>

                {priceChange < 0 ? ( 
                    <p className="coin-percent red"> {priceChange.toFixed(2)}%</p>
                    )
                    : (<p className="coin-percent green"> {priceChange.toFixed(2)}%</p>)
                }
                
                <p className="coin-marketcap">
                    Market Cap: ${market_cap.toLocaleString()}
                </p>
                
            </div>
        </div>
    )
}
