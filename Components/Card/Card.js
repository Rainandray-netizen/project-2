import React from 'react'
import { View } from 'react-native'
import CardTop from '@components/CardTop/CardTop'
import CardMiddle from '@components/CardMiddle/CardMiddle'
import CardBottom from '@components/CardBottom/CardBottom'

const Card = (props) =>{

  const {cardInfo} = props
  console.log('card info ',cardInfo)
  return(
    <View>
      <CardTop name={cardInfo.name} cost={cardInfo.cost}/>
      <CardMiddle img_url={cardInfo.img_url} desc={cardInfo.desc}/>
      {cardInfo.atk && cardInfo.def && <CardBottom atk={cardInfo.atk} def={cardInfo.def}/>}
    </View>
  )
}

export default Card

//todo: add in the rest of the card props