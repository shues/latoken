import React from 'react';
import './index.css';
import SimpleCard from '../card';

export default function CitySet(props){
  console.log(props);
  const citySet = props.citySet.map((el, i)=> <SimpleCard city={el} key={i} tempFilter={props.tempFilter}/>);
  return(
    <div className="citySet">
      {citySet}
    </div>);
}
