import React from 'react'
import {View} from 'react-native'

const CardBottom = (props) => {
  const {atk, def} = props

  return(
    <View>
      <p>{atk}</p>
      <p>{def}</p>
    </View>
  )
}

export default CardBottom