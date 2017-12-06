import './index.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, matchPath } from 'react-router'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

const defaultProps = {
  items: []
}

const propTypes = {
  items: PropTypes.array
}

const { Sider } = Layout

class Sidebar extends React.Component {
  componentDidMount () {
    // this.props.getAllMenu()
  }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    return (
      <Sider>
        <div className='ant-layout-logo' />
        <Menu theme='dark'>
          <Menu.Item>
            {
              <Link to='/dashboard'>Dashboard</Link>
            }
          </Menu.Item>
          <Menu.Item>
            {
              <Link to='/course'>Course</Link>
            }
          </Menu.Item>
          <Menu.Item>
            {
              <Link to='/form'>Form</Link>
            }
          </Menu.Item>
          <Menu.Item>
            {
              <Link to='/about'>About</Link>
            }
          </Menu.Item>
        </Menu>
        <div className='sider-trigger'>
          <Icon
            className='trigger'
            type={'menu-unfold'}
            onClick={this.toggle}
          />
        </div>
      </Sider>
    )
  }
}

Sidebar.propTypes = propTypes
Sidebar.defaultProps = defaultProps

export default Sidebar
