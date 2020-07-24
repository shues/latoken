import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function SimpleCard(props) {
  const classes = useStyles();
  const [weather, setWeather] = React.useState({
    main:{
      temp:0,
      pressure:0,
    },
    wind:{
      speed: 0,
    }
  });
  const [error, setError] = React.useState('');
  const loading = false;
  const bull = <span className={classes.bullet}>•</span>;

  React.useEffect(()=>{
    (async () => {

      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?appid=6d9425d4dc622ca82cc4e73b017f2955&q=' + props.city);
//      await sleep(1000); // For demo purposes.
      const ans = await response.json();
      console.log(ans);
      setWeather(ans);
      console.log(weather);
    })();
  },[loading]);

  if((weather.main.temp - 273) < props.tempFilter){
    return null
  }

  if(weather.cod === "404"){
    return (
      <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.city}
        </Typography>
        <Typography className={classes.title} color="textPrimary">
          Данные не найдены
        </Typography>
      </CardContent>
    </Card>
    );
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.city}
        </Typography>
        <Typography className={classes.title} color="textPrimary">
          Температура {(weather.main.temp - 273).toFixed(2)}
        </Typography>
        <Typography className={classes.title} color="textPrimary">
          Ветер  {weather.wind.speed}
        </Typography>
        <Typography className={classes.title} color="textPrimary">
          Давление {(weather.main.pressure * 0.75006375541921).toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}
