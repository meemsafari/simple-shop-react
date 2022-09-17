import React from 'react'
import './Builder.css'
import Button from "../../UI/Button/Button";

const Builder = (props) => {
    return(
        <div className={'builder'}>
            <div>
                {props.title}
            </div>
            <Button btnType={'btn-success'} click={props.add} >Add</Button>
            <Button btnType={'btn-danger'} click={props.remove} >Remove</Button>
        </div>
    )
}

export default Builder
