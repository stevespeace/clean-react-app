import './App.css';
import cyberlion from "./assets/CyberLions-8521.png"

function App() {
  return (
    <div className="app">

    <div className="outerdiv">

      <img alt="CyberLions" src={cyberlion} />

     <div className="textcontainer">
       <h1>Hi!</h1>
      <p>CyberLions!</p>
      </div>
    </div>


    </div>
  );
}

export default App;
