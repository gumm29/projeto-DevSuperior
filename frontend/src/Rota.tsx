import DashBoard from 'pages/DashBoard'
import Home from 'pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const Rota = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Rota