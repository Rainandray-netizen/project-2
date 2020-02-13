import React, { useReducer, useContext } from 'react'
import {View} from 'react-native'
import Card from '../Card/Card'

const PlayerHand = (props) => {
  const { defaultContext,context } = props

  const [handState,dispatch] = useReducer(defaultContext.reducer,defaultContext.cardsInHand)

  defaultContext.dispatch = dispatch
  
  if(context.startToken){
    console.log('startToken found')
    defaultContext.dispatch({
      type:'DRAW_CARDS',
      payload:{
        shuffleFirst:true,
        draw: 5,
      },
    })
    context.startToken = 0
  }

  return(
      <View>
        {handState.map((value,index)=> <Card key={index} cardInfo={context.cardDataBase[value]} /> )}
      </View>
  )
}

export default PlayerHand