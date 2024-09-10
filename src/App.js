import "./styles.css";
import React, { useState, useEffect, useRef } from 'react';

function MyButton() {
  const [percentage, setPercentage] = useState(0);
  const timeoutId = useRef()

  // useEffect verrà eseguito ogni volta che "percentage" cambia
  useEffect(() => {
    if ( percentage === 0) return
    if ( percentage < 100) {
      timeoutId.current = setTimeout(() => setPercentage(percentage + 1), 100)
    }
  }, [percentage]);  // Il secondo parametro è un array di dipendenze, in questo caso contiene "count"


  const handleClick = () => {
    setPercentage(1);
    timeoutId.current = setTimeout(() => setPercentage(percentage + 1), 100)    
  };

  const handleReset = (e) => {
    e.preventDefault()
    clearTimeout(timeoutId.current)
    setPercentage(0)
  }

  return (
    <div>
      <button onClick={handleClick} disabled={percentage > 0}>
        {percentage === 0 ? 'inizia' : percentage}
      </button>
      <p><a onClick={handleReset} href="#">reset</a></p>
    </div>
  );
}



export default function App() {
  return (
    <div className="App">
      <h1>Nested setTimeout</h1>
      <h2>Learn more <a href="https://javascript.info/settimeout-setinterval#nested-settimeout">here</a></h2>
      <MyButton />
    </div>
  );
}
