import './App.css';
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import ConnectionManager from './ServerConnector/ConnectionManager';

let connectionManager = new ConnectionManager();

function App() {
  return (
    <div className="App">
      <Header/>
      <Body connectionManager={connectionManager}/>
    </div>
  );
}

export default App;
