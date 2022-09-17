import React from 'react';
import Wrapper from "../../hoc/Wrapper";
import Button from "../UI/Button/Button";
import './Order.css'

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
            <ul className={'order-list'}>
                {summary}
            </ul>
            <p>
                <b>
                    Total price: {props.total}
                </b>
            </p>
            <Button btnType={'btn-success'} click={props.continue}>Yes</Button>
            <Button btnType={'btn-danger'} click={props.cancel}>No</Button>
        </Wrapper>
    )
}

export default Order
