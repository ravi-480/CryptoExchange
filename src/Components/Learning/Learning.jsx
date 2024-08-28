import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Learning.css";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Introduction to Blockchain",
    content:
      "Blockchain is a distributed database that maintains a continuously growing list of records, called blocks, secured from tampering and revision.",
    link: "https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-technology"
  },
  {
    title: "How to Buy Cryptocurrency",
    content:
      "Buying cryptocurrency involves choosing a platform, creating an account, and making a purchase using fiat currency or another cryptocurrency.",
    link: "https://www.forbes.com/advisor/in/investing/cryptocurrency/how-to-buy-cryptocurrency/"
  },
];

const videos = [
  {
    title: "Blockchain Explained",
    url: "https://www.youtube.com/embed/SSo_EIwHSd4",
    youtubeLink: "https://www.youtube.com/watch?v=SSo_EIwHSd4",
  },
  {
    title: "How to Trade Crypto",
    url: "https://www.youtube.com/embed/3XxRUB6_fV8",
    youtubeLink: "https://www.youtube.com/watch?v=3XxRUB6_fV8",
  },
];

const glossary = [
  {
    term: "Blockchain",
    definition:
      "A decentralized ledger of all transactions across a peer-to-peer network.",
    link: "https://www.simplilearn.com/tutorials/blockchain-tutorial/blockchain-technology",
  },
  {
    term: "Cryptocurrency",
    definition:
      "A digital or virtual currency that uses cryptography for security.",
    link: "https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-cryptocurrency",
  },
];

const LearningCenter = () => {
  const handleVideoClick = (youtubeLink) => {
    window.open(youtubeLink, "_blank");
  };

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Container className="learning-center">
      <Row>
        <Col md={6}>
          <h2 className="section-title">Educational Articles</h2>
          {articles.map((article, index) => (
            <Card key={index} className="article-card" onClick={() => handleLinkClick(article.link)}>
              <Card.Body>
                <Card.Title className="article-title">
                  {article.title}
                </Card.Title>
                <Card.Text>{article.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={6}>
          <h2 className="section-title">Video Tutorials</h2>
          <div className="video-grid">
            {videos.map((video, index) => (
              <div
                key={index}
                className="video-card"
                onClick={() => handleVideoClick(video.youtubeLink)}
              >
                <h5 className="video-title">{video.title}</h5>
                <div className="video-wrapper">
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <h2 className="section-title mt-4">Glossary</h2>
      <Row>
        {glossary.map((item, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card className="glossary-card" onClick={() => handleLinkClick(item.link)}>
              <Card.Body>
                <Card.Title className="glossary-term">{item.term}</Card.Title>
                <Card.Text>{item.definition}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LearningCenter;
