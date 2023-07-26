import React,{useEffect, useState} from "react";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, Input } from '@mui/material';
// import { theme } from '@mui/system';



export const Login =(props)=>{
    const [email,setEmail ]=useState("");
    const [pass,setPass ]=useState('');
    
    const handleSubmit=(e)=> {
        e.preventDefault() ;
        console.log(email);

    }

    // const theme = {
    //     spacing: 8,
    //   }
// useEffect(()=>{
//     console.log(email);
// },[email])
    return (
      <>
      
      
        <Box
            // component="form"
            sx={{
                width: 500,
                height: 500,
                backgroundColor: '#e699aa',
                borderRadius: 5,
                padding: '16px', 
               
              }}
            noValidate
            autoComplete="off"

            >

        <form  >
            <h1>Login Form</h1>
             <InputLabel htmlFor="email" 
             sx={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
              >Email</InputLabel>
            {/* <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" id="email" name="email" /> */}
            <TextField

            value={email} onChange={(e) => setEmail(e.target.value)} 
            
            name="email"
          required
          id="email"
        //   label="Required"
        placeholder="enter your email"
        />

            <br /> <br />
            <InputLabel htmlFor="password" 
            sx={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
              }}>Password</InputLabel>
            {/* <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="enter your password" id="password" name="password" /> */}
            <TextField

value={pass} onChange={(e) => setPass(e.target.value)}
            
          required
          id="password"
        //   label="Required"
        placeholder="enter your password"
        />
            
            <br /><br />

            {/* <button onClick={handleSubmit} type="submit">Login In</button> */}

            <Button onClick={handleSubmit}
        sx={{
          backgroundColor: '#f6d2a0',
          '&:hover': {
            backgroundColor: '#FFDBAA',
          },
        }}
         type="submit" variant="contained">Login In</Button>
        </form>
        <br />
       <Button onClick={()=> props.onFormSwitch('register')}
       color="primary"
       sx={{
         color: 'black',
       }}
       >Dont't have an account ? Register here</Button>

       </Box>
       </>
       
    )
}