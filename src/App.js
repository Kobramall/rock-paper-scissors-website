import React from "react";
import { connect } from 'react-redux'
import { AddScore, ChangeChoice, ChangepP2Choice, SetMessage } from "./Action";
import rockImg from'./assets/rock.png'
import scissorsImg from './assets/scissors.png'
import paperImg from './assets/paper.png'
import './App.css';

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
        <img src={props.p1Choice === "rock"? rockImg : props.p1Choice === "scissors" ? scissorsImg : paperImg }alt="rock" height="80" width="70"/>
        <p>{props.p1}</p> 
        <p>-</p>
        <p>{props.p2}</p>
        <img src={ props.p2Choice === "scissors" ? scissorsImg : props.p2Choice === "rock" ? rockImg : paperImg} alt="rock" height="80" width="70"/>
      </div>
         <h2>{props.message}</h2>
         <div className="buttons">
            <button onClick={() => fight('rock') }>Rock</button>
            <button onClick={() => fight('paper')}>Paper</button>
            <button onClick={() => fight('scissors')}>Scissors</button>
         </div>
         <div className="playerInfo">

         </div>
         <footer>

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

export default connect(mapStateToProps, { AddScore, ChangeChoice, ChangepP2Choice, SetMessage})(App);
