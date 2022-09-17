import React from 'react';
import Wrapper from "../../hoc/Wrapper";

const Order = (props) => {

    const summary = Object.keys(props.products).map((item)=>{
        return (
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        )

    })

    return(
        <Wrapper>
            <h3>Order</h3>
            <ul>
                {summary}
            </ul>
        </Wrapper>
    )
}

export default Order
