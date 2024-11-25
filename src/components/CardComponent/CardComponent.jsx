import { StarFilled } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { WrapperPriceText, WrapperReportText } from '../../pages/HomePage/style';
import { StyleNameProduct } from './style';

const CardComponent = () => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      bodyStyle={{padding: '10px'}}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span>4.5</span> <StarFilled style={{fontSize: '10px', color: 'yellow'}}/>
        <span> | Da ban 1000+</span>
        <WrapperPriceText>1.000.000d</WrapperPriceText>
      </WrapperReportText>
    </Card>
  )
}

export default CardComponent
