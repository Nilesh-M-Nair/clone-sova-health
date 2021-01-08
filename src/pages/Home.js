import React from 'react';
import Header from '../components/Header';
import HealthGoalCard from '../components/HealthGoals/HealthGoalCard';
import VideoIFrame from '../components/VideoIframe';

function Home(){
    return(
        <div className="home">
            <Header/>
            <HealthGoalCard/>
            <VideoIFrame/>
            
        </div>
    )
}

export default Home;