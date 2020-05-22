import React, {useState, useEffect} from "react";
import { Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import PizzaForm from './PizzaForm'
import formSchema from '../validation/formSchema'
import * as yup from 'yup'


  const initialFormValues = {
    username:'',
    size:'',
    toppings: {
      topping1: false,
      topping2: false,
      topping3: false,
      topping4: false,
    },
    instructions:'',
  }

  const initialFormErrors = {
    username:'',
    size:'',
  }

  const initialDisabled = true

export default function App(){
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const onInputChange = evt => {
    const { name } = evt.target
    const { value } = evt.target
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
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
