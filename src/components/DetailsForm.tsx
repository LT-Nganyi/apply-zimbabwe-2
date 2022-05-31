import { IonButton, IonCol, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption } from "@ionic/react"
import React, { useDebugValue, useRef, useState } from "react"
import './DetailsForm.css'
let primaryhost:any= "https://www.dmzee.co.za/"
let contact_type_id:any = 2
const DetailsForm = () =>{
    const[hideForm0,showForm0] =  useState<string>("show-form")
    const[hideForm1,showForm1] =  useState<string>("hide-form")
    const[hideForm2,showForm2] =  useState<string>("hide-form")
    const[hideForm3,showForm3] = useState<string>("hide-form")
    const[hideForm4,showForm4] = useState<string>("hide-form")

    const showForm = (v:any)=>{
        resetForm()
        switch(v){
          case 0: showForm0("show-form"); break;
          case 1: showForm1("show-form"); break;
          case 2: showForm2("show-form"); break;
          case 3: showForm3("show-form"); break;
          case 4: showForm4("show-form"); break;
        }
      }
      const resetForm = () =>{
        showForm0("hide-form");
        showForm1("hide-form");
        showForm2("hide-form");
        showForm3("hide-form");
        showForm4("hide-form");
      }
    
    const txtFirstName:any    =useRef<HTMLIonInputElement>(null)
    const txtMiddleName:any   =useRef<HTMLIonInputElement>(null)
    const txtSurname:any      =useRef<HTMLIonInputElement>(null)
    const txtEmail:any        =useRef<HTMLIonInputElement>(null)
    const txtMobileNumber:any  =useRef<HTMLIonInputElement>(null)
    const txtDOB:any          =useRef<HTMLIonInputElement>(null)
    const txtPassword:any      =useRef<HTMLIonInputElement>(null)
    const txtPassword2:any      =useRef<HTMLIonInputElement>(null)
    const txtIdNumber:any      =useRef<HTMLIonInputElement>(null)
    const txtArea:any    =useRef<HTMLIonInputElement>(null)
    const txtHouseNo:any    =useRef<HTMLIonInputElement>(null)
    const txtStreetName:any    =useRef<HTMLIonInputElement>(null)
    const ddlGender:any         =useRef<HTMLIonInputElement>(null)
    const ddlSalutation:any  =useRef<HTMLIonInputElement>(null)
    const ddlTown:any          =useRef<HTMLIonInputElement>(null)
    const ddlIdType:any      =useRef<HTMLIonInputElement>(null)
    const ddlCountry:any    =useRef<HTMLIonInputElement>(null)

    const [getSalutationOption,setSalutationOption] =useState<HTMLIonSelectOptionElement>()
    const [getTownOption,setTownOption] = useState<HTMLIonSelectOptionElement>()
    const [getCountryOption,setCountryOption] =useState<HTMLIonSelectOptionElement>()
    const [getIdTypeOption,setIdTypeOption] =useState<HTMLIonSelectOptionElement>()
    const [getGenderOption,setGenderOption] = useState<HTMLIonSelectOptionElement>()
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
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=select_list"+
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
    const callListIdType = (parent_id:any) =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=select_list"+
        "&parent_id="+parent_id+
        "&list_id="+0,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
            options.push(data.data)
           if (parent_id==122){
                var list:any=options[0].map((x:any,i:number)=>{
                    return(
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    )
                })
                setIdTypeOption(list)
           }
            
        })
        
    }
    const callListGender = (parent_id:any) =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=select_list"+
        "&parent_id="+parent_id+
        "&list_id="+0,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
            options.push(data.data)
           if (parent_id==38){
                var list:any=options[0].map((x:any,i:number)=>{
                    return(
                        <IonSelectOption key={i} value={x.id}>{x.list_desc}</IonSelectOption>
                    )
                })
                setGenderOption(list)
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
    const callIdType =()=>{
        callListIdType(122)
    }
    const callGender=()=>{
        callListGender(38)
    }
    const insertContactDetails = () =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=insert_contact"+
        "&parent_id="+0+
        "&contact_type_id="+3+
        "&forename="+txtFirstName.current!.value+
        "&middle_name="+txtMiddleName.current!.value+
        "&surname="+txtSurname.current!.value+
        "&password="+txtPassword.current!.value+
        "&google_id="+
        "&img_url="+
        "&created_by="+2+
        "&email="+txtEmail.current!.value+
        "&number="+txtMobileNumber.current!.value+
        "&salutation_id="+ddlSalutation.current!.value+
        "&date_of_birth="+txtDOB.current!.value+
        "&id_number="+txtIdNumber.current!.value+
        "&id_type_id="+ddlIdType.current!.value+
        "&gender_id="+ddlGender.current!.value+
        "&physical_address="+txtStreetName.current!.value+
        "&house_no="+txtHouseNo.current!.value+
        "&area="+txtArea.current!.value+
        "&city_id="+ddlTown.current!.value+
        "&country_id="+ddlCountry.current!.value,
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
        callTown()
        callCountry()
        callIdType()
        callGender()
    },[])
    
    
    return(
        <div>
            <div className={"details detail-0 "+hideForm0}>
                <IonHeader>
                    <IonRow>
                        <IonLabel className='section-color' >Contact Details</IonLabel>
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
                            <IonLabel position="floating">Mobile Phone/Telephone</IonLabel>
                            <IonInput type="text" ref={txtMobileNumber} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonFooter>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton>Cancel</IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={()=>showForm(1)}>Next</IonButton>
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </div>
            <div className={'details details-1 '+hideForm1}>
                <IonHeader>
                    <IonRow>
                        <IonLabel className = "section-color">Setup Password</IonLabel>
                    </IonRow>
                </IonHeader>
                <IonRow>
                    <IonCol size= "12">
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password" ref={txtPassword} />
                    </IonItem>
                    </IonCol>
                    <IonCol size= "12">
                        <IonItem>
                            <IonLabel position="floating">Retype Password</IonLabel>
                            <IonInput type="password" ref={txtPassword2} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonFooter>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton onClick={()=>showForm(0)}>Back</IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={()=>showForm(2)}>Next</IonButton>
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </div>
            <div className={"details detail-2 "+hideForm2}>
                <IonRow>
                    <IonCol className= "section-color size-24">
                        Enter Details
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size = "12">
                        <IonItem>
                            <IonLabel position="floating">Title</IonLabel>
                            <IonSelect ref={ddlSalutation}>{getSalutationOption}</IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <IonItem>
                            <IonLabel position="floating">First Name</IonLabel>
                            <IonInput type="text" ref={txtFirstName} />
                        </IonItem>
                    </IonCol>
                    <IonCol size="12">
                        <IonItem>
                            <IonLabel position="floating">Middle Name</IonLabel>
                            <IonInput type="text" ref={txtMiddleName} />
                        </IonItem>
                    </IonCol>
                    <IonCol size="12">
                        <IonItem>
                            <IonLabel position="floating">Surname</IonLabel>
                            <IonInput type="text" ref={txtSurname} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonFooter>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton onClick={()=>showForm(1)}>Back</IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={()=>showForm(3)}>Next</IonButton>
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </div>
            <div className={'details detail-3 '+hideForm3}>
                <IonRow>
                    <IonCol size ="12">
                        <IonItem>
                            <IonLabel position="stacked">Date Of Birth</IonLabel>
                            <IonInput type="date" ref={txtDOB} />
                        </IonItem>
                    </IonCol>
                    <IonCol size= "12">
                        <IonItem>
                            <IonLabel position="floating">ID Type</IonLabel>
                            <IonSelect ref={ddlIdType}>{getIdTypeOption}</IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size= "12">
                        <IonItem>
                            <IonLabel position="floating">ID Number</IonLabel>
                            <IonInput type="text" ref={txtIdNumber} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonLabel className = "section-color">Gender</IonLabel>    
                </IonRow>
                <IonRow>
                    <IonCol size="12">
                        <IonSelect ref={ddlGender}>{getGenderOption}</IonSelect>
                    </IonCol>
                </IonRow>
                <IonFooter>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton onClick={()=>showForm(2)}>Back</IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={()=>showForm(4)}>Next</IonButton>
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </div>
            <div className={"details detail-4 "+hideForm4}>
                <IonHeader>
                    <IonRow>
                        <IonLabel className="section-color">Physical Address</IonLabel>
                    </IonRow>
                </IonHeader>
            <IonRow>
                <IonCol size = "12">
                    <IonItem>
                        <IonLabel position="floating">House.No/Building Name/Apartment.No</IonLabel>
                        <IonInput type="text" ref={txtHouseNo} />
                    </IonItem>
                </IonCol>
                <IonCol size = "12">
                    <IonItem>
                        <IonLabel position="floating">Street Name</IonLabel>
                        <IonInput type="text" ref={txtStreetName} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size = "12">
                    <IonItem>
                        <IonLabel position="floating">Area</IonLabel>
                        <IonInput type="text" ref={txtArea} />
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size = "12">
                    <IonItem>
                        <IonLabel position="floating">City/Town</IonLabel>
                        <IonSelect ref={ddlTown}>{getTownOption}</IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size = "12">
                    <IonItem>
                        <IonLabel position="floating">Country</IonLabel>
                        <IonSelect ref={ddlCountry}>{getCountryOption}</IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonFooter>
                    <IonRow>
                        <IonCol className="ion-text-left">
                            <IonButton onClick={()=>showForm(3)}>Back</IonButton>
                        </IonCol>
                        <IonCol className="ion-text-right">
                            <IonButton onClick={()=>{insertContactDetails()}} >Submit</IonButton>
                        </IonCol>
                    </IonRow>
                </IonFooter>
            </div>
            {/* <div>
                <IonRow>
                    <IonCol size= "1">
                        <IonButton onClick= {()=>{insertDetails()}}>Submit</IonButton>
                    </IonCol>
                    <IonCol size= "2">
                    </IonCol>
                    <IonCol size= "1">
                        <IonButton onClick= {()=>{}}>Next</IonButton>
                    </IonCol>
                </IonRow>
            </div> */}
        </div>
        
    )
}
export default DetailsForm

// Trevor Nganyi
// Brian Mugami
// Leroy Lusenaka