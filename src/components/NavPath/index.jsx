import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';


const defaultProps = {
  data: [],
};

const propTypes = {
  data: PropTypes.array,
};

class NavPath extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const bread = data.map((item) => (
      <Breadcrumb.Item key={'bc-'+item.key}>{item.name}</Breadcrumb.Item>
    ));
    return (
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item key='bc-0'>首页</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

NavPath.propTypes = propTypes;
NavPath.defaultProps = defaultProps;

export default NavPath;
