import React from 'react';
import HealthGoalCard from '../../components/HealthGoals/HealthGoalCard';
import VideoIFrame from '../../components/VideoIframe';
import Action from '../../components/Action/Action'
import Header from '../../components/Header/Header'

import './Home.css'
import Footer from '../../components/Footer/Footer';
import Customer from '../../components/Slider/Customer';

function Home(){
    return(
        <div className="home">
            <Action />
            <Header/>
            <HealthGoalCard/>
            <VideoIFrame/>
            <Customer/>
            <Footer/>
            </div>
    )
}

export default Home;