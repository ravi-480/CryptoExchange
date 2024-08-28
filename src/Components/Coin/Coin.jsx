import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../Context/CoinContext";
import LineChart from "../LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);
  const [loading, setLoading] = useState(true);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-XZetYuiVthqnLJHRKxznyCcf",
      },
    };

    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoin(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-XZetYuiVthqnLJHRKxznyCcf",
      },
    };

    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
  }, [currency]);

  useEffect(() => {
    fetchHistoricalData();
  }, [currency]);

  if (loading) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  if (coin && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          {coin && coin.image && <img src={coin.image.large} alt={coin.name} />}
          <p>
            <b>
              {coin.name} ({coin.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Range</li>
            <li>{coin.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>{currency.symbol} {coin.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>{currency.symbol} {coin.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 Hour high</li>
            <li>{currency.symbol} {coin.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24 Hour Low</li>
            <li>{currency.symbol} {coin.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
      </div>
      
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
