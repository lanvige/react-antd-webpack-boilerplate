import React from 'react'
import { Row, Col, Table, Alert, Icon, Card } from 'antd';
import PanelBox from '../../components/PanelBox';
import services from '../../services'

import courseCover from '../../assets/course_cover.jpg'

export default class Course extends React.Component {
  constructor () {
    super()
  }

  async componentDidMount() {
    await this.updateRate();
  }

   // Common Calculate
  async updateRate() {
  }


  render () {
    return (
      <div>
      <Card bordered={true} noHovering={true} bodyStyle={{ padding: 4 }}>
        <Row>
          <Col xs={4}><img src={courseCover} /></Col>
          <Col>
            <div>课程名称</div>
            <div>标签</div>
            <div>2017-07-19 15:53:44 +0800</div>
            <div>课程名称课程名称课程名称课程名称课程名称课程名称课程名称课程名称课程名称</div>
          </Col>
        </Row>
      </Card>
      <Card bordered={true} noHovering={true} bodyStyle={{ padding: 4 }}>
        <Row>
          <Col xs={4}><img src={courseCover} /></Col>
          <Col>
            <div><h3>课程名称</h3></div>
            <div>标签</div>
            <div>2017-07-19 15:53:44 +0800</div>
            <div>课程名称课程名称课程名称课程名称课程名称课程名称课程名称课程名称课程名称</div>
          </Col>
        </Row>
      </Card>
      </div>
    )
  }
}
