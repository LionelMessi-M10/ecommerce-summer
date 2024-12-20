import { Col, Pagination, Row } from 'antd'
import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {

  const onChange = () => {

  }

  return (
    <div style={{ padding: '0 120px', background: '#efefef' }}>
      <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination defaultCurrent={1} total={20} onChange={onChange} style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }} />
        </Col>
      </Row>
    </div>
  )
}

export default TypeProductPage
