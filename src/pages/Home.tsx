import { IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React,{ useState } from 'react'
import ExploreContainer from '../components/ExploreContainer';
import ListContact from '../components/ListContact';
import ListAdmin from '../components/ListAdmin';
import DetailsForm from '../components/DetailsForm';
import EducationalDetailsForm from '../components/EducationalDetailsForm';

import './Home.css';
import LoginForm from '../components/LoginForm';
import Search from '../components/Search';
import Homelogo from '../components/Homelogo';
var userProperties:any  =[]
var state:any ={
  primaryhost: "https://www.dmzee.co.za/",
  user_id:          0,
  contact_type_id:  0,
  forename:         '',
  middle_name:      '',
  surname:          '',
  email:            '',
}
const Home: React.FC = () => {
  const [hideListAdmin,showListAdmin]                           = useState<boolean>(false)
  const [hideListContact,showListContact]                       = useState<boolean>(false)
  const [hideDetailsForm,showDetailsForm]                       = useState<boolean>(false)
  const [hideEducationalDetailsForm,showEducationalDetailsForm] = useState<boolean>(false)
  const [hideLoginForm,showLoginForm]                           = useState<boolean>(false)
  const [getAdmin,setAdmin]                                     = useState<boolean>(false)
  const [getLogin,setLogin]                                     = useState<boolean>(false)
  const [getUser,setUser]                                       = useState<boolean>(false)
  const [hideSearch,showSearch]                                 = useState<boolean>(false)
  
  const setView = (v:any)=>{
    resetView()
    switch(v){
      case 1: showListAdmin(true); break;
      case 2: showListContact(true); break;
      case 3: showDetailsForm(true); break;
      case 4: showEducationalDetailsForm(true); break;
      case 5: showLoginForm(true);break;
      case 6: showSearch(true);break;

    }
  }
  const resetView = () =>{
    showListAdmin(false);
    showListContact(false);
    showDetailsForm(false);
    showEducationalDetailsForm(false);
    showLoginForm(false);
    showSearch(false);
  }
  React.useEffect(()=>{
    showLoginForm(true)
  },[])
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
          {getLogin &&
          <div className="div-style">
            {getAdmin && 
            <div >
              <IonCol onClick={()=>{setView(1)}}className="hover">List Admin</IonCol>
              <IonCol onClick={()=>{setView(2)}} className="hover">List Contacts</IonCol>
              <IonCol onClick={()=>{setView(6)}} className="hover">Search</IonCol>
            </div>
            }
            {getUser&&
            <div>
            <IonCol onClick={()=>{setView(3)}} className="hover">Details Form</IonCol>
            <IonCol onClick={()=>{setView(4)}} className='hover' >Education Details</IonCol>
            </div>
            }
            {/* <IonCol onClick={()=>{setView(5)}} className='hover' >Login Form</IonCol> */}
          </div>
          }
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
          <IonCol><DetailsForm cancelSignUp={()=>{setView(5)}}/></IonCol>
        </IonRow>
        }
        {hideEducationalDetailsForm &&
        <IonRow>
          <IonCol><EducationalDetailsForm userProperties={userProperties}/></IonCol>
        </IonRow>
        }
        {/* {hideLoginForm &&
        <IonRow>
          <IonCol><LoginForm signUp={()=>{setView(3)}} state={(e:any)=>{userProperties=e;
            if(e.contact_type_id==2 || e.contact_type_id==18){resetView();setAdmin(true);setLogin(true);setUser(true)} 
            else
            {resetView();setLogin(true);setUser(true)}
            }
            }/>
            </IonCol>
        </IonRow>
        } */}
        {hideLoginForm &&
        <IonRow>
          <IonCol><Homelogo primaryhost={state.primaryhost} 
            details={(d:any)=>{
            alert(d.email); 
            state.user_id         = d.user_id;
            state.contact_type_id = d.contact_type_id;
            state.forename        = d.forename;
            state.middle_name     = d.middle_name;
            state.surname         = d.surname;
            state.email           = d.email;
            if(d.contact_type_id==2 || d.contact_type_id==18){resetView();setAdmin(true);setLogin(true);setUser(true)} 
            else
            {resetView();setLogin(true);setUser(true)}
            }
            }/>
            </IonCol>
        </IonRow>
        }
        {hideSearch &&
        <IonRow>
          <IonCol><Search/></IonCol>
        </IonRow>
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
