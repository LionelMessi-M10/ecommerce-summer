import React from 'react'
import slider1 from '../../assets/images/Slide1.jpg'
import slider2 from '../../assets/images/Slide2.jpg'
import slider3 from '../../assets/images/Slide3.jpg'
import slider4 from '../../assets/images/Slide4.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import { WrapperButtonMore } from '../../components/NavbarComponent/style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperProducts, WrapperTypeProduct } from './style'

const HomePage = () => {

  const arr = ['TV', 'Laptop', 'Tu lanh']

  return (
    <>
      <div>
        <WrapperTypeProduct>
          {
            arr.map((item) => <TypeProduct name={item} key={item} />)
          }
        </WrapperTypeProduct>

      </div>
      <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }}>
        <SliderComponent arrImage={[slider1, slider2, slider3, slider4]} />

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
          <CardComponent />
          <CardComponent />
        </WrapperProducts>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <WrapperButtonMore textButton="Xem thêm" type="outline" style={{
            border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
            width: '240px', height: '38px', borderRadius: '4px', cursor: 'pointer',
            fontWeight: '500'
          }} />
        </div>
      </div>
    </>
  )
}

export default HomePage
