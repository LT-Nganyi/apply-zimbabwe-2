import { IonCol, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from "@ionic/react"
import React, { useRef, useState } from "react"

let primaryhost:any= "https://www.dmzee.co.za/"



const EducationalDetailsForm = ()=>{
    var level:any=  useRef<HTMLIonInputElement>(null)
    var grade:any=  useRef<HTMLIonInputElement>(null)
    const certificate:any    =useRef<HTMLIonInputElement>(null)

    const [getLevel,setLevel]       =useState<HTMLIonSelectOptionElement>()
    const[getCertificate,setCertificate]       =useState<HTMLIonSelectOptionElement>()
    const[getQual,setQual]       =useState<HTMLIonSelectOptionElement>()
    
    const callListCert = (parent_id:any) =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/select.jsp?edu=select_list"+
        "&parent_id="+parent_id+
        "&list_id="+0,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
            options.push(data.data)
            if (parent_id==51){
                var list:any=options[0].map((x:any,i:number)=>{
                    return(
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    )
                })
                setCertificate(list)
            }
            
        })
    }
    const callListLevel = (parent_id:any) =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/select.jsp?edu=select_list"+
        "&parent_id="+parent_id+
        "&list_id="+0,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
            options.push(data.data)
          //  if (parent_id==114){
                var list:any=options[0].map((x:any,i:number)=>{
                    return(
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    )
                })
                setLevel(list)
           // }
            
        })
    }
    const callCert =()=>{
        callListCert(51)
    }
    const callLevel=()=>{
        callListLevel(getQual)
    }

    React.useEffect(()=>{
        callLevel()
    },[])
    React.useEffect(()=>{
        callCert()
    },[])
    return(
        <div>
            <IonRow>
                <IonCol size="3">
                    <IonItem>
                        <IonLabel position= "floating">Qualification</IonLabel>
                        <IonSelect onIonChange={(e)=>{setQual(e.detail.value);callListLevel(e.detail.value)}} ref={certificate}>{getCertificate}</IonSelect>
                    </IonItem>
                </IonCol>
                <IonCol size = "3">
                    <IonItem>
                        <IonLabel position= "floating">Level</IonLabel>
                        <IonSelect ref={level}>{getLevel}</IonSelect>
                    </IonItem>
                </IonCol>
                <IonCol size = "3">
                    <IonItem>
                        <IonLabel position= "floating">Grade</IonLabel>
                        <IonInput type="text" ref={grade} />
                    </IonItem>
                </IonCol>
            </IonRow>
        </div>
    )
}
export default EducationalDetailsForm

// added Something