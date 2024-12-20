import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Badge, Col } from 'antd';
import React from 'react';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch.jsx';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style.js';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>SHOP ECCOMERCE</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size='large'
            placeholder='input search text'
            textButton='Tìm kiếm'
            bordered={false}
          // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập / Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>

          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
