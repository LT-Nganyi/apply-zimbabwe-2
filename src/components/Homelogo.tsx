import { IonButton, IonCol, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonSelectOption } from "@ionic/react"
import React, { useDebugValue, useRef, useState } from "react"
import "./Homelogo.css"


const Homelogo=(props:any)=> {
    
  const txtEmail        = useRef<HTMLIonInputElement>(null);
  const txtPassword     = useRef<HTMLIonInputElement>(null);

  const callLogin = () => {
    var options: any = [];
    fetch(props.primaryhost + "education/dbconnect/dbdynamic.jsp?dbo=select_login" +
        "&email=" + txtEmail.current!.value +
        "&password=" + txtPassword.current!.value,
        {
            headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
        }
    )
        .then(response => response.json())
        .then(data => {
            options.push(data.data);

            if(data.data[0].exists==1){
              var resultset:any = {
                email:data.data[0].email,
                forename:data.data[0].first_name,
                middle_name:data.data[0].middle_name,
                surname:data.data[0].surname,
                user_id:data.data[0].contact_id,
                contact_type_id:data.data[0].contact_type_id
            
              }
              props.details(resultset)
            }
            // setGenderOption(list)
        });

};
  
  const SignIn=(props:any)=> {
    const {
      overlapGroup1,
      seeWhyTheWorlds,
      line3,
      trustedBy,
      line4,
      accenture4,
      airbnb,
      react,
      sky4,
      spanText1,
      spanText2,
      spanText3,
      line5,
      btn_Google_Signin_Dark_Normal_Web2X,
      or,
      logIn,
      signIn,
      appzimbLogo,
      password1Props,
      password2Props,
    } = props;
  
    return (
      <div className="container-center-horizontal">
        <div className="sign-inscreen">
          <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <div className="signup-form">
              <div className="flex-col">
                <h1 className="see-why-the-worlds">
                  {seeWhyTheWorlds}
                </h1>
                <div className="trusted-by">
                  <img className="line-3" src={line3} />
                  <div className="trusted-by-1metropolis-medium-manatee-16px">
                    {trustedBy}
                  </div>
                  <img className="line-4" src={line4} />
                </div>
                <div className="client-logos">
                  <div className="flex-col-1">
                    <img className="accenture-4" src="../../assets/images/zimsec.png" />
                    <img className="airbnb" src="../../assets/images/minofinfo.png" />
                  </div>
                  <div className="flex-col-2">
                    <img className="react" src="../../assets/images/unep.png" />
                    <img className="sky-4" src="../../assets/images/nationalartslogo.png" />
                  </div>
                </div>
              </div>
              <div className="overlap-group">
                <div className="rectangle-373"></div>
                <div className="rectangle-374"></div>
                <p className="dont-have-an-account-sign-up">
                  <span className="span0">{spanText1}</span>
                  <span className="span1">{spanText2}</span>
                  <span className="span2">{spanText3}</span>
                </p>
                <img className="line-5" src={line5} />
                <img
                  className="btn_google_signin_dark_normal_web2x"
                  src="../../assets/images/btngoogle.png" 
                />
                <div className="or">
                  {or}
                </div>
                <div className="sign-in-input">
                    <IonRow>
                        <IonCol size='12'>
                          <IonItem>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="text" ref={txtEmail} />
                            </IonItem> 
                        </IonCol>
                        <IonCol size="12">
                          <IonItem>
                              <IonLabel position="floating">Password</IonLabel>
                              <IonInput type="password" ref={txtPassword} />
                          </IonItem>
                        </IonCol>
                    </IonRow>
                </div>
                <div className="b-tn_-primary">
                  <div className="log-in" onClick={() => callLogin()}>
                      Sign In
                  </div>
                </div>
                <div className="sign-in-1">
                  <div className="sign-in-button">
                    sign in
                  </div>
                </div>
              </div>
            </div>
            <img className="appzimb-logo" src ="../../assets/images/appzimb.png"/>
          </div>
        </div>
      </div>
    );
  }
  
  const Password=(props:any)=> {
    const { inputType, inputPlaceholder, className } = props;
  
    return (
      <div className={`password border-1px-manatee-2 ${className || ""}`}>
        <input
          className="password-1metropolis-medium-manatee-16px"
          name="password11"
          placeholder={inputPlaceholder}
          type={inputType}
          required
        />
      </div>
    );
  }
  
  const password1Data = {
    inputType: "text",
    inputPlaceholder: "Password",
  };
  
  const password2Data = {
    inputType: "email",
    inputPlaceholder: "Your primary email",
    className: "email",
  };
  
  const signInData = {
    overlapGroup1: "path-1.png",
    seeWhyTheWorlds: (
      <React.Fragment>
        See why the world’s best companies use Apply Zimbabwe <br />
        as an employee source
      </React.Fragment>
    ),
    line3: "line-3-1.png",
    trustedBy: "Trusted by",
    line4: "line-3-1.png",
    accenture4: "accenture-4-1.png",
    airbnb: "airbnb-1.png",
    react: "react-1.png",
    sky4: "sky-4-1.png",
    spanText1: "Don't have an account?",
    spanText2: " ",
    spanText3: "Sign Up",
    line5: "line-5-1.png",
    btn_Google_Signin_Dark_Normal_Web2X: "btn-google-signin-dark-normal-web-2x-1.png",
    or: "OR",
    logIn: "Log in",
    signIn: "Sign In",
    appzimbLogo: "appzimb-logo-1.png",
    password1Props: password1Data,
    password2Props: password2Data,
  };
  return (<div><SignIn {...signInData} /></div>);
}
  export default Homelogo;
