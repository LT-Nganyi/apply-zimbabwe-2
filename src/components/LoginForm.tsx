import { IonButton, IonCol, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonSelectOption } from "@ionic/react"
import React, { useDebugValue, useRef, useState } from "react"
// import './LoginForm.css'
let primaryhost:any= "https://www.dmzee.co.za/"


const LoginForm = (props:any) =>{

    const txtEmail      =useRef<HTMLIonInputElement>(null)
    const txtPassword   =useRef<HTMLIonInputElement>(null)
    var contactId:any   =0
    var contactTypeId:any
    var email:any
    var firstName:any
    var middleName:any
    var surname:any
    var mobileNumber:any
    var salutationId:any
    var idNumber:any
    var idTypeId:any
    var genderId:any

    const callLogin = () =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=select_login"+
        "&email="+txtEmail.current!.value+
        "&password="+txtPassword.current!.value,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {

            var state:any   = {
                contact_id:data.data[0].contact_id,
                contact_type_id:data.data[0].contact_type_id,
                email:data.data[0].email,
                forename:data.data[0].forename,
                surname:data.data[0].surname
            }
            props.state(state)
            contactId       = data.data[0].contact_id
            contactTypeId   = data.data[0].contact_type_id
            email           = data.data[0].email
            firstName       = data.data[0].forename
            middleName      = data.data[0].middle_name
            surname         = data.data[0].surname
            mobileNumber    = data.data[0].number
            salutationId    = data.data[0].salutation_id
            idNumber        = data.data[0].id_number
            idTypeId        = data.data[0].id_type_id
            genderId        = data.data[0].gender_id
            
            
            {data.data[0].exists == 0?
                alert("Login Failed!")
                :
                alert("Login Successful, Welcome to Apply Zimbabwe "+contactId)
            }
        })
        
    }

    return(
        <div>
            <div className="details">
                <IonHeader className="header">
                    <IonRow>
                        <IonLabel className='section-color' >Login</IonLabel>
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
                            <IonButton onClick={()=>callLogin()}>Login</IonButton>
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </div>
        </div>
    )

}
export default LoginForm
