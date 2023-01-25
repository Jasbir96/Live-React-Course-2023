import Greeter from "./components/Greeter";
import Counter from "./components/Counter";
import List from "./components/List";
import './App.css';

//  function key word  -> uppercase
// props 
function App(props) {
  //message={lecture1}
  return (
    <>
      <h1>React Tutorial {props.message}</h1> {/* React tut lecture 1*/}

      <Greeter name={"Jasbir"}></Greeter> {/*"Greeter Jasbir"*/}

      <Greeter name={"Lavesh"}></Greeter>

      <Counter></Counter>

      <List></List>
    </>

  );
}
export default App;
