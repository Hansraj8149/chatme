import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from 'react-bootstrap'
import "./Home.css";
import homeImg from '../images/bg.jpg'

function Home() {
  return (
    <div className="home">
      <div className="home_left">
        <div className="home_content">
          <h1>Share the world with your friends</h1>
          <p>Chat App lets you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="success" className="home_btn">
              Get Started <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </div>
      <div className="home__bg home_right">
        <img src={homeImg} alt="Home" />
      </div>
    </div>

  );
}

export default Home;