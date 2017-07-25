import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Affix, Row, Col } from 'antd';
import { Route, Redirect } from 'react-router-dom';

// import { childRoutes } from '@/route'

import Header from '../../components/Header';
import NavPath from '../../components/NavPath';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';


import Dashboard from '../Dashboard';
import Form from '../Form';
import About from '../About';
import Course from '../Course';


import './index.scss';

const { Content } = Layout;


export const childRoutes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/form',
    component: Form,
  },
  {
    path: '/course',
    component: Course,
  },
  {
    path: '/form1',
    component: () => <div>123</div>,
  },
];


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { actions } = this.props;
  }

  render() {
    const { auth, navpath, actions } = this.props;

    return (
      <Layout className="ant-layout-has-sider">
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px' }}>
            <NavPath data={navpath} />
            <div style={{ minHeight: 360 }}>
              {childRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exactly={route.exactly}
                />
              ))}
              <Route exact path="/www" render={() => (
                <h3>Please select a topic.</h3>
              )}/>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object,
  navpath: PropTypes.array,
};


export default App;
