import React from "react";
import { connect } from 'react-redux'
import { ResetScore, AddScore, ChangeChoice, ChangepP2Choice, SetMessage } from "./Action";
import rockP1Img from'./assets/rockP1.png'
import scissorsP1Img from './assets/scissorsP1.png'
import paperP1Img from './assets/paperP1.png'
import './App.css';
import rockP2Img from'./assets/rockP2.png'
import scissorsP2Img from './assets/scissorsP2.png'
import paperP2Img from './assets/paperP2.png'

const App = (props) => {  

  const decideP2Choice = () =>{
    let num = Math.random()
      if(num <= 0.33){
        return 'rock'
      }else if(num > 0.33 && num <= 0.66){
        return 'paper'
      }else if(num > 0.66){
        return 'scissors'
      }
  } 
  
  const fight = (p1Choice) =>{
        const MatchObj ={
          'rock' : 'scissors',
          'paper' : 'rock',
          'scissors' : 'paper'
        }
     let p2Choice = decideP2Choice() 
        props.ChangeChoice(p1Choice)
        props.ChangepP2Choice(p2Choice)
          if(p1Choice === p2Choice){
              props.SetMessage("It's a tie")
          }else if(MatchObj[p1Choice] === p2Choice){ 
            props.AddScore(0) 
            props.SetMessage('You Win :)')
          }else{
            props.AddScore(1)
            props.SetMessage('You lost :(')
          }
        
      
   }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="playersName">
        <h3>Joe</h3><div></div>
        <h3>Player 2</h3>
      </div>
      <div className="pics">
        <img src={props.p1Choice === "rock"? rockP1Img : props.p1Choice === "scissors" ? scissorsP1Img : paperP1Img }alt="rock" height="80" width="70"/>
        <p>{props.p1}</p> 
        <p>-</p>
        <p>{props.p2}</p>
        <img src={ props.p2Choice === "scissors" ? scissorsP2Img : props.p2Choice === "rock" ? rockP2Img : paperP2Img} alt="rock" height="80" width="70"/>
      </div>
         <h2>{props.message}</h2>
         <div className="buttons">
            <button onClick={() => fight('rock') }>Rock</button>
            <button onClick={() => fight('paper')}>Scissors</button>
            <button onClick={() => fight('scissors')}>Paper</button>
         </div>
         <div className="playerInfo">
           <button onClick={() => props.ResetScore()}>Reset</button>
         </div>
         <footer>
              <a href="https://github.com/Kobramall/rock-paper-scissors-website">Check Out The Code Here</a>
         </footer>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    p1: state.p1,
    p2: state.p2,
    message: state.message,
    p1Choice: state.p1Choice,
    p2Choice: state.p2Choice
  }
}

export default connect(mapStateToProps, { ResetScore, AddScore, ChangeChoice, ChangepP2Choice, SetMessage})(App);
