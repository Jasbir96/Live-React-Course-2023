import logo from './logo.svg';
import './App.css';
import UseStateExample from './components/UseStateExample';
import UseReducerExample from './components/UseReducerExample';
import UseEffectExample from './components/UseEffectExample';
import UseRefExample from './components/UseRefExample';
import UseStateEdgeCase from './components/UseStateEdgeCase';
import UseMemo from './components/UseMemo';

function App() {
  return (
    <>
      <h1>Hooks Class</h1>
      {/* <UseStateExample></UseStateExample> */}
      {/* <UseReducerExample></UseReducerExample> */}
      {/* <UseEffectExample></UseEffectExample> */}
      {/* <UseRefExample></UseRefExample> */}
      {/* <UseStateEdgeCase></UseStateEdgeCase> */}
      <UseMemo></UseMemo>
    </>
  );
}

export default App;
