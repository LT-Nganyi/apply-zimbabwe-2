import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from "@ionic/react"
import React, { useRef, useState } from "react"

let primaryhost:any= "https://www.dmzee.co.za/"



const EducationalDetailsForm = (props:any)=>{
    var ddlLevel:any                        =useRef<HTMLIonInputElement>(null)
    var ddlGrade:any                        =useRef<HTMLIonInputElement>(null)
    var ddlQualification:any                =useRef<HTMLIonInputElement>(null)
    var contact_id:any = 0

    const [getLevel,setLevel]               =useState<HTMLIonSelectOptionElement>()
    const[getCertificate,setCertificate]    =useState<HTMLIonSelectOptionElement>()
    const[getQual,setQual]                  =useState<HTMLIonSelectOptionElement>()
    const [getGrade,setGrade]               =useState<HTMLIonSelectOptionElement>()
    
    
    const[getQualifications,setQualifications] = useState<HTMLIonRowElement>()
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
    const callListGrade = (parent_id:any) =>{
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
            // if (parent_id==51){
                var list:any=options[0].map((x:any,i:number)=>{
                    return(
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    )
                })
                setGrade(list)
            // }
            
        })
    }
    const callQualification = () =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=select_qualification"+
        "&contact_id="+props.userProperties.contact_id,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
            // {alert('Contact_id='+props.userProperties.contact_id)}
            console.log(data)
            options.push(data.data)
            var headers:any=(<IonRow className="ion-text-bold size-18">
                        <IonCol>ID</IonCol>
                        <IonCol>Qualification Type</IonCol>
                        <IonCol>Level</IonCol>
                        <IonCol>Grade</IonCol>
                     </IonRow>)
            var combined:any=[]
            var list:any=options[0].map((x:any, i:number)=>{
                return(
                    <IonRow key = {i}>
                        <IonCol>{x.id}</IonCol>
                        <IonCol>{x.qualification_id}</IonCol>
                        <IonCol>{x.level_id}</IonCol>
                        <IonCol>{x.grade_id}</IonCol>
                    </IonRow>
                )
            })
            combined=[headers, list]
            setQualifications(combined)
        })
        .catch(error=>{
            var x:any = <div></div>
            setQualifications(x)
        })
        
    }
   
    const updateQualification = () =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=update_contact_qualification"+
        "&updated_by="+props.contact_id+
        "&id="+ddlQualification.current!.value+
        "&level_id="+ddlLevel.current!.value+
        "&grade_id="+ddlGrade.current!.value,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
                callQualification()
            })
    }
    const insertQualification = () =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=insert_qualification_table"+
        "&contact_id="+props.userProperties.contact_id+
        "&qualification_id="+ddlQualification.current!.value+
        "&level_id="+ddlLevel.current!.value+
        "&grade_id="+ddlGrade.current!.value,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
                callQualification()
            })
    }
    const callCert =()=>{
        callListCert(51)
    }
    const callLevel=()=>{
        callListLevel(getQual)
    }
    const callGrade=()=>{
        callListGrade(126)
    }

    React.useEffect(()=>{
        callLevel()
        callCert()
        callGrade()
        callQualification()
    },[])
    
    return(
        <div className="education-box">
            <IonHeader> 
                <IonRow>
                    <IonCol className="ion-text-bold size-20">Education Details</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="2">
                        <IonItem>
                            <IonLabel position= "floating">Qualification</IonLabel>
                            <IonSelect onIonChange={(e)=>{setQual(e.detail.value);callListLevel(e.detail.value)}} ref={ddlQualification}>{getCertificate}</IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size = "2">
                        <IonItem>
                            <IonLabel position= "floating">Level</IonLabel>
                            <IonSelect ref={ddlLevel}>{getLevel}</IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size = "2">
                        <IonItem>
                            <IonLabel position= "floating">Grade</IonLabel>
                            <IonSelect ref={ddlGrade}>{getGrade}</IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size="3">
                        <IonButton onClick = {()=>{insertQualification()}}>Add Qualification</IonButton>
                    </IonCol>
                </IonRow>
            </IonHeader>
            <IonContent className="content-container">
                {getQualifications}
            </IonContent>
        </div>
    )
}
export default EducationalDetailsForm

// added Something