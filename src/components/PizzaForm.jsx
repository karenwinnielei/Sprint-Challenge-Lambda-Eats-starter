import React from 'react'

export default function PizzaForm(props){

    const {
        values,
        onInputChange,
        onSubmit
    } = props

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <h2>Order Pizza</h2>
                </div>
                <div>
                    <h4>Options</h4>
                    <label>Name&nbsp; 
                        <input 
                            type='text'
                            name = 'username'
                            placeholder = 'Type name on order'
                            maxLength = '20'
                            value = {values.username}
                            onChange = {onInputChange}
                            />
                    </label>
                    <label>Size&nbsp;
                        <select 
                            name='size' 
                            value={values.size}
                            onChange = {onInputChange}>
                            <option value=''>Select a Size</option>    
                            <option value ='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                        </select>
                    </label>
                    <h4>Toppings</h4>
                    <label>Pepperoni&nbsp;
                        <input 
                            type='checkbox'
                            name='topping1'
                            checked={values.topping1}
                            onChange = {onInputChange}
                        />
                    </label>
                    <label>Sausage&nbsp;
                        <input 
                            type='checkbox'
                            name='topping2'
                            checked={values.topping2}
                            onChange = {onInputChange}
                        />
                    </label>
                    <label>Mushroom&nbsp;
                        <input 
                            type='checkbox'
                            name='topping3'
                            checked={values.topping3}
                            onChange = {onInputChange}
                        />
                    </label>
                    <label>Onion&nbsp;
                        <input 
                            type='checkbox'
                            name='topping4'
                            checked={values.topping4}
                            onChange = {onInputChange}
                        />
                    </label>                    
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}