import { createContext } from 'react'
import { cardDataBase } from '@decks/cardDataBase'
import {deck1} from '@decks/deck1'

export const defaultContext = {

  cardDataBase,
  player1Deck: deck1,
  startToken: 1,
  // shufflePile:[],

  shuffleDeck:(deck)=>{
    for(let i=deck.length-1;i>0;i--){
      let j = Math.floor(Math.random()*(i+1));
      [deck[i],deck[j]]=[deck[j],deck[i]]
    }
    console.log('shuffled deck ',deck)
    defaultContext.playerDeck = deck
  },

  cardsInHand:[],

  dispatch:()=>{console.log('this is a dummy, dummy')},
  reducer:(state,action)=>{
    switch(action.type){
      case 'DRAW_CARDS':
        if(action.payload.shuffleFirst){
          console.log('imma shuffle this real quick')
          defaultContext.shuffleDeck(defaultContext.player1Deck)
        }
        console.log("DRAWING CARDS")
        for(let c = 0;c<action.payload.draw;c++){
          defaultContext.cardsInHand.push(defaultContext.player1Deck.pop())
          // return defaultContext.player1Deck.map(card=>card)
        }
        console.log('cards in hand ',defaultContext.cardsInHand)
        return defaultContext.cardsInHand
      default:
        return state
    }
  }
}

export default createContext(defaultContext)