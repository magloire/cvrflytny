import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({

root: {
    flexGrow: 1
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));



function LoginComponent(props){
    const classes = useStyles();
    
    // const [loginData, setLoginData] = React.useState({
    //     email:{value:"", error:false, helperText:"*"},
    //     password: {value:"", error:false, helperText:"*"},
    // });

    // const handleInputChange = (event) =>{
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;

    //     setLoginData({
    //         ...loginData,
    //         [name]: {
    //             ...loginData[name],
    //             value:value
    //         }
    //     })
    // } 

    const loginData = props.loginData;
    const handleInputChange = props.handleLoginDatachange;

    return (
        <>
            <Grid item xs={3}>
                <TextField 
                    className={classes.textField} 
                    id="standard-basic" 
                    label="Brugernavn" 
                    name="user"
                    value={loginData.user.value}
                   // error={loginData.email.value.length < 3}
                    onChange={handleInputChange}
                    />
            </Grid>
            
            <Grid item xs={3}>
                <TextField 
                    type="password" 
                    className={classes.textField} 
                    id="standard-basic" 
                    label="Adgangskode" 
                    name="password"
                   // error={loginData.password.value.length < 3}
                    value={loginData.password.value}
                    onChange={handleInputChange}
                    />
            </Grid>
            
        </> 
    );
}

export default LoginComponent;
