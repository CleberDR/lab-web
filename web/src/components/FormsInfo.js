import React from 'react'
import Grid from '@material-ui/core/Grid'
import { TextField,
         Button,
         Typography,
         Checkbox, 
         FormGroup, 
         FormControlLabel,
         MenuItem,
         makeStyles } from '@material-ui/core'
import { Link } from "react-router-dom";

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

  const currencies = [
    {
      value: 'Professores',
      label: 'Professores',
    },
    {
      value: 'Alunos',
      label: 'Alunos',
    },
    {
      value: 'Técnicos',
      label: 'Técnicos',
    },   
  ];

export default function Forms(){
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    

    return(
        <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>      
            <Typography variant="h4" align="center" component="h1" gutterBottom>
                  Informações da Avaliação
            </Typography> 
            <form>
                <Grid container direction="row" spacing={1}>
                    <Grid item container direction="column">
                        <TextField label="Nome da Avaliação" />
                        <TextField label="Objetivo"/>
                        <TextField select label="Grupo Alvo" value={currency} onChange={handleChange}>
                            {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                            ))}                        
                        </TextField>
                    </Grid>                    
                    <FormGroup row>                        
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Inicio"
                                type="date"                                
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                             <TextField
                                id="date"
                                label="Final"
                                type="date"                                
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <FormControlLabel control={<Checkbox name="checked" color="black"/>}
                                            label="Avaliação Anônima" />
                        </form>
                    </FormGroup>                                    
                    <Button variant="contained" type="submit" component={Link} to="/forms">
                        Criar
                    </Button>
                </Grid>    
            </form>       
        </div>
    )
}