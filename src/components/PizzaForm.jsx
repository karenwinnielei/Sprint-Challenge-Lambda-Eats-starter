import React from 'react'

export default function PizzaForm(props){

    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
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
                            name='pepperoni'
                            checked={values.toppings.pepperoni}
                            onChange = {onCheckboxChange}
                        />
                    </label>
                    <label>Sausage&nbsp;
                        <input 
                            type='checkbox'
                            name='sausage'
                            checked={values.toppings.sausage}
                            onChange = {onCheckboxChange}
                        />
                    </label>
                    <label>Mushroom&nbsp;
                        <input 
                            type='checkbox'
                            name='mushroom'
                            checked={values.toppings.mushroom}
                            onChange = {onCheckboxChange}
                        />
                    </label>
                    <label>Onion&nbsp;
                        <input 
                            type='checkbox'
                            name='onion'
                            checked={values.toppings.onion}
                            onChange = {onCheckboxChange}
                        />
                    </label>
                    <h4>Special Instructions</h4>
                    <label>
                        <input className='instructions' 
                            type='text'
                            name = 'instructions'
                            placeholder = 'Type special instructions here'
                            maxLength = '120'
                            value = {values.instructions}
                            onChange = {onInputChange}
                            />
                    </label>               
                </div>
                <button disabled={disabled}>Add to Order</button>
                <div className='errors'>
                    {
                    Object.values(errors).map((error, idx) => (
                    <div key={idx}>{error}</div>
                    ))
                    }
                </div>
            </form>
        </div>
    )
}