import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function ContainedButton(props) {
  console.log(props);

  const setCitySet = ()=>{
//    debugger;
    const newCitySet = props.citySet;
    if(!newCitySet.includes(props.city)){
      newCitySet.push(props.city);
      console.log(newCitySet);
      props.setCitySet(newCitySet.map((el)=>el));
    }
  }

  return (
      <Button variant="contained" color="primary" onClick={setCitySet}>
        Добавить
      </Button>
  );
}
