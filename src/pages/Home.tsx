import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React,{ useState } from 'react'
import ExploreContainer from '../components/ExploreContainer';
import ListContact from '../components/ListContact';
import ListAdmin from '../components/ListAdmin';
import DetailsForm from '../components/DetailsForm';
import EducationalDetailsForm from '../components/EducationalDetailsForm';

import './Home.css';
import LoginForm from '../components/LoginForm';

const Home: React.FC = () => {
  const[hideListAdmin,showListAdmin] =  useState<boolean>(false)
  const[hideListContact,showListContact] =  useState<boolean>(false)
  const[hideDetailsForm,showDetailsForm] =  useState<boolean>(false)
  const[hideEducationalDetailsForm,showEducationalDetailsForm] = useState<boolean>(false)
  const[hideLoginForm,showLoginForm] =  useState<boolean>(false)

  const setView = (v:any)=>{
    resetView()
    switch(v){
      case 1: showListAdmin(true); break;
      case 2: showListContact(true); break;
      case 3: showDetailsForm(true); break;
      case 4: showEducationalDetailsForm(true); break;
      case 5: showLoginForm(true);break;
    }
  }
  const resetView = () =>{
    showListAdmin(false);
    showListContact(false);
    showDetailsForm(false);
    showEducationalDetailsForm(false)
    showLoginForm(false)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Apply Zimbabwe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol onClick={()=>{setView(1)}}className="hover">List Admin</IonCol>
          <IonCol onClick={()=>{setView(2)}} className="hover">List Contacts</IonCol>
          <IonCol onClick={()=>{setView(3)}} className="hover">Details Form</IonCol>
          <IonCol onClick={()=>{setView(4)}} className='hover' >Education Details</IonCol>
          <IonCol onClick={()=>{setView(5)}} className='hover' >Login Form</IonCol>
        </IonRow>
        {hideListAdmin &&
        <IonRow>
          <IonCol><ListAdmin/></IonCol>
        </IonRow>
        }
        {hideListContact &&
        <IonRow>
          <IonCol><ListContact/></IonCol>
        </IonRow>
        }
        {hideDetailsForm &&
        <IonRow>
          <IonCol><DetailsForm/></IonCol>
        </IonRow>
        }
        {hideEducationalDetailsForm &&
        <IonRow>
          <IonCol><EducationalDetailsForm/></IonCol>
        </IonRow>
        }
        {hideLoginForm &&
        <IonRow>
          <IonCol><LoginForm/></IonCol>
        </IonRow>
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
