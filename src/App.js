import React from 'react';
import ComboBox from './components/select';
import ContainedButton from './components/button';
import CitySet from './components/citySet';
import DiscreteSlider from './components/filter';
import './App.css';

function App() {
  const [city, setCity] = React.useState('');
  const [citySet, setCitySet] = React.useState([]);
  const [tempFilter, setTempFilter] = React.useState(0);

  return (
    <div>
      <div className="header">
        <ComboBox setCity={setCity} city = {city} />
        <ContainedButton setCitySet={setCitySet} city={city} setCity={setCity} citySet={citySet} />
        <DiscreteSlider tempFilter={tempFilter} setTempFilter={setTempFilter} />
      </div>
      <CitySet citySet = {citySet} tempFilter={tempFilter} />
    </div>
  );
}

export default App;
