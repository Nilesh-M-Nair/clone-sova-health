import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './HealthGoal.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      display:'flex',

    },
  });      

function HealthGoal({card}) {
      const classes = useStyles();
    return(
        <div className ="healthgoal">
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.heading}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.content}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
    )
    
}

export default HealthGoal;
