import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm';
import ParentComponent from './ParentComponent';
import AboutPage from './AboutPage';
import Snackbar from './Snackbar';
import ParentComponent2 from './ParentComponent2';
import BookList from './BookList';
import UserModal from './UserModal';
import Albums from './Albums';
import FastFoods from './FastFoods';
import Button4 from './Button4';
import Tag from './Tag';
import Tabs2 from './Tabs2';
import Pupplr from './Pupplr';
//import AppToast from './AppToast';

import Clock from './Clock';
import Counter from './Counter';
import Count from './Count';
import AppFunctional from './AppFunctional';
//import Shop from './Container/Shop';
//import { Provider } from 'react-redux';
//import store from './store';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Application numéro deux / cours num 7</h2>
       
      <Count />
      
       <p></p>
       <ParentComponent2 />
      <hr />
      <Button4 />
      
       <p></p>
       <Tag 
        backgroundColor="#ff0000"
        color="white"
        borderRadius="0"
        label="Youtube"
      />
      <Tag 
        backgroundColor="#6441a5"
        color="hsl(0, 0%, 100%)"
        borderRadius="4"
        label="Twitch"
      />
       <Tag 
        backgroundColor="#e1306c"
        color="rgb(255, 255, 255)"
        borderRadius="8"
        label="Instagram"
      />
       <p></p>
        <h3>Composant BookList:</h3>
       <BookList />
       <p></p>
       <p></p>
      <ContactForm />
      <p></p>
      <ParentComponent />
      
      </header>
     
     
      <AboutPage />
      <Snackbar
  top={10}
  right={10}
  color="#00b894"
>
  Votre réservation a <strong>bien été prise en compte</strong>!
</Snackbar>
<p></p>
<h3>Application AppToast:</h3>

<p></p>
<h3>Composant UserProfile:</h3>
<UserModal />
<p></p>
<Pupplr />
<p></p>
<h3>Composant Tabs2:</h3>
<Tabs2 />
<p></p>
       <h3>Composant Albums:</h3>
        <Albums />
        <p></p>
        <h3>Composant FastFoods:</h3>
        <FastFoods />
        <p></p>
    </div>
  );
}

export default App;
