import {useState,useRef} from 'react';

export default function Player() {
  const playername=useRef()

    const[enteredName,setEnteredName]=useState('');
    // const [submitted,setSubmitted]=useState(false);

  // function handleChange(event){
  //   setSubmitted(false);
  //   setEnteredName(event.target.value);
  // }

  function displayName(){
    setEnteredName(playername.current.value);
    playername.current.value='';
    
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName??'Unknown Entity'}</h2>
      <p>
        <input type="text" ref={playername}/>
        <button onClick={displayName}>Set Name</button>
      </p>
    </section>
  );
}
