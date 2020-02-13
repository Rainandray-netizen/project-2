import React from 'react'
import {View} from 'react-native'

const CardMiddle =(props)=>{
const {img_url, desc} = props

  return(
    <View>
      <p>{img_url}</p>
      <p>{desc}</p>
    </View>
  )
}

export default CardMiddle