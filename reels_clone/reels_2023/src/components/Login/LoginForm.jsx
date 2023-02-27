import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
// import  "./insta";
import { useState } from "react";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHelper = () => {
    console.log(email, " ", password)
  }
  return (
    <>
      {/* <div>LoginForm</div> */}

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img src="insta.png" alt=""
            height="80px"

          />
          <div>
            <TextField
              type="email"
              id="outlined-basic"
              label="email"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          <div>
            <TextField
              type="password"
              id="outlined-basic" label="password"
              variant="outlined"
              fullWidth="true"
              margin="normal"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <Button variant="contained"
            size="normal"

            onClick={loginHelper}
          >
            <Typography variant="h6">
              Log in</Typography>


          </Button>
        </CardContent>
      </Card>
      <Card sx={{
        minWidth: 275,
        marginTop: "1rem"
      }}>
        <CardContent>
          <Typography variant="p">
            Don't have an account
            <Button variant='text'
            >
              <Typography >Signup</Typography>
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default LoginForm;