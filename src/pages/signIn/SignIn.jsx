import LeftNav from '../../components/LeftNav/LeftNav';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './signIn.css'


export default function SignIn (){
  return(
    <div className="sign-in-container">
      <p className="get-help">Having Problem? <a href="">Get Help</a></p>
      <LeftNav/>
      <div className="form-container">
        <h3>Login To Dashboard</h3>
        <p>We're going to help you get your finances out of the way - 
          Invoicebiz is free simple and secure invlicing for small business
        </p>

        <form action="">
          <div className="text-field-container">
            <TextField className="text-field" fullWidth variant="outlined"/>
          </div>
          <br/>
          <div className="text-field-container">
            <TextField type="password" className="text-field" fullWidth variant="outlined"/>
          </div>

          <Link to="/dashboard" class="sign-in-button" color="primary" variant="contained" type="submit" value="Submit">Submit</Link>
        </form>

        <div className="separator">
          <div className="separator-item"><hr/></div>
          <div className="separator-item">Or</div>
          <div className="separator-item"><hr/></div>
        </div>
        
        <Button fullWidth variant="outlined" className="google-sign-in">
          Sign In With Google
        </Button>
        
      </div>
    </div>
  )
}