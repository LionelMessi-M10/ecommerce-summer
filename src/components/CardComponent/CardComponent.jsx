import { StarFilled } from '@ant-design/icons';
import React from 'react';
import { WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from '../../pages/HomePage/style';
import { StyleNameProduct } from './style';

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      bodyStyle={{ padding: '10px' }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight: '4px'}}>
          <span>4.5</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
        </span>
        <span> | Da ban 1000+</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000d
        <WrapperDiscountText>-4%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent
