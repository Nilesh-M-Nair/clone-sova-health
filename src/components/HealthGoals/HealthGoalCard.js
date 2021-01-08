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
       <div >
       {cardList} 
       {console.log(cardList)}
    </div>
  )
}

export default HealthGoalCard;