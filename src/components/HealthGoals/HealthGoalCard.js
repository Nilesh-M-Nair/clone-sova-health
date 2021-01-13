import React from 'react';
import {cardJSON} from '../../data';
import HealthGoal from './HealthGoal';

// const healthgoalcard = {
//   "background-color":"black"
// }

function HealthGoalCard() {
  const cardList = cardJSON.map((card)=> 
      <HealthGoal key={card.id} card ={card} />
    )
    return (
    // <div style={healthgoalcard}>
      <div className="card__container">
        <span className = 'card__heading'>WE HELP YOU ACHIEVE YOUR HEALTH GOALS</span>
        <span className = "card__healthcrad">
          {cardList}
        </span>
    </div>
  )
}

export default HealthGoalCard;