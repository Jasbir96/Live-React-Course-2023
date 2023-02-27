
import Crousel from './Crousel'
import LoginForm from './LoginForm';
import Grid from '@mui/material/Unstable_Grid2';
function index() {
  return (
    <>
      {/* <h2>Login Page</h2> */}
      <Grid container
      >
        <Grid xs={12} sm ={8}>
          <Crousel ></Crousel>
        </Grid>
        <Grid xs={12} sm={3}>
          <LoginForm ></LoginForm>
        </Grid>
      </Grid>
      
    </>
  )
}

export default index