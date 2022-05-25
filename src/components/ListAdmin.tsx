import { IonButton, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React,{ useRef, useState } from 'react';
import { arrowForward, returnUpBack, trashBin } from 'ionicons/icons'
import { responsesAreSame } from 'workbox-broadcast-update';
import './ListAdmin.css'
let primaryhost:any="https://www.dmzee.co.za/"
let parent_id:any=0
let list_id:any=0

const ListAdmin = () =>{
    const[getList, setList]     =useState<HTMLIonRowElement>()
    const txtListDesc:any       =useRef<HTMLIonInputElement>(null)
    const txtListUpdate:any     =useRef<HTMLIonInputElement>(null)
    const [getParentId,setParentId] =useState<any>("0")
    const [getGrandParentId,setGrandParentId] = useState<any>("0")
    const [getId,setId]         =useState<any>("0")
    const updateList = () =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/update.jsp?edu=update_list"+
        "&list_id="+getId+
        "&list_desc="+txtListUpdate.current!.value,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data =>{
            callList(getParentId)
        })
    }
    const insertList = () =>{
        var options:any=[]
        // alert(getParentId)
        fetch(primaryhost+"education/dbconnect/insert.jsp?edu=insert_list"+
        "&parent_id="+getParentId+
        "&list_desc="+txtListDesc.current!.value,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data =>{
            callList(getParentId)
        })
    }
    const archiveList = (id:any) =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/archive.jsp?edu=archive_list"+
        "&list_id="+id,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data =>{
            callList(getParentId)
        })
    }
    const callList = (parent_id:any) =>{
        var options:any=[]
        fetch(primaryhost+"education/dbconnect/select.jsp?edu=select_list"+
        "&parent_id="+parent_id+
        "&list_id="+list_id,
        {
            headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            options.push(data.data)
            var headers:any=(<IonRow className="ion-text-bold size-18">
                        <IonCol>ID</IonCol>
                        <IonCol></IonCol>
                        <IonCol size='1'></IonCol>
                        <IonCol>Description</IonCol>
                        <IonCol>CreatedBy</IonCol>
                        <IonCol>Is Archived</IonCol>
                     </IonRow>)
            var combined:any=[]
            var list:any=options[0].map((x:any, i:number)=>{
                setGrandParentId(x.parent_id)
                // alert(getGrandParentId)
                return(
                    <IonRow key = {i}>
                        <IonCol>{x.id}</IonCol>
                        <IonCol>
                            {x.parent}    
                        </IonCol>
                        <IonCol size='1'>
                            {parent_id==0?<div></div>:<IonIcon className="size-32" icon={arrowForward}></IonIcon>}
                        </IonCol>
                        <IonCol onClick = {()=>{setGrandParentId(x.parent_id);setParentId(x.id);callList(x.id);txtListUpdate.current!.value = x.list_desc;setId(x.id)}} className="hover">{x.list_desc}</IonCol>
                        <IonCol>{x.created_by}</IonCol>
                        <IonCol onClick = {()=>{setParentId(x.parent_id);archiveList(x.id)}} className="hover">
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
        .catch(error=>{
            var x:any = <div></div>
            setList(x)
        })
    }
    React.useEffect(()=>{
        callList(parent_id)
    },[])
    return(
        <div className="admin-box ion-heading" >
            <IonHeader>
                <IonRow>
                    <IonCol className="ion-text-bold size-20">List Admin</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="3">
                        <IonItem>
                            <IonLabel position="floating">New List Item</IonLabel>
                            <IonInput type="text" ref={txtListDesc} />
                        </IonItem>
                    </IonCol>
                    <IonCol size="1" >
                        <IonButton onClick = {()=>{insertList()}}>Save</IonButton>
                    </IonCol>
                    <IonCol size='3'>
                        <IonItem>
                            <IonLabel position="floating">Updating</IonLabel>
                            <IonInput type='text' ref={txtListUpdate}></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol size='1'>
                        <IonButton onClick = {()=>{updateList()}}>Update</IonButton>
                    </IonCol>
                    <IonCol size="4" className="ion-text-right" onClick={()=>{callList(getGrandParentId)}}>
                        Back up&nbsp;
                        <IonIcon icon={returnUpBack} className="size-32"></IonIcon>
                    </IonCol>
                </IonRow>
            </IonHeader>
            <IonContent className="content-container">
                {getList}
            </IonContent>
        </div>
    )
}
export default ListAdmin

