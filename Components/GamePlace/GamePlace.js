import React from 'react'
import PlayerHand from '../PlayerHand/PlayerHand'

const GamePlace =(props)=>{
  const {defaultContext, context} = props

  return(
    <PlayerHand defaultContext={defaultContext} context={context}/>
  )
}

export default GamePlace