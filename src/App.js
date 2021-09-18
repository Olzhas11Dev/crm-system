import {Route,Switch,useHistory} from 'react-router-dom'
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {useEffect} from 'react'
import ProfilePage from './components/ProfilePage';

function App() {

  const history = useHistory()

  useEffect(()=>{
      history.push('/')
  },[history])
  
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={SignUp}/>
        <Route exact path = '/sign_in' component={SignIn}/>
        <Route exact path = '/profile' component ={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
