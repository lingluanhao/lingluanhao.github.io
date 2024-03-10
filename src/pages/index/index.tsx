import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import React from 'react'
import img1 from '../../images/641.jpg'
import img2 from '../../images/642.jpg'
import img3 from '../../images/643.jpg'
import img4 from '../../images/644.jpg'
import img5 from '../../images/645.jpg'
import img6 from '../../images/646.jpg'
import img7 from '../../images/647.jpg'
import img8 from '../../images/648.jpg'


export default class Index extends Component<PropsWithChildren> {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <div className='qwe'>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
      </View>
    )
  }
}
