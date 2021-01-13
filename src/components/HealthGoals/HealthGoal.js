import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {MdDns} from 'react-icons/md';
import './HealthGoal.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      display:'flex',
      boxShadow: '2px 2px 5px black',
      borderRadius: '20px'
    },
  });      

function HealthGoal({card}) {
      const classes = useStyles();
    return(
        <div className ="healthgoal">
        <Card className={classes.root}>
          <CardActionArea >
            <CardContent>
            <MdDns className='icon'/>
              <Typography className='healthgoal__heading' gutterBottom variant="subtitle1" component="p">
                {card.heading}
              </Typography>
              <Typography className='healthgoal__content' variant="body5"  component="p">
                {card.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
    )
    
}

export default HealthGoal;
