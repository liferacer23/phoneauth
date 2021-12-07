import React, { useState } from "react";
import firebase from "./firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
const App = () => {
  const [tel, setTel] = useState("");
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    //set the value of 
  };
  const handleTelChange = (e) => {
    setTel(e.target.value);
    
  };

  const configCapcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("Recaptca varified")
      },
      
    });
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    configCapcha();
    const phoneNumber = `+251${tel}`;
    const appVerifier = window.recaptchaVerifier;
    console.log(phoneNumber);
    console.log(tel);
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };

  const onSubmitOtp=(e)=>{
    e.preventDefault();
    const code = otp
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user));
  alert("you are verified Vamos");
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  console.log(error);
});
  } 
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input type="tel" name="tel" placeholder="telephone" required onChange={handleTelChange}/>
        <button  type="submit">
          Login
        </button>
      </form>

      <h1>OTP</h1>
      <form  onSubmit={onSubmitOtp} >
        <input type="tel" name="OTP" placeholder="OTP" required onChange={handleOtpChange}/>
        <button  type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default App;
 