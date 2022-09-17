import React from 'react'
import './Controls.css'
import Builder from "./Builder/Builder";
import Button from "../UI/Button/Button";

const products = [
    {title: 'Product 1', type: 'product1'},
    {title: 'Product 2', type: 'product2'},
    {title: 'Product 3', type: 'product3'},
    {title: 'Product 4', type: 'product4'}
]

const Controls = (props) => {
    return(
        <div className={'controls'}>
            <div className={'total-price'}>
                <p>
                    Total Price: {props.totalPrice}
                </p>
            </div>
            {products.map((item) => {
                return <Builder key={item.title} title={item.title} add={()=>props.productAdd(item.type)} remove={()=>props.productRemove(item.type)} />
            })}
            <Button btnType={'btn-lg btn-info mt-2'} click={props.order}>Order</Button>
        </div>
    )
};

export default Controls
