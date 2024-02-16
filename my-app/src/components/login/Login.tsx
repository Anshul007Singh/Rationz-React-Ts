import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from './FacebookLogin';

const Login = (props: any) => {

    let [userName , setUserName] = useState('');
    let [password , setPassword] = useState('');
    let [isValid , setIsvalid] = useState(false);
    let [isLogin , setIsLogin] = useState(false)
    let loginCredentials = {
        userName: 'ansh@gmail.com',
        password: 'Ansh007#12',
    }

   
    const loginHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if(loginCredentials.userName === userName && loginCredentials.password === password){
            setIsLogin(true)
            props.isLoginHandler(isLogin)
            console.log(isLogin)
        } else {
            alert('Invalid Email address or Password');
        }
    }

    const updateButtonStyle = () => {
        let emailRegx =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/

        if(emailRegx.test(userName) && passwordRegex.test(password)){
            setIsvalid(true)
        } else {
            setIsvalid(false)
        }
    }

    const onUserNameChangeHandler = (event:any)=>{
        setUserName(event.target.value)
        updateButtonStyle()
    }

    const onpasswordChangeHandler = (event:any)=>{
        setPassword(event.target.value);
        updateButtonStyle();
    }

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: () =>  props.isLoginHandler(true),
        flow: 'auth-code',
        onError: error => console.log(error),
      });

    const handleFacebookLogin = (response: any) => {
        setIsLogin(true)
        props.isLoginHandler(true)
      };


  return (
    <div className="col-md-10 bg-secondary m-5 d-flex">
        <form className=" col-md-8 mt-5 mx-5" onSubmit={loginHandler}>
            <div className="mb-3">
                <label  className="form-label text-light mt-3">Email address</label>
                <input type="email" 
                className="form-control w-25"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={userName}
                onChange={onUserNameChangeHandler}/>
            </div>
            <div className="mb-3">
                <label className="form-label text-light">Password</label>
                <input type="password"
                    className="form-control w-25"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={onpasswordChangeHandler}/>
            </div>
            <button type="submit" className="btn mb-4" style={!isValid ? {background:'grey'}:{background:'green'}} disabled ={!isValid} >Submit</button>
        </form>
        <div className='position-relative col-3 end-50'>
            <button className="btn btn-light mt-4 mb-4" onClick={handleGoogleLogin}>Google login</button>
             <FacebookLogin onLogin={handleFacebookLogin} onLogout={function (): void{} }></FacebookLogin>
        </div>
    </div>
  );
}

export default Login;

// 211418512054189

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