import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({ size, placeholder, bordered, style, textButton, ...rests }) => {
  return (
    <Button size={size} placeholder={placeholder} bordered={bordered} style={style} {...rests}>{textButton}</Button>
  )
}

export default ButtonComponent
