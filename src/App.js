import React from 'react';
import './App.css';
import Profile from './Component/Profile/Profile';

function App() {
  const alertMyInput = name => alert(name);
  
  return (
    <div className="App">
     
      <img src='jjj.jpg 'alt='jjjj' className='image'></img>
     <Profile  name="skander" bio="hello my name is skander i am a nice guy im friend of  si [hammami] rania i apologize about being selfish i hope we can build strong profesional relationship" profession="Web developer" alertMyInput={alertMyInput}><img src='/lion.jpg' alt='fff' className='profileimage'></img></Profile>
      
    </div>
  );
  
}





export default App;
