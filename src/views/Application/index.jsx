import React from 'react';
import PropTypes from 'prop-types'
import {Layout, Affix , Row, Col} from 'antd';
import { Route, Redirect } from 'react-router-dom';

// import { childRoutes } from '@/route'

// import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'


import Dashboard from '../Dashboard';
import LevelRouting from '../LevelRouting';


import './index.scss';

const { Content } = Layout;


export const childRoutes = [
  {
    'path':'/levelrouting',
    'component': LevelRouting
  },
  {
    'path':'/dashboard',
    'component': Dashboard
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {actions} = this.props;
  }

  render() {
    const {auth, navpath, actions} = this.props;

    return (
      <Layout className="ant-layout-has-sider">
        <Sidebar />
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ minHeight: 360, backgroundColor: "red" }}>
              {childRoutes.map((route, index) => (
                <Route key={index} path={route.path} component={route.component} exactly={route.exactly} />
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
  navpath: PropTypes.array
};


export default App;
