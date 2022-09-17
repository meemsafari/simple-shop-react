import React from 'react'
import './Builder.css'

const Builder = (props) => {
    return(
        <div className={'builder'}>
            <div>
                {props.title}
            </div>
            <button onClick={props.add} className={'btn btn-success'}>
                Add
            </button>
            <button onClick={props.remove} className={'btn btn-danger'}>
                Remove
            </button>
        </div>
    )
}

export default Builder
