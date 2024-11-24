import {
  SearchOutlined
} from '@ant-design/icons';
import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent';

const ButtonInputSearch = (props) => {

  const { size, placeholder, textButton, bordered, backgroundColorInput = '#fff', backgroundColorButton = 'rgb(13,92,182', colorButton='#fff'} = props;

  return (
    <div style={{ display: 'flex' }}>
      <InputComponent size={size} placeholder={placeholder} bordered={bordered} style={{ backgroundColor: backgroundColorInput, borderRadius: '0px' }} />
      <ButtonComponent size={size} icon={<SearchOutlined />} bordered={bordered} style={{ backgroundColor: backgroundColorButton, borderRadius: '0px', border: 'none', color: colorButton }} textButton={textButton} />
    </div>
  )
}

export default ButtonInputSearch
