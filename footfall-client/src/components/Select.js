import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';

export default function BasicSelect({data}) {
    const [camera, setCamera] = React.useState('');
    const [itName, setItName] = React.useState('');

  console.log(data)
  const handleChange = (event) => {
    setCamera(event.target.value);
  };

  const onClick = (event) => {
    var tempItems = data.items
    if(!tempItems[camera])
        {
            tempItems[camera] = []
        }
    tempItems[camera].push(itName)
    data.setItems(tempItems)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth color='warning'>
        <InputLabel id="demo-simple-select-label">Cameras</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={camera}
          label="Cameras"
          onChange={handleChange}
          color='warning'
        >
            {
                data["cameras"].map( value => { return <MenuItem value={value}>{value}</MenuItem> } )
            }
        </Select>
      </FormControl>
      
      <div style={{width:"100%",display:"flex",flexDirection:"row",gap:"10px",marginTop:"10px"}}>
      <TextField fullWidth id="outlined-basic" label="Add Item" variant="outlined" onChange={(event)=>{setItName(event.target.value)}} value={itName}/>
      <Button variant='outlined' color='success' onClick={onClick}>Add</Button>
      </div>

      <div style={{width:"100%",display:"flex",flexDirection:"column",gap:"10px",marginTop:"10px"}}>
        {
            data["items"][camera] && data["items"][camera].map( value => { console.log(value); return <Button variant='outlined' fullWidth value={value}>{value}</Button> } )
        }
      </div>
    </Box>
  );
}
