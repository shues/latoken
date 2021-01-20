// *https://www.registers.service.gov.uk/registers/country/use-the-api*
//import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function ComboBox(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    console.log('get city');

    (async () => {
      if (Event.target !== undefined){
        console.log(Event.target.value);
      }
//      const url =
      const response = await fetch('https://testcadexchange.000webhostapp.com/getcity.php?city=' + props.city);
      console.log(props.city);
//      await sleep(1000); // For demo purposes.
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    console.log('open');
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={(e,r) => {
        console.log(r);
        console.log(e.target.value);
        setOpen(false);
      }}
      onInputChange={(e,v,r)=>
//        {if(r === 'reset')
        {
          console.log(123);
          props.setCity(v);
          setOptions([]);
//        }
        }
      }
//      value.name={props.city}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Выберите город"
          variant="outlined"

          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
