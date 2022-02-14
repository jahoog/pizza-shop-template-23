import React from "react";
import { Link } from "react-router-dom";

// BootStrap imports
import { Container, Row, Col, Button, Card } from "react-bootstrap";

// Application Components
import Header from "./components/Header";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Comments from "./components/Comments";
import OrderList from "./components/OrderList";
import Chat from "./components/Chat";

// Utility Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container className="px-0">
        <Row>
          <Col>&nbsp;</Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Card>
              <Card.Body>
                <Cart />
              </Card.Body>
            </Card>
            <br />
            <br />
            <Card>
              <Card.Body>
                <Card.Title>Order via Chat!</Card.Title>
                <Card.Text>
                  Don't want to browse through the menu? Just tell our chatbot
                  what you need. Simply say, "I would like a large cheese
                  pizza".
                </Card.Text>
              </Card.Body>
              <Link to="/chat">
                <Button>Click to Chat</Button>
              </Link>
            </Card>
          </Col>

          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/feedback" element={<Comments />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
