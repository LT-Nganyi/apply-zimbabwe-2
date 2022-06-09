import { IonButton, IonCol, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from "@ionic/react"
import React ,{ useRef, useState } from "react"
import './Search.css';

let primaryhost:any = "https://www.dmzee.co.za/"
const Search = ()=>{

    var ddlLevel:any                        =useRef<HTMLIonInputElement>(null)
    var ddlGrade:any                        =useRef<HTMLIonInputElement>(null)
    var ddlQualification:any                =useRef<HTMLIonInputElement>(null)
    var ddlSubject:any                      =useRef<HTMLIonInputElement>(null)

    const [getLevel,setLevel]                        =useState<HTMLIonSelectOptionElement>()
    const [getCertificate,setCertificate]            =useState<HTMLIonSelectOptionElement>()
    const [getQual,setQual]                          =useState<HTMLIonSelectOptionElement>()
    const [getGrade,setGrade]                        =useState<HTMLIonSelectOptionElement>()
    const [getSubjectList,setSubjectList]            =useState<HTMLIonSelectOptionElement>()
    const [getSubjectParent,setSubjectParent]        =useState<HTMLIonSelectOptionElement>()
    const [getListSearch,setListSearch]                 =useState<HTMLIonRowElement>()

    const [getGradeValue,setGradeValue]                 =useState(0)
    const [getQualificationValue,setQualificationValue] =useState(0)
    const [getLevelValue,setLevelValue]                 =useState(0)
    const [getSubjectValue,setSubjectValue]             =useState(0)

    // ddlGrade.current!.value = 0
    // ddlQualification.current!.value = 0
    // ddlSubject.current!.value = 0
    // ddlLevel.current!.value = 0

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
    const callListSubject = (parent_id:any) =>{
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
                setSubjectList(list)
            // }
            
        })
    }
    const callListSearch=()=>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=search_contact_qualification"+
        "&qualification_id="+getQualificationValue+
        "&level_id="+getLevelValue+
        "&grade_id_1="+getGradeValue+
        "&subject_id="+getSubjectValue,
        // fetch(primaryhost+"education/dbconnect/dbdynamic.jsp?dbo=search_contact_qualification"+
        // "&qualification_id="+ddlQualification.current!.value+
        // "&level_id="+ddlLevel.current!.value+
        // "&grade_id_1="+0+
        // "&subject_id="+0,
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
                        <IonCol size='1'>Select</IonCol>
                        <IonCol>ID</IonCol>
                        <IonCol>Qualification Type</IonCol>
                        <IonCol>Level</IonCol>
                        <IonCol>Subject</IonCol>
                        <IonCol>Grade</IonCol>
                     </IonRow>)
            var combined:any=[]
            var list:any=options[0].map((x:any, i:number)=>{
                return(
                    <IonRow key = {i} className={'row_'+x.id}>
                        <IonCol  className="hover" size="1">
                            {/* <IonCheckbox onIonChange = {(e)=>{if(e.detail.checked){setSelected(x.id)}else{resetSelected(x.id)}}}></IonCheckbox> */}
                        </IonCol>
                        <IonCol>{x.id}</IonCol>
                        <IonCol>{x.qualification}</IonCol>
                        <IonCol>{x.level}</IonCol>
                        <IonCol>{x.subject}</IonCol>
                        <IonCol>{x.grade}</IonCol>
                    </IonRow>
                )
            })
            combined=[headers, list]
            setListSearch(combined)
        })
        .catch(error=>{
            var x:any = <div></div>
            setListSearch(x)
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
    const callSubject=()=>{
        callListSubject(getSubjectParent)
    }
    React.useEffect(()=>{
        // callListSearch()
        callCert()
        // callLevel()
        callGrade()
        // callSubject()

    },[])
    
    return(
        <div className="search-box ion-heading">
            <IonHeader> 
                <IonRow>
                    <IonCol className="ion-text-bold size-20">Search User Details</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="2">
                        <IonItem>
                            <IonLabel position= "floating">Qualification</IonLabel>
                            <IonSelect onIonChange={(e)=>{setQual(e.detail.value);callListLevel(e.detail.value);setQualificationValue(e.detail.value)}} ref={ddlQualification} >{getCertificate}</IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size = "2">
                        <IonItem>
                            <IonLabel position= "floating">Level</IonLabel>
                            <IonSelect defaultValue='0' onIonChange={(e)=>{setSubjectParent(e.detail.value);callListSubject(e.detail.value);setLevelValue(e.detail.value)}} ref={ddlLevel} >
                                {getLevel}
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size = "2">
                        <IonItem>
                            <IonLabel position= "floating">Subject</IonLabel>
                            <IonSelect defaultValue='0'onIonChange={(e)=>{setSubjectValue(e.detail.value)}} ref={ddlSubject} >{getSubjectList}</IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size = "2">
                        <IonItem>
                            <IonLabel position= "floating">Grade</IonLabel>
                            <IonSelect defaultValue='0'onIonChange={(e)=>{setGradeValue(e.detail.value)}} ref={ddlGrade} >{getGrade}</IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol size="3">
                        <IonButton onClick = {()=>{callListSearch()}}>Search</IonButton>
                    </IonCol>
                </IonRow>
            </IonHeader>
            <IonContent className="content-container">
                {getListSearch}
            </IonContent>
        </div>
    )
}

export default Search