import React from 'react'
import { View } from 'react-native'

const CardTop = (props) =>{
  const {name, cost} = props

  return(
    <View>
      <p>{name}</p>
      <p>{cost}</p>
    </View>
  )
}

export default CardTop