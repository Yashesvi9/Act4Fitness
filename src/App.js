import { Layout, Typography, Menu, Col, Icon } from "antd";
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Steps from "./components/Steps";
import About from "./components/About";
import StatForm from "./components/StatForm";
import Activity from "./components/Activity";

const { Title } = Typography;

const { Text } = Typography;
const { Header, Footer } = Layout;


const App = () => {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <Col span={6}>
            <h1 className="app-title">Act4Fitness</h1>
           </Col>
          <Col span={15}>
            <Menu mode="horizontal" theme="dark" className="header-menu">
              <Menu.Item key="appHome">
                <Link to="/">
                  <Icon type="home" />
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="appAbout">
                <Link to="/about">
                  <Icon type="team" />
                  About
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Header>
        <Layout className="content-box">
        <span >
        <h1 id= "welcome">Track your health on a daily basis.</h1>
        </span>
          <Switch>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/StatForm" element={<StatForm />} />
          </Switch>
        </Layout>
        <Footer>
          <Text type="secondary">
            © The Act4Fitness Company. All Rights Reserved
          </Text>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
