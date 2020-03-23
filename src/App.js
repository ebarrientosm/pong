import React, { Component } from 'react';
import Game from './components/game/game';
import 'tachyons';



class App extends Component {



  render() {
    return (
      <div className='mv6 tc'>
        <h1>The Pong Game</h1>
        <p>by ebarrientosm</p>
        <div>
          <h3>Controls</h3>
          <p className='b'>Player 1: W and S</p>
          <p className='b'>Player 2: UP and DOWN</p>
          <p className='b'>To start again, press SPACE</p>
        </div>
        <div className='flex justify-center mt4' >
          <Game />
        </div>
      </div>
    )
  }
}

export default App