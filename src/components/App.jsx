import React, {useState, useEffect} from "react";
import { Route, Switch, Link } from 'react-router-dom'
import Pizza from './Home'
import PizzaForm from './PizzaForm'
import formSchema from '../validation/formSchema'
import * as yup from 'yup'
import axios from 'axios'


  const initialFormValues = {
    username:'',
    size:'',
    toppings: {
      pepperoni: false,
      sausage: false,
      mushroom: false,
      onion: false,
    },
    instructions:'',
  }

  const initialFormErrors = {
    username:'',
    size:'',
  }

  const initialPizza = []
  const initialDisabled = true

export default function App(){
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [pizza, setPizza] = useState(initialPizza)

  const postNewPizza = newPizza => {
      axios
        .post('https://reqres.in/api/users', newPizza)
        .then(res => {
          setPizza([...pizza, res.data]);
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
        setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newPizza = {
      username: formValues.username.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true),
      instructions: formValues.instructions.trim()
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

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
        <Route path='/pizza'>
          <Pizza/>
        </Route>
        <Route exact path='/'>
          <PizzaForm
            values = {formValues} 
            onInputChange = {onInputChange} 
            onCheckboxChange={onCheckboxChange} 
            onSubmit = {onSubmit} 
            disabled={disabled} 
            errors={formErrors}
          />

          {pizza.map(pz => {
            return (
              <Pizza key={pz.id} details={pz}/>
            )
          })
        }
        </Route>

      </Switch>

    </div>
  );
};
