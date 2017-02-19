import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './RockPaperScissors.sass'

const CardExampleWithAvatar = () => (
  <Card>
    <CardTitle title="Game"/>
    <div className="RPS">
      <CardText>

      </CardText>
    </div>
    <CardActions>
      <FlatButton label="Rock" />
      <FlatButton label="Paper" />
      <FlatButton label="Scissors" />
    </CardActions>
  </Card>
);

export default CardExampleWithAvatar;
