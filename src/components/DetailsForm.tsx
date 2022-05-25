import { IonButton, IonCol, IonInput, IonItem, IonLabel, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption } from "@ionic/react"
import React, { useDebugValue, useRef, useState } from "react"
import './DetailsForm.css'
let primaryhost:any= "https://www.dmzee.co.za/"
let contact_type_id:any = 2
const DetailsForm = () =>{

    
    const firstName:any    =useRef<HTMLIonInputElement>(null)
    const middleName:any   =useRef<HTMLIonInputElement>(null)
    const surName:any      =useRef<HTMLIonInputElement>(null)
    const email:any        =useRef<HTMLIonInputElement>(null)
    const level:any       =useRef<HTMLIonInputElement>(null)
    const mobileNumber:any  =useRef<HTMLIonInputElement>(null)
    const salutation:any  =useRef<HTMLIonInputElement>(null)
    const town:any          =useRef<HTMLIonInputElement>(null)
    const DOB:any          =useRef<HTMLIonInputElement>(null)
    const password:any      =useRef<HTMLIonInputElement>(null)
    const password2:any      =useRef<HTMLIonInputElement>(null)
    const IdNumber:any      =useRef<HTMLIonInputElement>(null)
    const Country:any    =useRef<HTMLIonInputElement>(null)
    const Area:any    =useRef<HTMLIonInputElement>(null)
    const houseNo:any    =useRef<HTMLIonInputElement>(null)
    const certificate:any    =useRef<HTMLIonInputElement>(null)
    const grade:any    =useRef<HTMLIonInputElement>(null)
    const streetName:any    =useRef<HTMLIonInputElement>(null)
    const [getLevel,setLevel]       =useState<HTMLIonSelectOptionElement>()
    const[getCertificate,setCertificate]       =useState<HTMLIonSelectOptionElement>()
    const[getQual,setQual]       =useState<HTMLIonSelectOptionElement>()
    const [getGrade,setGrade]           =useState<HTMLIonSelectOptionElement>()
    const [getSalutationOption,setSalutationOption] =useState<HTMLIonSelectOptionElement>()
    const [getTownOption,setTownOption] = useState<HTMLIonSelectOptionElement>()
    const [getCountryOption,setCountryOption] =useState<HTMLIonSelectOptionElement>()
    var qual:any

    const callList = (parent_id:any) =>{
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
            if (parent_id==19){
                var list:any=options[0].map((x:any,i:number)=>{
                    return(
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    )
                })
                setSalutationOption(list)
            }
            
        })
    }
    const callListTown = (parent_id:any) =>{
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
            if (parent_id==114){
                var list:any=options[0].map((x:any,i:number)=>{
                    return(
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    )
                })
                setTownOption(list)
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
    const callListCountry = (parent_id:any) =>{
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
           if (parent_id==108){
                var list:any=options[0].map((x:any,i:number)=>{
                    return(
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    )
                })
                setCountryOption(list)
           }
            
        })
        
    }
    const callSalutation = ()=>{
        callList(19)
    }
    const callTown = ()=>{
        callListTown(114)
    }
    const callCountry =()=>{
        callListCountry(108)
    }
    const callCert =()=>{
        callListCert(51)
    }
    const callLevel=()=>{
        callListLevel(getQual)
    }
    const insertDetails = (contact_type_id:any, firstName:any,middleName:any,surName:any,email:any,password:any) =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/insert.jsp?edu=insert_contact"+
        "&contact_type_id="+contact_type_id+
        "&firstname="+firstName+
        "&middlename="+middleName+
        "&surname="+surName+
        "&email="+email+
        "&password="+password+
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data =>{
            
        })
    }
    React.useEffect(()=>{
        callSalutation()
    },[])
    React.useEffect(()=>{
        callTown()
    },[])
    React.useEffect(()=>{
        callCert()
    },[])
    React.useEffect(()=>{
        callCountry()
    },[])
    
    React.useEffect(()=>{
        callLevel()
    },[])
    return(
        <div>
            <IonRow>
                <IonCol className= "section-color size-24">
                    Enter Details
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size = "1">
                    <IonItem>
                        <IonLabel position="floating">Title</IonLabel>
                        <IonSelect ref={salutation}>{getSalutationOption}</IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="2">
                    <IonItem>
                        <IonLabel position="floating">First Name</IonLabel>
                        <IonInput type="text" ref={firstName} />
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem>
                        <IonLabel position="floating">Middle Name</IonLabel>
                        <IonInput type="text" ref={middleName} />
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem>
                        <IonLabel position="floating">Surname</IonLabel>
                        <IonInput type="text" ref={surName} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonLabel className='section-color' >Contact Details</IonLabel>
            </IonRow>
            <IonRow>
            <IonCol size="3">
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput type="text" ref={email} />
                    </IonItem>
                </IonCol>
                <IonCol size="3">
                    <IonItem>
                        <IonLabel position="floating">Mobile Phone/Telephone</IonLabel>
                        <IonInput type="text" ref={mobileNumber} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size ="3">
                    <IonItem>
                        <IonLabel position="stacked">Date Of Birth</IonLabel>
                        <IonInput type="date" ref={DOB} />
                    </IonItem>
                </IonCol>
                <IonCol size= "3">
                    <IonItem>
                        <IonLabel position="floating">ID Number</IonLabel>
                        <IonInput type="text" ref={IdNumber} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonLabel className = "section-color">Gender</IonLabel>    
            </IonRow>
            <IonRow>
                <IonCol size="3">
                    <IonRadioGroup>
                        <IonItem>
                            <IonLabel>Male</IonLabel>
                            <IonRadio value="Male"></IonRadio>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Female</IonLabel>
                            <IonRadio value="Female"></IonRadio>
                        </IonItem>
                    </IonRadioGroup>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonLabel className = "section-color">Education Details</IonLabel>
            </IonRow>
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
                        <IonSelect ref={grade}>{getGrade}</IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonLabel className="section-color">Physical Address</IonLabel>
            </IonRow>
            <IonRow>
                <IonCol size = "2">
                    <IonItem>
                        <IonLabel position="floating">House.No/Building Name/Apartment.No</IonLabel>
                        <IonInput type="text" ref={houseNo} />
                    </IonItem>
                </IonCol>
                <IonCol size = "2">
                    <IonItem>
                        <IonLabel position="floating">Street Name</IonLabel>
                        <IonInput type="text" ref={streetName} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size = "3">
                    <IonItem>
                        <IonLabel position="floating">Area</IonLabel>
                        <IonInput type="text" ref={Area} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size = "3">
                    <IonItem>
                        <IonLabel position="floating">City/Town</IonLabel>
                        <IonSelect ref={town}>{getTownOption}</IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size = "3">
                    <IonItem>
                        <IonLabel position="floating">Country</IonLabel>
                        <IonSelect ref={Country}>{getCountryOption}</IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonLabel className = "section-color">Setup Password</IonLabel>
            </IonRow>
            <IonRow>
                <IonCol size= "3">
                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" ref={password} />
                </IonItem>
                </IonCol>
                <IonCol size= "3">
                    <IonItem>
                        <IonLabel position="floating">Retype Password</IonLabel>
                        <IonInput type="password" ref={password2} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <div>
                <IonRow>
                    <IonCol size= "1">
                        <IonButton onClick= {()=>{insertDetails(contact_type_id,firstName.current!.value,middleName.current!.value,surName.current!.value,email.current!.value,password.current!.value)}}>Submit</IonButton>
                    </IonCol>
                    <IonCol size= "2">
                    </IonCol>
                    <IonCol size= "1">
                        <IonButton onClick= {()=>{}}>Next</IonButton>
                    </IonCol>
                </IonRow>
            </div>
        </div>
        
    )
}
export default DetailsForm
