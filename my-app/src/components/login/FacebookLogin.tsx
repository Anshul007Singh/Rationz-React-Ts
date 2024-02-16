// FacebookLoginButton.tsx
import React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

interface facebookCredentials {
  onLogin: (response: ReactFacebookLoginInfo) => void;
  onLogout: () => void;
}

const Facebooklogin: React.FC<facebookCredentials> = ({ onLogin, onLogout }) => {
  const appId = '211418512054189'; 
  const handleLogin = (response: ReactFacebookLoginInfo) => {
    if (response) {
      onLogin(response);
    } else {
      onLogout();
    }
  };

  return (
    <FacebookLogin
      appId={appId}
      autoLoad={false}
      fields="name,email,picture"
      callback={handleLogin}
      textButton="Login with Facebook"
      size='small'
    />
  );
};

export default Facebooklogin;
