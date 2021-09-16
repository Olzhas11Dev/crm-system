import {Route,Switch,useHistory} from 'react-router-dom'
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {useEffect} from 'react'

function App() {

  const hystory = useHistory()

  useEffect(()=>{
      hystory.push('/')
  },[hystory])
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={SignUp}/>
        <Route exact path = '/sign_in' component={SignIn}/>
      </Switch>
     
      <Route/>
    </div>
  );
}

export default App;
