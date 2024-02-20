// FacebookLoginButton.tsx
import React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

interface facebookCredentials {
  onLogin: (response: ReactFacebookLoginInfo) => void;
  onLogout: () => void;
}

const Facebooklogin: React.FC<facebookCredentials> = ({ onLogin, onLogout }) => {
  const appId = '1415082412449606'; 
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



{/* <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script> */}