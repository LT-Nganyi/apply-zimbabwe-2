import { IonButton, IonCol, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonSelectOption } from "@ionic/react"
import React, { useDebugValue, useRef, useState } from "react"
import homelogo from '../Banner/homelogo';
let primaryhost:any= "https://www.dmzee.co.za/"

function LoginForm() {

    const txtEmail = useRef<HTMLIonInputElement>(null);
    const txtPassword = useRef<HTMLIonInputElement>(null);

    const callLogin = () => {
        var options: any = [];
        fetch(primaryhost + "education/dbconnect/dbdynamic.jsp?dbo=select_login" +
            "&email=" + txtEmail.current!.value +
            "&password=" + txtPassword.current!.value,
            {
                headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" }
            }
        )
            .then(response => response.json())
            .then(data => {
                options.push(data.data);

                var list: any = options[0].map((x: any, i: number) => {
                    return (
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    );
                });
                // setGenderOption(list)
            });

    };

    return (
        <div>
            <div className="details">
                <IonHeader className="header">
                    <IonRow>
                        <IonLabel className='section-color'>Login</IonLabel>
                    </IonRow>
                </IonHeader>
                <IonRow>
                    <IonCol size="12">
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
                <IonFooter>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton>Sign Up</IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={() => callLogin()}>Login</IonButton>
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </div>
        </div>
        
    );
    

}
export default LoginForm
