import React from 'react'
import Grid from '@material-ui/core/Grid'
import { TextField,
         Button,
         Typography,
         Checkbox, 
         FormGroup, 
         FormControlLabel,
         MenuItem,
         makeStyles  } from '@material-ui/core'
import { Link } from "react-router-dom";


const currencies = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '5',
      label: '5',
    },     
  ];

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default function Forms(){
    const classes = useStyles();

    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return(
        <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>      
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                  Avaliação
            </Typography> 
            <form>
                <Grid container direction="row" spacing={1}>
                    <Grid item container direction="column">
                        <TextField label="Pergunta" />
                        <TextField select label="Resposta" value={currency} onChange={handleChange}>
                            {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                            ))}                        
                        </TextField>                        
                    </Grid>                                  
                    <Button variant="contained" type="submit">
                        Criar
                    </Button>
                </Grid>    
            </form>       
        </div>
    )
}