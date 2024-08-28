import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Feature.css"; // Import the CSS file

const Feature = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
              "x-rapidapi-key":
                "e43a6512a2msh3371d3629023a3cp1629a2jsnd872b925fc6b",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNews(data.data);
      } catch (err) {
        if (err.name === "SyntaxError") {
          setError("Response is not valid JSON");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  console.log(news);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="news-container">
      <h1 className="news-title">Cryptocurrency News</h1>
      {news.map((article, index) => (
        <div key={index} className="news-card">
          <h2>{article.title}</h2>
          <img src = {article.thumbnail} alt="" />
          <p>{`${article.description.substring(0, 100)}...`}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Read More</a>
       
        </div>
      ))}
    </div>
  );
};

export default Feature;
