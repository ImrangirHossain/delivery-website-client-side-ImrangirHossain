import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleLogin} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
      signInUsingGoogle()
          .then(result => {
              history.push(redirect_uri);
          })
  }

    return (
        <div onSubmit={handleLogin} className="text-start p-5 my-4 mx-auto ">
       <div className="col-lg-4 col-md-6  col-12 mx-auto">
        <h1 >Please Login</h1>
          <button type="submit" className="btn btn-secondary" onClick={handleGoogleLogin}>Google sign in</button>
          <br />
          </div>
      </div>
    );
};

export default Login;