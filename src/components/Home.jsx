import React from 'react'

export default function Pizza(props){
    const { details } = props

    if (!details) {
    return <h3>So many customization options with size, toppings, and special instructions!</h3>
    }

    return(
        <div>
            <h3>{details.username}</h3>
            <p>Size: {details.size} </p>
            <p>Toppings:</p>
            <p>{details.toppings}</p>
            <p>Special Instructions: {details.instructions} </p>
        </div>
    )
}