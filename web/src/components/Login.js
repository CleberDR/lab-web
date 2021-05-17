import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Link } from "react-router-dom";


export default function Login(){
 
    const [matricula,setMatricula]=useState('')
    const [senha,setSenha]=useState('')   

    return(
        <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
            <Grid item container direction="column"  justify="center" alignItems="center">
                <Grid item>
                    <Typography variant="h2">
                        Login
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction="column"  justify="center" alignItems="center" spacing={1}>
                <Grid item>
                    <TextField 
                    label="Matricula" 
                    id="matricula" 
                    value={matricula} 
                    onChange={(event)=> setMatricula(event.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                    type="password" 
                    label="Senha" 
                    id="senha"
                    value={senha}
                    onChange={(event)=> setSenha(event.target.value)}
                    />
                </Grid>                
            </Grid>
            <Grid item >
                <Button variant="contained" component={Link} to="/formsinfo">
                    Entrar
                </Button>
            </Grid>       
        </Grid>
    )
}