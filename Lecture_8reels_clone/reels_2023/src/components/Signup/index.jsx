import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from "react-router-dom";
// import  "./insta";
import { useState } from "react";
function Signup() {
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
          <Typography variant="body1"
            style={{ color: "gray" }}
          >Sign up to see photos and videos from your friends</Typography>
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
          <div>
            <TextField
              type="text"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              margin="normal"
              fullWidth="true"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
          <Button variant="outlined"
            component="label"
            size="normal"
            fullWidth
            onClick={loginHelper}
            style={{
              marginBottom: '10px',
              color: "#cf2f74",
              borderColor: "#cf2f74"
            }}
            startIcon={<CloudUploadIcon />}

          >
            <input hidden accept="image/*" multiple type="file" />
            UPLOAD PROFILE IMAGE</Button>
          <Button variant="contained"
            size="normal"
            fullWidth
            onClick={loginHelper}
          >
            <Typography variant="h6">
              SIGNUP</Typography>
          </Button>
        </CardContent>
      </Card>
      <Card sx={{
        minWidth: 275,
        marginTop: "1rem"
      }}>
        <CardContent>
          <Typography variant="p"
          >
            Don't have an account
            <Button variant='text'
            >
              <Typography
              >
                <Link to="/login"> Login</Link>
              </Typography>
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Signup;