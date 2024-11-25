import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 200px;
  & img {
    height: 200px;
    width: 200px;
  }
`

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  padding: 15px 120px;
`

export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  margin: 6px 0 0;
`

export const WrapperPriceText = styled.div`
  color: rgb(255, 66, 78);
  font-size: 16px;
  font-weight: 500;
`

export const WrapperDiscountText = styled.span`
  color: rgb(255, 66, 78);
  font-size: 12px;
  font-weight: 500;
`