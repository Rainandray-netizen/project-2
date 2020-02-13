import React,{ useContext } from 'react';
import GamePlace from './Components/GamePlace/GamePlace'
import { View } from 'react-native'
import Context, { defaultContext } from './contexts/context'

export default function App() {
  
  const context = useContext(Context)
  //todo pass context thru to player hand.js

  return (
    <Context.Provider value={context}>
        <GamePlace defaultContext={defaultContext} context={context}/>
    </Context.Provider>
  )
}
