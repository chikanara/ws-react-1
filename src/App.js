import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, BrowserRouter as Router} from  "react-router-dom"
import Nav from './components/Nav/Nav';
import UserList from './components/UserList/UserList';
import Deatail from './components/Deatail/Deatail';

function App() {
  return (
    <div className="App">
      
     <Router  >
     <Nav/>
    <Route path="/" component={UserList} exact/>
    <Route path="/user/:id" exact render={(props) => <Deatail {...props} />} />
     </Router>
    </div>
  );
}

export default App;
