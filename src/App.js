import logo from './logo.svg';
import './App.css';
import Controlledfunction from './Controlled/Controlledfunction';
import Controlledclass from './Controlled/Controlledclass';
import UnControlledfunction from './Unfunction/UnControlledfunction';
import UnControlledClass from './Unfunction/UncontrolledClass';
function App() {
  return (
    <div className="App">
      <h1>From Programing</h1>
      <Controlledfunction/>
      
      <hr/>
  <Controlledclass/>
  <UnControlledfunction/>
  <hr/>
  <UnControlledClass/>
    </div>
  );
}

export default App;
