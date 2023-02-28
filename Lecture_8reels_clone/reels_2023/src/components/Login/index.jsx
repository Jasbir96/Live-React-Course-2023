
import Crousel from './Crousel'
import LoginForm from './LoginForm';
import Grid from '@mui/material/Unstable_Grid2';
import "./login.css";
function index() {
  return (
    <div className="login_container">
      
          <Crousel ></Crousel>
          <LoginForm  className="login_form"></LoginForm>
    </div>
  )
}

export default index