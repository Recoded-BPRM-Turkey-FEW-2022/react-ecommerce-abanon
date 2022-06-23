import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const defaultValues = {
  name: "",
  price: 0,
  category: "",
};
const Filter = ({info , setInfo}) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info)
    let filteredProducts = info.filter(product => {return !formValues.name ? product: product.title.toLowerCase().includes(formValues.name.toLowerCase())})
    .filter (product => {return !formValues.price? product :  product.price <= formValues.price})
    .filter (product =>  {return formValues.category === "all"? product: product.category === formValues.category})
    console.log(filteredProducts)
    return filteredProducts
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid margin={2} container alignItems="center" justify="center" direction="row">
        <Grid  margin={2} item>
          <TextField 
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid  margin={2} item>
          <TextField
            id="price-input"
            name="price"
            label="Maximum price"
            type="number"
            value={formValues.price}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid  margin={2} item>
          <FormControl>
            <Select
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
            >
              <MenuItem key="All" value= "all">
              All
              </MenuItem>
              <MenuItem key="Men" value= "men's clothing">
              Men
              </MenuItem>
              <MenuItem key="Women" value="women's clothing">
              Women
              </MenuItem>
              <MenuItem key="Electronic " value="electronics">
              Electronic
              </MenuItem>
              <MenuItem key="Jewelery " value="jewelery">
              Jewelery
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button  margin={2} variant="contained" color="primary" type="submit">
          Filter
        </Button>
      </Grid>
    </form>
  );
};
export default Filter;