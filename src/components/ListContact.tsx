import { IonButton, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonPage, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { call, returnUpBack, trashBin } from 'ionicons/icons';
import React,{ useRef, useState } from 'react';
import { responsesAreSame } from 'workbox-broadcast-update';
import './ListContact.css';

let primaryhost:any="https://www.dmzee.co.za/"
let contact_id:any=0
let contact_type_id:any=0
var grand_parent_id:any

const ListContact = () =>{
    const txtListDesc:any       =useRef<HTMLIonInputElement>(null)
    const txtListUpdate:any     =useRef<HTMLIonInputElement>(null)
    const[getList, setList]     =useState<HTMLIonRowElement>()
    const[hideContactTypeModal,showContactTypeModal]    =useState<boolean>(false)
    const[getContactType,setContactType]    =useState<HTMLIonRowElement>()

    const updateContactType =(list_id:any,contact_id:any)=>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/update.jsp?edu=update_contact_type"+
        "&list_id="+list_id+
        "&contact_id="+contact_id,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data =>{
            callContact()
            showContactTypeModal(false)
        })
    }
    const callContactType = () =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/select.jsp?edu=select_list"+
        "&parent_id="+1+
        "&list_id="+0,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            options.push(data.data)
            var list:any=options[0].map((x:any, i:number)=>{
                return(
                    <IonRow key = {i}>
                        <IonCol size='6' className='ion-text-left'>
                            <IonRadio value={x.id}></IonRadio>&nbsp;{x.list_desc}
                        </IonCol>
                    </IonRow>
                )
            })
            
            setContactType(list)
        })
    }
    const archiveContact = (id:any,parent_id:any) =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/archive.jsp?edu=archive_contact"+
        "&contact_id="+id,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data =>{
            callContact()
        })
    }
    
    const callContact = () =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/select.jsp?edu=select_contact"+
        "&contact_id="+contact_id+
        "&contact_type_id="+contact_type_id,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            options.push(data.data)
            var headers:any=(<IonRow className="ion-text-bold size-18">
                        <IonCol size='1'>ID</IonCol>
                        <IonCol>Contact Type</IonCol>
                        <IonCol>Forename</IonCol>
                        <IonCol>Surname</IonCol>
                        <IonCol size='3'>Email</IonCol>
                        <IonCol>Archived</IonCol>
                        
                     </IonRow>)
            var combined:any=[]
            var list:any=options[0].map((x:any, i:number)=>{
                return(
                    <IonRow key = {i}>
                        <IonCol size='1'>{x.id}</IonCol>
                        <IonCol className="hover" onClick= {()=>{contact_id=x.id;showContactTypeModal(true);callContactType()}}>{x.contact_type}</IonCol>
                        <IonCol>{x.forename}</IonCol>
                        <IonCol>{x.surname}</IonCol>
                        <IonCol size='3'>{x.email}</IonCol>
                        <IonCol onClick = {()=>{archiveContact(x.id,x.parent_id)}} className="hover">
                            {x.is_archived == 1?
                            <IonIcon icon={trashBin} className = "text-red size-24"></IonIcon>
                            :
                            <IonIcon icon={trashBin} className = "text-green size-24"></IonIcon>
                        
                            }
                        </IonCol>
                    </IonRow>
                )
            })
            combined=[headers, list]
            setList(combined)
        })
    }
    React.useEffect(()=>{
        callContact()
    },[])
    return(
        <div>
        <IonModal isOpen={hideContactTypeModal} onDidDismiss={()=>{showContactTypeModal(false)}}>
            <IonHeader className="size-24 ion-text-bold">Contact Type</IonHeader>
            <IonContent className="ion-padding ion-text-center">
                <IonRadioGroup onIonChange={(e)=>{updateContactType(e.detail.value,contact_id)}}>
                    {getContactType}
                </IonRadioGroup>
            </IonContent>
            <IonFooter>

            </IonFooter>
        </IonModal>
        <div className="admin-box ion-heading" >
            <IonHeader>
                <IonRow>
                    <IonCol className="ion-text-bold size-20">Contact List</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-text-right" >
                        Back up&nbsp;
                        <IonIcon icon={returnUpBack} className="size-32"></IonIcon>
                    </IonCol>
                </IonRow>
            </IonHeader>
            <IonContent className="content-container">
                {getList}
            </IonContent>
        </div>
        </div>
    )
}
export default ListContact

// <IonCol size="4" className="ion-text-right" onClick={()=>{callList(grand_parent_id)}}>