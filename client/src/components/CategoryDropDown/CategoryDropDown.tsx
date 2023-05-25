import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CategoryDropDown() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        onChange={handleChange}
      >
        <MenuItem>All</MenuItem>
        <MenuItem>Necklaces</MenuItem>
        <MenuItem>Bracelets</MenuItem>
        <MenuItem>Earrings</MenuItem>
      </Select>
    </FormControl>
  );
}