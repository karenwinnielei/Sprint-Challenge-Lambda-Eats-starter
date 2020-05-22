import React, {useState, useEffect} from "react";
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import PizzaForm from './PizzaForm'

  const initialFormValues = {
    username:'',
    size:'',
    instructions:'',
  }


export default function App(){
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {

  }

  const onSubmit = evt => {


  }

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <p>Order the best pizza here!</p>
        <div className ='nav-links'>
          <Link to ='/'>Home</Link>
          <Link to='/pizza'>Pizza</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/pizza'>
          <PizzaForm
            values = {formValues} onInputChange = {onInputChange} onSubmit = {onSubmit}
          />
        </Route>

      </Switch>

    </div>
  );
};
