import React, { useState, useEffect } from "react";
import './nullstyle.css';
import Main from './components/Container';

function App() {
  // const [products, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.products));
  // }, []);

  return (
    <div className="App">
     <Main />
    </div>
  );
}

export default App;

